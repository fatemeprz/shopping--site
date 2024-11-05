/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.{html,js}", "./index.html", "./index.js"],
  theme: {
    extend: {
      colors: {
        primary: "#2465f7",
        secondary: "#1e66f72a",
        background: "#f8f8f8",
        warning: "#e9c601",
        error: "#f75e4b",
      },
      space: {
        88: "22rem",
      },
      spacing: {
        88: "22rem",
        90: "22.5rem",
      },
      maxWidth: {
        maxScreen: "1200px",
      },
      gridTemplateColumns: {
        "auto-fill-56": "repeat(auto-fill, minmax(224px, 1fr))",
        "auto-fit-56": "repeat(auto-fit, minmax(224px, 1fr))",
      },
      gridTemplateRows: {
        "auto-fill-90": "repeat(auto-fill, minmax(360px, 1fr))",
        "auto-fit-90": "repeat(auto-fit, minmax(360px, 1fr))",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      scale: ["group-hover"],
    },
  },
};
