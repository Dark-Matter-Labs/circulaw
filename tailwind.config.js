module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  images: {
    domains: ["tailwindui.com"],
  },
};
