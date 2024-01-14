/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'map': "url('/src/assets/map.png')",
      },
      colors: {
        "app-bg": "#111111",
        "app-green": "#2ac420",
        "light-gray": "#F3F4F6",
        "dark-gray": "#17181A",
        "mid-black" : "#17181A",
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'lato': ["Lato", "sans-serif"],
        
      },
    },
  },
  plugins: [],
};