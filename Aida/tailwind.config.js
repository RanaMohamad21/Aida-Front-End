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
      salmon: "#ff897f",
      black: "#000",
      indianred: "#cc574d",
      lightslategray: "#86959f",
      "design-theme-light-grey-500": "#212123",
      // teal: "#03BCBF",
      darkTeal: "#005F80",
      IceBlue: "#EDF6FB",
      gainsboro: "#e6e6e6",
      darkslategray: "#273b4a",
      darkturquoise: "rgba(3, 188, 191, 0.5)",
      lightseagreen: "#00a3a6",
      // IceBlue: "#EFF7FC",
      gray: "#bac0c4",
      darkGray: "#333333",
      EggshellGray: "#FAFBFD",
      FlamingoPink: "#FF897F",
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "13xl": "32px",
      "7xl": "26px",
      "9xl": "28px",
      "77xl": "96px",
      "29xl": "48px",
      "10xl": "29px",
      "3xl": "22px",
      "17xl": "36px",
      inherit: "inherit",
    }

  },
  screens: {
    mq1350: {
      raw: "screen and (max-width: 1350px)",
    },
    mq1125: {
      raw: "screen and (max-width: 1125px)",
    },
    mq800: {
      raw: "screen and (max-width: 800px)",
    },
    mq450: {
      raw: "screen and (max-width: 450px)",
    },
  },
  plugins: [],
};