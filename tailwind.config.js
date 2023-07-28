/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20" : "#F8F4EB",
        "gray-50" : "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "primary-g" : "#7EB354",
        "primary-summer" : "#9DCDAB",
        "primary-sky" : "#E8E6DC",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-greenwhite": "linear-gradient(90deg, #7EB354 0%, #FFFFFF 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Monntserrat", "sans-serif"]
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkels: "url('./assets/Sparkles.png')",
        circles: "url('./assets/EvolveText.png')",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      }
    },
  },
  plugins: [],
}
