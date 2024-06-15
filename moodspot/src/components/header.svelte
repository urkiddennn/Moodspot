<script>
    export let trial;
    
</script>

<header class="flex flex-col top-0 left-0 z-20  w-full fixed h-50">
    <div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-3 py-6">
        <a href="/">
        <h1>Mood <span class="text-blue-500 font-semibold">Spot</span></h1>
        </a>
        <div class="h-full flex justify-center items-center gap-x-3">
            <p >No: <span class="text-green-600">{trial}</span></p>
            <button class="w-10 h-10 border-black p-4 flex items-center justify-center bg-slate-600 rounded-full">
                <i class="fa-solid fa-user text-white cursor-pointer"></i>
            </button>
            
        </div>
        
    </div>
</header>