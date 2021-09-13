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
    extend: {
      backgroundImage:{
        'cardano-tree':"url(https://www.picgaga.com/uploads/wallpaper/cardano-wallpapers/HPELdYR5DkqN-nature-forest-cardano-backgrounds.jpg)",
        'cardano-dark':"url(https://www.picgaga.com/uploads/wallpaper/cardano-wallpapers/b21g3m2yezpF-awesome-cardano-free-picture-backgrounds.jpg)",
        'cardano-smoke':"url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6ea290d4-4e91-4ece-a0d2-21fba49bd246/d12o858-22471eb5-dabf-46bf-9f86-02e34350b35f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZlYTI5MGQ0LTRlOTEtNGVjZS1hMGQyLTIxZmJhNDliZDI0NlwvZDEybzg1OC0yMjQ3MWViNS1kYWJmLTQ2YmYtOWY4Ni0wMmUzNDM1MGIzNWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4BbtvBNiAz4TSWcipSP5SZcyUnWaEZqPhSvkqLyDFNM)",
        'cardano-abstract':"url(https://i.redd.it/e0yurpzrlg561.jpg)",
        'cardano-clouds':"url(https://cdn.wallpapersafari.com/49/19/KHf48W.jpg)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
