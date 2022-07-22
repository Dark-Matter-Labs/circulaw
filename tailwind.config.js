module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      colors: {
        blush1: "#F9D9C8",
        blush2: "#FFF3ED",
        blush3: "#FFD8C4",
        black1: "#1F2223",
        green1: "#22532C",
        green2: "#6D9F6B",
        green3: "#AABC97",
        greenAlpha: "rgba(109, 159, 107, 0.2)",
        greenLink: "#019975",
        grey1: "#979797",
        white1: "#F8FAF8",
      },
      fontFamily: {
        publicSans: ["'Public Sans'", "sans-serif"],
        manrope: ["'Manrope'", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
