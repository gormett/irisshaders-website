<script>
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import Features from './components/Features.svelte';
  import Footer from './components/Footer.svelte';

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

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,200" />


<main>
  <Navbar />
  <Hero />
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
  <Features />
  <Footer />
</main>
