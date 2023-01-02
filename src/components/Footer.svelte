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
            <Icon name="Youtube" />
            <Icon name="Github" />
            <Icon name="Discord" />
            <Icon name="Twitter" />
            <Icon name="Mastodon" />
            <Icon name="Patreon" />
        </div>
    </div>

    
    <h5 class="text-xs text-center">WIP Gormett ©2023</h5>
</footer>


