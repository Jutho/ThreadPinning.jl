var documenterSearchIndex = {"docs":
[{"location":"explanations/how/#how","page":"How It Works","title":"How It Works","text":"","category":"section"},{"location":"explanations/how/","page":"How It Works","title":"How It Works","text":"We use libc's sched_getcpu to query the CPU-core ID for a thread and libuv's uv_thread_setaffinity to set the affinity of a thread. For the corresponding Julia wrappers, see LibX.","category":"page"},{"location":"refs/api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"refs/api/#Index","page":"API","title":"Index","text":"","category":"section"},{"location":"refs/api/","page":"API","title":"API","text":"Pages   = [\"api.md\"]\nOrder   = [:function, :type]","category":"page"},{"location":"refs/api/#References","page":"API","title":"References","text":"","category":"section"},{"location":"refs/api/","page":"API","title":"API","text":"Modules = [ThreadPinning]\nPages   = [\"querying.jl\", \"pinning.jl\", \"threadinfo.jl\"]","category":"page"},{"location":"refs/api/#ThreadPinning.cpuids_per_numa-Tuple{}","page":"API","title":"ThreadPinning.cpuids_per_numa","text":"Returns a Vector{Vector{Int}} which indicates the CPUIDs associated with the available NUMA nodes\n\n\n\n\n\n","category":"method"},{"location":"refs/api/#ThreadPinning.cpuids_per_socket-Tuple{}","page":"API","title":"ThreadPinning.cpuids_per_socket","text":"Returns a Vector{Vector{Int}} which indicates the CPUIDs associated with the available CPU sockets\n\n\n\n\n\n","category":"method"},{"location":"refs/api/#ThreadPinning.getcpuid-Tuple{Integer}","page":"API","title":"ThreadPinning.getcpuid","text":"Returns the ID of the CPU on which the given Julia thread (threadid) is currently executing.\n\n\n\n\n\n","category":"method"},{"location":"refs/api/#ThreadPinning.getcpuid-Tuple{}","page":"API","title":"ThreadPinning.getcpuid","text":"Returns the ID of the CPU on which the calling thread is currently executing.\n\nSee sched_getcpu for more information.\n\n\n\n\n\n","category":"method"},{"location":"refs/api/#ThreadPinning.getcpuids-Tuple{}","page":"API","title":"ThreadPinning.getcpuids","text":"Returns the ID of the CPUs on which the Julia threads are currently running.\n\nSee getcpuid for more information.\n\n\n\n\n\n","category":"method"},{"location":"refs/api/#ThreadPinning.hyperthreading_is_enabled-Tuple{}","page":"API","title":"ThreadPinning.hyperthreading_is_enabled","text":"Check whether hyperthreading is enabled.\n\n\n\n\n\n","category":"method"},{"location":"refs/api/#ThreadPinning.ishyperthread-Tuple{Integer}","page":"API","title":"ThreadPinning.ishyperthread","text":"Check whether the given cpu thread is a hyperthread (i.e. the second cpu thread associated with a CPU-core).\n\n\n\n\n\n","category":"method"},{"location":"refs/api/#ThreadPinning.nnuma-Tuple{}","page":"API","title":"ThreadPinning.nnuma","text":"Number of NUMA nodes\n\n\n\n\n\n","category":"method"},{"location":"refs/api/#ThreadPinning.nsockets-Tuple{}","page":"API","title":"ThreadPinning.nsockets","text":"Number of CPU sockets\n\n\n\n\n\n","category":"method"},{"location":"refs/api/#ThreadPinning.sysinfo-Tuple{}","page":"API","title":"ThreadPinning.sysinfo","text":"Get information about the system like how many sockets or NUMA nodes it has, whether hyperthreading is enabled, etc.\n\n\n\n\n\n","category":"method"},{"location":"refs/api/#ThreadPinning.pinthread-Tuple{Integer, Integer}","page":"API","title":"ThreadPinning.pinthread","text":"pinthread(threadid::Integer, cpuid::Integer; kwargs...)\n\nPin the given Julia thread (threadid) to the CPU with ID cpuid.\n\n\n\n\n\n","category":"method"},{"location":"refs/api/#ThreadPinning.pinthread-Tuple{Integer}","page":"API","title":"ThreadPinning.pinthread","text":"pinthread(cpuid::Integer; warn::Bool = true)\n\nPin the calling Julia thread to the CPU with id cpuid.\n\n\n\n\n\n","category":"method"},{"location":"refs/api/#ThreadPinning.pinthreads-Tuple{AbstractVector{<:Integer}}","page":"API","title":"ThreadPinning.pinthreads","text":"pinthreads(cpuids::AbstractVector{<:Integer}[; warn])\n\nPins the first 1:length(cpuids) Julia threads to the CPUs with ids cpuids. Note that length(cpuids) may not be larger than Threads.nthreads().\n\nFor more information see pinthread.\n\n\n\n\n\n","category":"method"},{"location":"refs/api/#ThreadPinning.pinthreads-Tuple{Symbol}","page":"API","title":"ThreadPinning.pinthreads","text":"pinthreads(strategy::Symbol[; nthreads, warn, kwargs...])\n\nPin the first 1:nthreads Julia threads according to the given pinning strategy. Per default, nthreads == Threads.nthreads()\n\nAllowed strategies:\n\n:compact: pins to the first nthreads cpu threads while trying to avoid using hyperthreads (i.e. moving to next socket before using hyperthreads). If hyperthreads=true, hyperthreads will be used before moving to the next socket, if necessary.\n:scatter or :spread or sockets: pins to all available sockets in an alternating / round robin fashion.\n:numa: pins to all available NUMA nodes in an alternating / round robin fashion.\n:random or :rand: pins threads to random cpu threads (ensures that no cpu thread is double occupied). By default (hyperthreads=false), hyperthreads will be ignored.\n:firstn: pins to the cpuids 0:nthreads-1\n\n\n\n\n\n","category":"method"},{"location":"refs/api/#ThreadPinning.threadinfo-Tuple{}","page":"API","title":"ThreadPinning.threadinfo","text":"Print information about Julia threads, e.g. on which cpu threads (i.e. cores if hyperthreading is disabled) they are running.\n\nKeyword arguments:\n\ncolor (default: true): Toggle between colored and black-and-white output.\nblocksize (default: 32): Wrap to a new line after blocksize many cpu threads.\nhyperthreading (default: true): If true, we (try to) highlight cpu threads associated with hyperthreading in the color=true output.\nblas (default: false): Show information about BLAS threads as well.\nhints (default: false): Give some hints about how to improve the threading related settings.\ngroupby (default: :sockets): Options are :sockets, :numa, or :none.\n\n\n\n\n\n","category":"method"},{"location":"examples/ex_pinning_julia_threads/#Pinning-Julia-Threads","page":"Pinning Julia Threads","title":"Pinning Julia Threads","text":"","category":"section"},{"location":"examples/ex_pinning_julia_threads/","page":"Pinning Julia Threads","title":"Pinning Julia Threads","text":"Generally speaking, the most important functions are pinthreads and threadinfo.","category":"page"},{"location":"examples/ex_pinning_julia_threads/#Typical-usage","page":"Pinning Julia Threads","title":"Typical usage","text":"","category":"section"},{"location":"examples/ex_pinning_julia_threads/","page":"Pinning Julia Threads","title":"Pinning Julia Threads","text":"Below, we consider a dual-socket system where each CPU has 20 hardware threads and start julia with 20 threads, i.e. julia -t 20.","category":"page"},{"location":"examples/ex_pinning_julia_threads/#colortrue-(default)","page":"Pinning Julia Threads","title":"color=true (default)","text":"","category":"section"},{"location":"examples/ex_pinning_julia_threads/","page":"Pinning Julia Threads","title":"Pinning Julia Threads","text":"(Image: threadinfo_noht.png)","category":"page"},{"location":"examples/ex_pinning_julia_threads/#colorfalse","page":"Pinning Julia Threads","title":"color=false","text":"","category":"section"},{"location":"examples/ex_pinning_julia_threads/","page":"Pinning Julia Threads","title":"Pinning Julia Threads","text":"using ThreadPinning\npinthreads(:rand; hyperthreads=true) # hide\nthreadinfo(; color=false)","category":"page"},{"location":"examples/ex_pinning_julia_threads/","page":"Pinning Julia Threads","title":"Pinning Julia Threads","text":"pinthreads(:compact)\nthreadinfo(; color=false)","category":"page"},{"location":"examples/ex_pinning_julia_threads/","page":"Pinning Julia Threads","title":"Pinning Julia Threads","text":"pinthreads(:spread)\nthreadinfo(; color=false)","category":"page"},{"location":"examples/ex_pinning_julia_threads/#Hyperthreading","page":"Pinning Julia Threads","title":"Hyperthreading","text":"","category":"section"},{"location":"examples/ex_pinning_julia_threads/","page":"Pinning Julia Threads","title":"Pinning Julia Threads","text":"On a system where hyperthreading is enabled, you will get something like the following (with color=true). Below, we consider a dual-socket system where each CPU has 128 hardware threads (64 CPU-cores + hyperthreading) and start julia with 40 threads, i.e. julia -t 40.","category":"page"},{"location":"examples/ex_pinning_julia_threads/","page":"Pinning Julia Threads","title":"Pinning Julia Threads","text":"(Image: threadinfo.png)","category":"page"},{"location":"examples/ex_pinning_julia_threads/","page":"Pinning Julia Threads","title":"Pinning Julia Threads","text":"Note that hyperthreads are highlighted with a different color since often times you want to avoid pinning Julia threads to them (of course, there are exceptions).","category":"page"},{"location":"examples/ex_pinning_julia_threads/#Fine-grained-control","page":"Pinning Julia Threads","title":"Fine-grained control","text":"","category":"section"},{"location":"examples/ex_pinning_julia_threads/","page":"Pinning Julia Threads","title":"Pinning Julia Threads","text":"note: Note\nWhile we enumerate Julia threads as 1:Threads.nthreads(), cpuids start from zero and are hence enumerated as 0:Sys.CPU_THREADS-1!","category":"page"},{"location":"examples/ex_pinning_julia_threads/","page":"Pinning Julia Threads","title":"Pinning Julia Threads","text":"Apart from the general pinning strategies like e.g. :compact or :spread you can use pinthreads(::AbstractVector{<:Integer}) to pin Julia threads to specific cores.","category":"page"},{"location":"examples/ex_pinning_julia_threads/","page":"Pinning Julia Threads","title":"Pinning Julia Threads","text":"pinthreads(5:5+Threads.nthreads()-1)\nthreadinfo(; color=false)","category":"page"},{"location":"examples/ex_pinning_julia_threads/","page":"Pinning Julia Threads","title":"Pinning Julia Threads","text":"Furthermore, if you want to pin threads individually, there is pinthread(threadid, cpuid)","category":"page"},{"location":"examples/ex_pinning_julia_threads/","page":"Pinning Julia Threads","title":"Pinning Julia Threads","text":"pinthread(1,39)\nthreadinfo(; color=false)","category":"page"},{"location":"examples/ex_pinning_julia_threads/","page":"Pinning Julia Threads","title":"Pinning Julia Threads","text":"If you want to pin the calling thread you can simply use pinthread(cpuid).","category":"page"},{"location":"refs/libX/#LibX","page":"LibX","title":"LibX","text":"","category":"section"},{"location":"refs/libX/","page":"LibX","title":"LibX","text":"warning: Warning\nThis section isn't part of the official API. Things might change at any point without further notice.","category":"page"},{"location":"refs/libX/","page":"LibX","title":"LibX","text":"Wrappers around some functionality provided by libc, libpthread, and libuv.","category":"page"},{"location":"refs/libX/#Index","page":"LibX","title":"Index","text":"","category":"section"},{"location":"refs/libX/","page":"LibX","title":"LibX","text":"Pages   = [\"libX.md\"]\nOrder   = [:function, :type]","category":"page"},{"location":"refs/libX/#References","page":"LibX","title":"References","text":"","category":"section"},{"location":"refs/libX/","page":"LibX","title":"LibX","text":"Modules = [ThreadPinning]\nPages   = [\"libuv.jl\", \"libc.jl\", \"libpthread.jl\"]","category":"page"},{"location":"refs/libX/#ThreadPinning.uv_cpumask_size-Tuple{}","page":"LibX","title":"ThreadPinning.uv_cpumask_size","text":"Returns the maximum size of the mask used for process/thread affinities, or UV_ENOTSUP if affinities are not supported on the current platform.\n\nRef: docs\n\n\n\n\n\n","category":"method"},{"location":"refs/libX/#ThreadPinning.uv_thread_getaffinity-Tuple{Any, Any, Any}","page":"LibX","title":"ThreadPinning.uv_thread_getaffinity","text":"uv_thread_getaffinity(self_ref, cpumask, masksize)\n\nGets the specified thread's affinity setting. On Unix, this maps the cpu_set_t returned by pthread_getaffinity_np(3) to bytes in cpumask.\n\nThe masksize specifies the number of entries (bytes) in cpumask, and must be greater-than-or-equal-to uv_cpumask_size.\n\nNote: Thread affinity getting is not atomic on Windows and unsupported on macOS.\n\nRef: docs\n\n\n\n\n\n","category":"method"},{"location":"refs/libX/#ThreadPinning.uv_thread_getaffinity-Tuple{}","page":"LibX","title":"ThreadPinning.uv_thread_getaffinity","text":"uv_thread_getaffinity()\n\nQuery the calling thread's affinity.\n\n\n\n\n\n","category":"method"},{"location":"refs/libX/#ThreadPinning.uv_thread_self-Tuple{}","page":"LibX","title":"ThreadPinning.uv_thread_self","text":"Ref: docs\n\n\n\n\n\n","category":"method"},{"location":"refs/libX/#ThreadPinning.uv_thread_setaffinity-NTuple{4, Any}","page":"LibX","title":"ThreadPinning.uv_thread_setaffinity","text":"uv_thread_setaffinity(self_ref, cpumask, oldmask, masksize)\n\nSets the specified thread's affinity to cpumask, which is specified in bytes. Optionally returning the previous affinity setting in oldmask. On Unix, uses pthread_getaffinity_np(3) to get the affinity setting and maps the cpu_set_t to bytes in oldmask. Then maps the bytes in cpumask to a cpu_set_t and uses pthread_setaffinity_np(3). On Windows, maps the bytes in cpumask to a bitmask and uses SetThreadAffinityMask() which returns the previous affinity setting.\n\nThe masksize specifies the number of entries (bytes) in cpumask / oldmask, and must be greater-than-or-equal-to uv_cpumask_size().\n\nNote: Thread affinity setting is not atomic on Windows and unsupported on macOS.\n\nRef: docs\n\n\n\n\n\n","category":"method"},{"location":"refs/libX/#ThreadPinning.uv_thread_setaffinity-Tuple{Integer}","page":"LibX","title":"ThreadPinning.uv_thread_setaffinity","text":"uv_thread_setaffinity(procid::Integer)\n\nSet the calling thread's affinity to procid.\n\n\n\n\n\n","category":"method"},{"location":"refs/libX/#ThreadPinning.getpid-Tuple{}","page":"LibX","title":"ThreadPinning.getpid","text":"Returns the process ID (PID) of the calling process.\n\nRef: docs\n\n\n\n\n\n","category":"method"},{"location":"refs/libX/#ThreadPinning.getppid-Tuple{}","page":"LibX","title":"ThreadPinning.getppid","text":"Returns the process ID of the parent of the calling process.\n\nRef: docs\n\n\n\n\n\n","category":"method"},{"location":"refs/libX/#ThreadPinning.gettid-Tuple{}","page":"LibX","title":"ThreadPinning.gettid","text":"Returns the caller's thread ID (TID).  In a single- threaded process, the thread ID is equal to the process ID (PID, as returned by getpid(2)).  In a multithreaded process, all threads have the same PID, but each one has a unique TID.\n\nRef: docs\n\n\n\n\n\n","category":"method"},{"location":"refs/libX/#ThreadPinning.sched_getcpu-Tuple{}","page":"LibX","title":"ThreadPinning.sched_getcpu","text":"Returns the number of the CPU on which the calling thread is currently executing.\n\nRef: docs\n\n\n\n\n\n","category":"method"},{"location":"refs/libX/#ThreadPinning.cpu_set_t","page":"LibX","title":"ThreadPinning.cpu_set_t","text":"Data structure to describe CPU mask.\n\nRef: docs\n\n\n\n\n\n","category":"type"},{"location":"refs/libX/#ThreadPinning.pthread_self-Tuple{}","page":"LibX","title":"ThreadPinning.pthread_self","text":"Returns the ID of the calling thread. This is the same value that is returned in *thread in the pthread_create(3)` call that created this thread.\n\nRef: docs\n\n\n\n\n\n","category":"method"},{"location":"refs/libX/#ThreadPinning.pthread_setaffinity_np-Tuple{Any, Any, Any}","page":"LibX","title":"ThreadPinning.pthread_setaffinity_np","text":"Ref: docs\n\n\n\n\n\n","category":"method"},{"location":"refs/latency/#Latency","page":"Latency","title":"Latency","text":"","category":"section"},{"location":"refs/latency/","page":"Latency","title":"Latency","text":"warning: Warning\nThis section isn't part of the official API. Things might change at any point without further notice.","category":"page"},{"location":"refs/latency/#Index","page":"Latency","title":"Index","text":"","category":"section"},{"location":"refs/latency/","page":"Latency","title":"Latency","text":"Pages   = [\"latency.md\"]\nOrder   = [:function, :type]","category":"page"},{"location":"refs/latency/#References","page":"Latency","title":"References","text":"","category":"section"},{"location":"refs/latency/","page":"Latency","title":"Latency","text":"Modules = [ThreadPinning]\nPages   = [\"latency.jl\"]","category":"page"},{"location":"refs/latency/#ThreadPinning.bench_core2core_latency","page":"Latency","title":"ThreadPinning.bench_core2core_latency","text":"bench_core2core_latency([cpuids = 0:Sys.CPU_THREADS-1; nbench = 5, nsamples::Integer = 100, mode::Symbol = :min])\n\nA tool for measuring core-to-core latency (i.e. inter-core latency) in nanoseconds.\n\nThe measured latencies correspond to a full roundtrip between two cores. Divide them by two to obtain an estimate for the time needed to fetch data from another core.\n\nImportant: At least two Julia threads are required (julia -t2)!\n\nRefs: Largely inspired by rigtorp/c2clat and ajakubek/core-latency.\n\n\n\n\n\n","category":"function"},{"location":"refs/utility/#Utility","page":"Utility","title":"Utility","text":"","category":"section"},{"location":"refs/utility/","page":"Utility","title":"Utility","text":"warning: Warning\nThis section isn't part of the official API. Things might change at any point without further notice.","category":"page"},{"location":"refs/utility/#Index","page":"Utility","title":"Index","text":"","category":"section"},{"location":"refs/utility/","page":"Utility","title":"Utility","text":"Pages   = [\"utility.md\"]\nOrder   = [:function, :type]","category":"page"},{"location":"refs/utility/#References","page":"Utility","title":"References","text":"","category":"section"},{"location":"refs/utility/","page":"Utility","title":"Utility","text":"Modules = [ThreadPinning]\nPages   = [\"utility.jl, blas.jl\"]","category":"page"},{"location":"explanations/why/#why","page":"Why Pin Julia Threads?","title":"Why Pin Julia Threads?","text":"","category":"section"},{"location":"explanations/why/","page":"Why Pin Julia Threads?","title":"Why Pin Julia Threads?","text":"Because","category":"page"},{"location":"explanations/why/","page":"Why Pin Julia Threads?","title":"Why Pin Julia Threads?","text":"it effects performance (MFlops/s), in particular on HPC clusters with multiple NUMA domains\nit allows you to measure hardware-performance counters in a reliable way\n...","category":"page"},{"location":"examples/ex_blas/#ex_blas","page":"Autochecking BLAS Thread Settings","title":"Autochecking BLAS Thread Settings","text":"","category":"section"},{"location":"examples/ex_blas/","page":"Autochecking BLAS Thread Settings","title":"Autochecking BLAS Thread Settings","text":"If one runs a multithreaded Julia code that, on each thread, performs linear algebra operations (BLAS/LAPACK calls) one can easily run into performance issues due to an oversubscription of cores by Julia and BLAS threads (see here for a more thorough discussion). Fortunately, ThreadPinning.jl provides some (basic) autochecking functionality that highlights potential problems and suggests improvements.","category":"page"},{"location":"examples/ex_blas/","page":"Autochecking BLAS Thread Settings","title":"Autochecking BLAS Thread Settings","text":"Concretely, you can provide the keyword argument blas=true to threadinfo. This will show some of your BLAS settings and will color-indicate whether they are likely to be ok (green) or suboptimal (red). If you also provide hints=true, ThreadPinning.jl will try to provide concrete notes and warnings that (hopefully) help you to tune your settings.","category":"page"},{"location":"examples/ex_blas/#OpenBLAS","page":"Autochecking BLAS Thread Settings","title":"OpenBLAS","text":"","category":"section"},{"location":"examples/ex_blas/","page":"Autochecking BLAS Thread Settings","title":"Autochecking BLAS Thread Settings","text":"(Image: openblas)","category":"page"},{"location":"examples/ex_blas/#Intel-MKL","page":"Autochecking BLAS Thread Settings","title":"Intel MKL","text":"","category":"section"},{"location":"examples/ex_blas/","page":"Autochecking BLAS Thread Settings","title":"Autochecking BLAS Thread Settings","text":"(Image: mkl)","category":"page"},{"location":"explanations/blas/#BLAS","page":"Julia Threads + BLAS Threads","title":"Julia Threads + BLAS Threads","text":"","category":"section"},{"location":"explanations/blas/","page":"Julia Threads + BLAS Threads","title":"Julia Threads + BLAS Threads","text":"This page is concerned with the performance and pinning issues that can occur if you run a multithreaded Julia code that, on each thread, performs linear algebra operations (BLAS/LAPACK calls). In this case, one must ensure that cores aren't oversubscribe due to the two levels of multithreading.","category":"page"},{"location":"explanations/blas/","page":"Julia Threads + BLAS Threads","title":"Julia Threads + BLAS Threads","text":"Relevant discourse threads, see here and here.","category":"page"},{"location":"explanations/blas/#OpenBLAS","page":"Julia Threads + BLAS Threads","title":"OpenBLAS","text":"","category":"section"},{"location":"explanations/blas/","page":"Julia Threads + BLAS Threads","title":"Julia Threads + BLAS Threads","text":"If OPENBLAS_NUM_THREADS=1, OpenBLAS uses the calling Julia thread(s) to run BLAS computations, i.e. it \"reuses\" the Julia thread that runs a computation.\nIf OPENBLAS_NUM_THREADS=N>1, OpenBLAS creates and manages its own pool of BLAS threads (N in total). There is one BLAS thread pool (for all Julia threads).\nJulia default: OPENBLAS_NUM_THREADS=8 (Julia version ≤ 1.8) and OPENBLAS_NUM_THREADS=Sys.CPU_THREADS (Julia version ≥ 1.8).","category":"page"},{"location":"explanations/blas/","page":"Julia Threads + BLAS Threads","title":"Julia Threads + BLAS Threads","text":"When you start Julia in multithreaded mode, i.e. julia -tX or JULIA_NUM_THREADS=X, it is generally recommended to set OPENBLAS_NUM_THREADS=1 or, equivalently, BLAS.set_num_threads(1). Given the behavior above, increasing the number of BLAS threads to N>1 can very easily lead to worse performance, in particular when N<<X! Hence, if you want to or need to deviate from unity, make sure to \"jump\" from OPENBLAS_NUM_THREADS=1 to OPENBLAS_NUM_THREADS=# of cores or similar.","category":"page"},{"location":"explanations/blas/#Intel-MKL","page":"Julia Threads + BLAS Threads","title":"Intel MKL","text":"","category":"section"},{"location":"explanations/blas/","page":"Julia Threads + BLAS Threads","title":"Julia Threads + BLAS Threads","text":"Given MKL_NUM_THREADS=N, MKL starts N BLAS threads per Julia thread that makes a BLAS call.\nDefault: MKL_NUM_THREADS=# of physical cores, i.e. excluding hyperthreads. (Verified experimentally but would be good to find a source for this.)","category":"page"},{"location":"explanations/blas/","page":"Julia Threads + BLAS Threads","title":"Julia Threads + BLAS Threads","text":"When you start Julia in multithreaded mode, i.e. julia -tX or JULIA_NUM_THREADS=X, we recommend to set MKL_NUM_THREADS=(# of cores)/X or, equivalently, BLAS.set_num_threads((# of cores)/X) (after using MKL). Unfortunately, the default is generally suboptimal as soon as you don't run Julia with a single thread. Hence, make sure to tune the settings appropriately.","category":"page"},{"location":"explanations/blas/","page":"Julia Threads + BLAS Threads","title":"Julia Threads + BLAS Threads","text":"Side comment: It is particularly bad / confusing that OpenBLAS and MKL behave very differently for multithreaded Julia.","category":"page"},{"location":"explanations/blas/","page":"Julia Threads + BLAS Threads","title":"Julia Threads + BLAS Threads","text":"warning: Warning\nBe aware that calling an MKL function (for the first time) can spoil the pinning of Julia threads! A concrete example is discussed here. TLDR: You want to make sure that MKL_DYNAMIC=false. Apart from setting the environment variable you can also dynamically call ThreadPinning.mkl_set_dynamic(0). Note that, by default, ThreadPinning.jl will warn you if you call one of the pinning functions while MKL_DYNAMIC=true.","category":"page"},{"location":"explanations/blas/#threadinfo(;-blastrue,-hintstrue)","page":"Julia Threads + BLAS Threads","title":"threadinfo(; blas=true, hints=true)","text":"","category":"section"},{"location":"explanations/blas/","page":"Julia Threads + BLAS Threads","title":"Julia Threads + BLAS Threads","text":"To automatically detect whether you (potentially) have suboptimal BLAS thread settings, you can provide the keyword arguments blas=true and hints=true to threadinfo. An example can be found here.","category":"page"},{"location":"#ThreadPinning.jl","page":"ThreadPinning","title":"ThreadPinning.jl","text":"","category":"section"},{"location":"","page":"ThreadPinning","title":"ThreadPinning","text":"ThreadPinning.jl allows you to (interactively) pin Julia threads to specific cores at runtime. This can be important for achieving optimal performance, in particular for HPC applications running on clusters, but also for reliable benchmarking and more (see Why pin Julia threads?).","category":"page"},{"location":"","page":"ThreadPinning","title":"ThreadPinning","text":"note: Note\nBe aware that Julia implements task-based multithreading: M user tasks get scheduled onto N Julia threads. While this package allows you to pin Julia threads to cores / \"hardware threads\" it is generally not safe to assume that a computation (started with Threads.@spawn) will run on or even stay on a certain Julia thread (see this discourse post for more information). If you want this guarantee, you can use our @tspawnat macro.","category":"page"},{"location":"#Installation","page":"ThreadPinning","title":"Installation","text":"","category":"section"},{"location":"","page":"ThreadPinning","title":"ThreadPinning","text":"Note: Only Linux is supported!","category":"page"},{"location":"","page":"ThreadPinning","title":"ThreadPinning","text":"The package is registered. Hence, you can simply use","category":"page"},{"location":"","page":"ThreadPinning","title":"ThreadPinning","text":"] add ThreadPinning","category":"page"},{"location":"","page":"ThreadPinning","title":"ThreadPinning","text":"to add the package to your Julia environment.","category":"page"},{"location":"#Prerequisites","page":"ThreadPinning","title":"Prerequisites","text":"","category":"section"},{"location":"","page":"ThreadPinning","title":"ThreadPinning","text":"For ThreadPinning.jl to properly work, lscpu must be available. This should be the case on virtually all linux systems. Only then can ThreadPinning.jl query relevant system information (sockets, NUMA nodes, hyperthreading, ...).","category":"page"},{"location":"","page":"ThreadPinning","title":"ThreadPinning","text":"In the unlikely case that lscpu isn't already installed on your system, here are a few ways to get it","category":"page"},{"location":"","page":"ThreadPinning","title":"ThreadPinning","text":"install util-linux via your system's package manager or manually from here\ndownload the same as a Julia artifact: utillinuxjll.jl","category":"page"},{"location":"#Noteworthy-Alternatives","page":"ThreadPinning","title":"Noteworthy Alternatives","text":"","category":"section"},{"location":"","page":"ThreadPinning","title":"ThreadPinning","text":"Setting JULIA_EXCLUSIVE=1 will make julia use compact pinning automatically (no external tool needed!)\npinthread / pinthreads or likwid-pin (CLI tool) from LIKWID.jl\nThis discourse thread discusses issues with alternatives like numactl","category":"page"},{"location":"#Acknowledgements","page":"ThreadPinning","title":"Acknowledgements","text":"","category":"section"},{"location":"","page":"ThreadPinning","title":"ThreadPinning","text":"CI infrastructure is provided by the Paderborn Center for Parallel Computing (PC²)","category":"page"},{"location":"examples/ex_core2core_latency/#Core-to-Core-Latency","page":"Measuring Core-to-Core Latency","title":"Core-to-Core Latency","text":"","category":"section"},{"location":"examples/ex_core2core_latency/","page":"Measuring Core-to-Core Latency","title":"Measuring Core-to-Core Latency","text":"Let's measure the inter-core latencies of one of the compute nodes of Noctua 1 at PC2.","category":"page"},{"location":"examples/ex_core2core_latency/","page":"Measuring Core-to-Core Latency","title":"Measuring Core-to-Core Latency","text":"using ThreadPinning\nlatencies = ThreadPinning.bench_core2core_latency()","category":"page"},{"location":"examples/ex_core2core_latency/","page":"Measuring Core-to-Core Latency","title":"Measuring Core-to-Core Latency","text":"40×40 Matrix{Float64}:\n   0.0   217.05  204.85  206.0   203.3   204.95  211.7   205.2   209.5   210.1   209.65  209.3   198.7   194.95  …  271.1   267.5   265.0   260.85  266.9   267.15  265.8   266.7   265.55  258.85  262.1   263.95  269.4\n 215.55    0.0   214.65  215.15  219.8   222.1   219.55  217.1   223.1   224.7   220.25  219.45  213.2   214.6      266.6   269.45  269.85  270.6   271.25  271.1   267.45  265.65  263.15  259.85  260.85  263.2   267.45\n 224.2   214.75    0.0   216.05  217.35  219.25  216.45  212.95  219.15  224.4   221.45  219.65  214.55  215.75     270.35  272.55  270.95  275.0   272.15  272.95  267.5   264.15  260.35  263.2   260.8   262.2   264.65\n 218.4   216.7   211.9     0.0   220.05  218.5   213.2   215.35  225.85  226.7   220.15  218.7   218.6   216.1      266.85  265.75  266.0   265.8   264.7   265.25  259.7   260.9   260.25  258.6   259.6   262.75  262.0\n 221.95  218.5   217.25  212.7     0.0   221.6   220.15  223.75  226.15  224.0   219.45  220.2   214.35  219.3      264.55  267.0   262.6   262.35  264.2   262.2   262.2   263.25  262.4   262.35  264.3   263.7   262.55\n 219.85  212.5   214.6   216.25  218.75    0.0   221.5   221.45  222.6   223.8   227.35  222.8   217.95  221.55  …  265.75  267.95  263.8   264.5   265.4   262.95  265.7   264.55  261.9   263.7   265.25  259.95  261.35\n 219.15  214.0   214.65  217.8   218.85  217.9     0.0   217.15  227.75  225.6   224.05  217.4   216.8   215.15     266.85  269.95  267.85  264.1   262.55  266.15  267.6   267.1   266.25  263.75  260.95  264.4   267.9\n   ⋮                                       ⋮                                       ⋮                             ⋱                            ⋮                                       ⋮\n 269.75  265.85  263.4   265.65  265.0   266.8   265.8   264.15  261.35  258.3   262.65  264.45  265.5   268.05     216.55  221.35  219.5   221.05  220.1   211.45    0.0   219.05  219.45  214.95  213.8   212.75  214.9\n 267.95  265.7   262.2   262.75  262.0   266.35  264.1   260.45  257.4   264.05  268.05  259.85  264.6   265.4      218.6   225.85  226.8   219.3   220.75  215.7   215.95    0.0   221.05  218.35  214.5   214.2   217.3\n 265.65  262.7   263.2   261.8   261.7   260.8   260.95  257.55  259.15  262.05  264.95  263.1   259.55  259.75  …  221.15  223.75  222.8   226.45  226.25  221.05  221.8   219.6     0.0   215.2   216.55  220.45  222.2\n 264.4   263.0   265.85  263.6   265.35  257.25  254.2   258.5   261.6   259.95  259.45  262.3   262.65  259.25     219.0   217.95  218.6   223.2   220.75  215.1   215.2   218.25  216.35    0.0   215.75  216.8   220.15\n 258.75  262.2   264.2   262.55  262.4   262.6   259.05  258.65  257.5   259.4   265.45  260.1   260.2   261.6      217.4   220.85  219.15  218.05  214.5   214.15  215.8   224.5   217.2   217.35    0.0   218.75  222.8\n 264.5   263.35  257.0   262.9   258.65  264.95  266.05  260.75  259.15  264.8   263.95  265.5   267.3   265.35     221.95  222.65  224.25  221.05  220.95  216.5   220.25  220.5   217.2   218.5   218.05    0.0   223.1\n 266.6   266.35  262.65  262.2   264.45  267.2   266.8   264.25  263.75  262.75  264.5   266.55  267.4   271.6      223.9   226.0   225.6   228.65  225.3   219.85  218.25  220.55  220.75  217.1   220.2   225.15    0.0","category":"page"},{"location":"examples/ex_core2core_latency/","page":"Measuring Core-to-Core Latency","title":"Measuring Core-to-Core Latency","text":"Of course, it is easier to make sense of the result if we visualize it. Here, we use Plots.jl's heatmap function.","category":"page"},{"location":"examples/ex_core2core_latency/","page":"Measuring Core-to-Core Latency","title":"Measuring Core-to-Core Latency","text":"using Plots\nheatmap(latencies; c = :viridis, frame=:box)","category":"page"},{"location":"examples/ex_core2core_latency/","page":"Measuring Core-to-Core Latency","title":"Measuring Core-to-Core Latency","text":"(Image: core2core.png)","category":"page"},{"location":"examples/ex_core2core_latency/","page":"Measuring Core-to-Core Latency","title":"Measuring Core-to-Core Latency","text":"The two sockets / CPUs of the system with 20 cores each are clearly visible since the inter-core latency of cores on different sockets is, expectedly, higher than the same for cores sitting on the same socket / in the same CPU. Note that due to fluctuations in our imperfect benchmark the result is not precisely symmetric (which, of course, it should be in theory).","category":"page"}]
}
