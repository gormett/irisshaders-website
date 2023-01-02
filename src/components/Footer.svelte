<script>
	import Icon from "./Icon.svelte";

    let IrisLogo = './svg/iris_logotype_color.svg';
</script>

<footer class="bg-black text-neutral-500 mx-auto p-4 space-y-6 flex flex-col">
    <!-- Logo -->
    <img src={IrisLogo} class="h-12" alt="Iris Logo" />

    <!-- Socials -->
    <div class="mx-auto">
        <div class="flex flex-row h-8 fill-neutral-600 gap-x-10">
            <a href="/" class="fill-neutral-600 hover:fill-neutral-400">
                <Icon name="Youtube" />
            </a>
            <a href="/" class="fill-neutral-600 hover:fill-neutral-400">
                <Icon name="Github" />
            </a>
            <a href="/" class="fill-neutral-600 hover:fill-neutral-400">
                <Icon name="Discord" />
            </a>
            <a href="/" class="fill-neutral-600 hover:fill-neutral-400">
                <Icon name="Twitter" />
            </a>
            <a href="/" class="fill-neutral-600 hover:fill-neutral-400">
                <Icon name="Mastodon" />
            </a>
            <a href="/" class="fill-neutral-600 hover:fill-neutral-400">
                <Icon name="Patreon" />
            </a>
        </div>
    </div>

    
    <h5 class="text-xs text-center">WIP Gormett ©2023</h5>
</footer>


