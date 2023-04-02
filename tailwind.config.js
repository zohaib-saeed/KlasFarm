/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      vsm: "550px",
      sm: "640px",
      md: "768px",
      mdl: "900px",
      lg: "1024px",
      sxl: "1150px",
      mxl: "1280px",
      xl: "1350px",
      xxl: "1440px",
    },
    colors: {
      black: "#000000",
      white: "#fff",
      granite: "#818285",
      davyGrey: "#58595B",
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Helvetica Neue", "Arial", "sans-serif"],
        mistral: ["Mistral", "cursive"],
      },
    },
  },
  plugins: [],
};
