module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': ' #6749DC',
        'secondary': '#EDEBF9',


        'gray-face': '#e9ebee',
        'back-0': '#202125',
        'dark-1': '#374258',
        'degrade':'#9BA7B9',
        'dark-2': '#6a7285',
        'dark-3': '#c4c4c4',
        'dark-4': '#f3f3f3',

      },
      height: {
        'h-painel': '--h-painel'
      },
      width: {
        '69.5': '17.375rem', // 278px
      }
    },
  },
  plugins: [],
}
