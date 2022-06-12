module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      primary: "#37323E",
    },
    extend: {
      colors: {
        secondary: "#6D6A75",
        action: "#DEB841",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
