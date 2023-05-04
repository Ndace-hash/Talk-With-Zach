/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Inter",
        secondary: "Castoro Tilting",
      },
      colors: {
        primary: "#F2A71B",
        secondary: "#011F26",
        "dark-blue": "#036873",
      },
    },
  },
  plugins: [],
};
