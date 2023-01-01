<script>
  let IrisLogo = './src/assets/svg/iris_logo_text_color.svg';
</script>


<nav class="bg-zinc-900 text-white py-2">
    <div class="flex justify-between max-w-screen-xl mx-auto">
        <div class="flex items-center space-x-10">
            <a href="/" class="flex items-center">
                <img src={IrisLogo} class="h-9 mr-2" alt="Iris Logo" />
                <!-- <span class="text-2xl font-light whitespace-nowrap dark:text-white ">IRIS</span> -->
            </a>

            <div class="flex space-x-10">
                <a href="/">About</a>
            </div>
        </div>

        <div class="flex space-x-14">
            <button type="button" class="primary">Download now</button>
        </div>
    </div>
</nav>