/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      // teal: "#03BCBF",
      teal: "#25b5ba",
      IceBlue: "#EFF7FC",
      gray: "#bac0c4",
      EggshellGray: "#FAFBFD",
      FlamingoPink: "#FF897F",
    },
    fontFamily: {
      sans: ["Roboto", "Arial", "san-serif"],
    },
    // container: {
    //   center: true,
    //   padding: {
    //     default: "1rem",
    //     sm: "3rem",
    //   },
    // },
  },
  plugins: [],
};
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
