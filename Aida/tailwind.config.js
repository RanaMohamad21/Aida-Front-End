// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "san-serif"],
      },
    },
    colors: {
      white: "#FFFFFF",
      black: "#000",
      teal: "#25b5ba",
      // teal: "#03BCBF",
      darkTeal: "#005F80",
      IceBlue: "#EDF6FB",
      // IceBlue: "#EFF7FC",
      gray: "#bac0c4",
      EggshellGray: "#FAFBFD",
      FlamingoPink: "#FF897F",
    },
  },
  plugins: [],
};