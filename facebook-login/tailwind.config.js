/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        facebook_blue: "#0866ff",
        facebook_green: "#42b72a",
      }
    },
  },
  plugins: [],
}

