module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      colors: {
        dark: "#1F2223",
        green1: "#019975",
        green2: "#22532C",
        green3: "#6D9F6B",
        green4: "#AABC97",
        light: "rgba(249, 217, 200, 0.4)",
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
  images: {
    domains: ["tailwindui.com"],
  },
};
