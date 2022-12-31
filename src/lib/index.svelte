<script>
    const features = [
        {
            title: 'Open Source',
            description: 'Free as in freedom. This means anyone can contribute their ideas and improvements to the project'
        },
        {
            title: 'Mod compatible',
            description: 'Committed to ensuring mod compatibility as a first priority, Iris is already compatible with many of your favorite mods'
        },
        {
            title: 'Fast updates',
            description: 'Built from the ground up to be extensible and easy to update. Say goodbye to weeks of waiting to play on the new Minecraft version'
        }
    ]
</script>

<!-- Hero -->

<section class="bg-hero bg-cover bg-center py-52">
    <div class="max-w-screen-xl mx-auto flex">
        <div class="flex flex-col space-y-10 w-1/2">
            <h1 class="text-6xl text-white font-bold">Stunning visuals <br> and smooth <br>gameplay</h1>
            <h2 class="text-xl text-white font-extralight">Iris mod brings Optifine shaderpacks<br>and Sodium performance in one.</h2>
            
            
            <button type="button" class="primary h-16 w-2/4 text-xl">
                Download now
                <span class="material-symbols-outlined ml-5">download</span>
            </button>

        </div>
    </div>
</section>

<!-- Three sale points -->

<section class="bg-black py-40 ">
    <div class="max-w-screen-xl mx-auto">
        <div class="flex justify-between">

        {#each features as feature}
        <div class="flex flex-col space-y-6 max-w-xs">
            <div class="space-y-3">
                <h3 class="text-3xl text-white font-bold">{feature.title}</h3>
                <hr class="border-2 rounded border-rose-900">
            </div>
            <p class="font-size-20 text-white font-light">{feature.description}</p>
        </div>
        {/each}
    </div>
</section>

<!-- Features -->

<section class="bg-black text-white py-16">
    <div class="max-w-screen-xl mx-auto space-y-32">

        <div class="flex space-x-16 text-right">
            <div class="flex flex-col w-1/2 space-y-6 justify-center max-w-md">
                <h3 class="text-5xl font-bold">Optifine Parity</h3>
                <p class="font-light">Iris aims to have full support for all past, present and future OptiFine shader packs. The number of supported packs is constantly growing
                </p>

                <a href="/" class="flex flex-row justify-end text-rose-600 stroke-rose-600">
                    <p class="hover:underline hover:underline-offset-auto">
                        See supported packs
                    </p>
                    <span class="material-symbols-outlined ml-2 hover:no-underline">
                        arrow_forward
                    </span>
                </a>

            </div>

            <div class="bg-[url('https://irisshaders.net/images/screenshots/mainscreenshot2.webp')] bg-cover bg-center rounded-xl w-1/2 h-96"></div>
        </div>

        <div class="flex space-x-16 text-left">
            <div class="bg-[url('https://irisshaders.net/images/screenshots/mainscreenshot1.webp')] bg-cover bg-center rounded-xl w-1/2 h-96"></div>
            
            <div class="flex flex-col w-1/2 space-y-6 justify-center max-w-md">
                <h3 class="text-5xl font-bold">Sodium Support</h3>
                <p class="font-light">Iris is compatible with CaffeineMC optimization mods such as Sodium, Phosphor, Lithium and more, enabling stunning graphics at framerates sometimes better than vanilla
                </p>
            
                <a href="https://modrinth.com/mod/sodium" class="flex flex-row justify-start text-rose-600 stroke-rose-600">
                    <p class="hover:underline hover:underline-offset-auto">
                        Check out benchmarks
                    </p>
                    <span class="material-symbols-outlined ml-2 hover:no-underline">
                        arrow_forward
                    </span>
                </a>
            
            </div>
        </div>

    </div>
</section>

<!-- Advantage -->

<!-- Footer -->