/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-bg': "url('/src/assets/images/background.png')"
      },
      boxShadow: {
        'login':'0px 0px 15px 8px #00000026'
      }
    },
  },
  plugins: [],
}