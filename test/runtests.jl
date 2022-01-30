using ThreadPinning
using Test
using Base.Threads: @threads, nthreads
using Random: shuffle

nthreads() ≥ 2 || error("Can't run tests with single Julia thread! Forgot to set `JULIA_NUM_THREADS`?")

function check_compact_within_socket(cpuids; nsockets)
    for s in 1:nsockets
        ids_within_socket = cpuids[s:nsockets:end]
        if ids_within_socket != minimum(ids_within_socket):maximum(ids_within_socket)
            return false
        end
    end
    return true
end

@testset "ThreadPinning.jl" begin
    @testset "Helper" begin
        @test ThreadPinning.interweave([1, 2, 3, 4], [5, 6, 7, 8]) == [1, 5, 2, 6, 3, 7, 4, 8]
        @test ThreadPinning.interweave(1:4, 5:8) == [1, 5, 2, 6, 3, 7, 4, 8]
        @test ThreadPinning.interweave(1:4, 5:8, 9:12) == [1, 5, 9, 2, 6, 10, 3, 7, 11, 4, 8, 12]
        # different size inputs
        @test_throws ArgumentError ThreadPinning.interweave([1, 2, 3, 4], [5, 6, 7, 8, 9])
    end

    @testset "Querying CPU IDs" begin
        @test typeof(getcpuid()) == Int
        @test typeof(getcpuids()) == Vector{Int}
        @test getcpuids() == getcpuid.(1:Threads.nthreads())
    end

    @testset "threadinfo()" begin
        @test isnothing(threadinfo())
    end

    @testset "Thread Pining (explicit)" begin
        cpuid_before = getcpuid()
        cpuid_new = cpuid_before != 1 ? 1 : 0
        @test pinthread(cpuid_new)
        @test getcpuid() == cpuid_new
        cpuids_new = shuffle(0:nthreads()-1)
        @test isnothing(pinthreads(cpuids_new))
        @test getcpuids() == cpuids_new
        cpuids_new = reverse(0:nthreads()-1)
        @test isnothing(pinthreads(cpuids_new))
        @test getcpuids() == cpuids_new

        rand_thread = rand(1:Threads.nthreads())
        for cpuid in rand(0:Sys.CPU_THREADS-1, 5)
            @test isnothing(pinthread(rand_thread, cpuid))
            @test getcpuid(rand_thread) == cpuid
        end
    end

    @testset "Thread Pinning (compact)" begin
        @assert getcpuids() != 0:nthreads()-1
        @test isnothing(pinthreads(:compact; nthreads = 2))
        @test getcpuids()[1:2] == 0:1
        @test isnothing(pinthreads(:compact))
        @test getcpuids() == 0:nthreads()-1
    end

    @testset "Thread Pinning (scatter)" begin
        # no hyperthreads
        # default, i.e. nsockets == 2 and hyperthreads == false
        @test isnothing(pinthreads(:scatter))
        cpuids_after = getcpuids()
        @test check_compact_within_socket(cpuids_after; nsockets = 2)
        # single-socket, no hyperthreads
        @test isnothing(pinthreads(:scatter; nsockets = 1))
        cpuids_after = getcpuids()
        @test cpuids_after == 0:nthreads()-1
        @test check_compact_within_socket(cpuids_after; nsockets = 1) # same as above, but why not :)

        # hyperthreads
        # fresh setup agin
        cpuids_before = reverse(0:nthreads()-1)
        pinthreads(cpuids_before)
        @assert getcpuids() == cpuids_before
        # single-socket + hyperthreads
        @test isnothing(pinthreads(:scatter; nsockets = 1, hyperthreads = true))
        cpuids_after = getcpuids()
        @test cpuids_after == 0:nthreads()-1
        @test check_compact_within_socket(cpuids_after; nsockets = 1) # same as above, but why not :)
        # dual-socket + hyperthreads
        # TODO: how to test this properly?
    end

    @testset "Core2CoreLatency" begin
        latencies = ThreadPinning.bench_core2core_latency()
        @test typeof(latencies) == Matrix{Float64}
        @test size(latencies) == (Sys.CPU_THREADS, Sys.CPU_THREADS)
    end

    @testset "Hwloc support" begin
        # setup
        cpuids_before = reverse(0:nthreads()-1)
        pinthreads(cpuids_before)
        @assert getcpuids() == cpuids_before

        using Hwloc
        @test isnothing(threadinfo())
        # scatter pinning
        @test isnothing(pinthreads(:scatter))
        cpuids_after = getcpuids()
        @test cpuids_after != cpuids_before
        # check "compact" pinning within each package
        npackages = Hwloc.num_packages()
        @test check_compact_within_socket(cpuids_after; nsockets = npackages)
    end
end