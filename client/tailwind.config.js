module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "720px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {

      gray: {
        100 : "#979dac",
        200 : "#7d8597",
        300 : "#5c677d",
        400 : "#33415c",
        500 : "#242E42",
        600 : "#161C27"
      },

      blue: {
        100: "#0466c8",
        200: "#0353a4",
        300: "#023e7d",
        400: "#002855",
        500: "#001845",
        600: "#001233"
      },

      white: "#FFFFFF",

      'light-gray': "#8ecae6"

    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
