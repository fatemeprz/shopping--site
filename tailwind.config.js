/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}",
    './index.html',
    './index.js'],
  theme: {
    extend: {
      colors:{
        primary: "#2465f7",
        secondary: "#1e66f72a",
        background: "#f8f8f8",
        warning: "#e9c601",
        error: "#f75e4b",
      },
      space:{
        88:'22rem'
      },
      maxWidth:{
        maxScreen:'1200px',
      }

    },
  },
  plugins: [],
  variants: {
    extend: {
      scale: ["group-hover"]
    },
  },
}

