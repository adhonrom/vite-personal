/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      }
    },
      fontFamily: {
        nunito:['Nunito', 'sans-serif']
      }

  },
  plugins: [],
}

