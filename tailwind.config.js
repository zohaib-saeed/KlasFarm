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
      lightGrey: "#D9D9D9",
      bianca: "#FAFAFA",
      fireBush: "#F7942A",
      silverSand: "#C1C2C3",
      sotPeach: "#EFEFEF",
      blue: "#0075FF",
      sunShade: "#F7942A",
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Helvetica Neue", "Arial", "sans-serif"],
        mistral: ["Mistral", "sans-serif"],
        // mistral: ["Mistral", "cursive"],
      },
      dropShadow: {
        "3xl": "0px 0px 7.5px 5px rgba(204, 204, 204, 0.2)",
      },
    },
  },
  plugins: [],
};
