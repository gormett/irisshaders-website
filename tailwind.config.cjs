/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,svelte}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://irisshaders.net/images/backgrounds/iris-bkg-dark.webp')",
      },
    },
  },
  plugins: [],
}
