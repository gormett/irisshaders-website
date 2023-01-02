<script>
    let Screenshot1 = './images/mainscreenshot1.webp';
    let Screenshot2 = './images/mainscreenshot2.webp';
</script>


<section class="bg-black text-white py-16">
    <div class="max-w-screen-xl mx-auto space-y-20">

        <div class="flex space-x-16 text-right">
            <div class="flex flex-col w-1/2 space-y-6 justify-center max-w-md">
                <h3 class="text-5xl font-bold">OptiFine Parity</h3>
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
            <img src={Screenshot2} class="rounded-xl w-1/2 h-96" alt="Screenshot 1" />
        </div>

        <div class="flex space-x-16 text-left">
            <img src={Screenshot1} class="rounded-xl w-1/2 h-96" alt="Screenshot 1" />
            
            <div class="flex flex-col w-1/2 space-y-6 justify-center max-w-md">
                <h3 class="text-5xl font-bold">Sodium Support</h3>
                <p class="font-light">Iris is compatible with CaffeineMC optimization mods such as Sodium, Phosphor, Lithium and more, enabling stunning graphics at framerates sometimes better than vanilla
                </p>
            
                <a href="/" class="flex flex-row justify-start text-rose-600 stroke-rose-600">
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