/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      'white': "#FFFFFF",
      'teal': '#03BCBF',
      'IceBlue': '#EDF6FB',
      'gray': '#86959F',
      'EggshellGray':'#FAFBFD',
      'FlamingoPink':'#FF897F',
    },
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
