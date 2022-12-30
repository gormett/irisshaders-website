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


<section class="bg-hero bg-cover bg-center py-60">
    <div class="max-w-screen-xl mx-auto flex">
        <div class="flex flex-col space-y-10 w-1/2">
            <h1 class="text-6xl text-white font-bold">Stunning visuals <br> and smooth <br>gameplay</h1>
            <h2 class="text-xl text-white font-light">Iris mod brings Optifine shaderpacks<br>and Sodium performance in one.</h2>
            
            
            <button type="button" class="primary h-16 w-2/4 text-xl">
                Download now
                <span class="material-symbols-outlined ml-5">download</span>
            </button>

        </div>
    </div>
</section>


<section class="bg-black py-40 ">
    <div class="max-w-screen-xl mx-auto">
        <div class="flex flex-row">

        {#each features as feature} -->
        <div class="flex-1 flex-col space-y-6 p-4">
            <h3 class="text-2xl text-white font-bold">{feature.title}</h3>
            <p class="font-size-20 text-white font-light">{feature.description}</p>
        </div>
        {/each}
    </div>
</section>