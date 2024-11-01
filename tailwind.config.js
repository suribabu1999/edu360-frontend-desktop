/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-bg': "url('/src/assets/images/background.png')",
        'create':'linear-gradient(160.37deg, rgba(78, 163, 201, 0.032) -1.8%, rgba(62, 88, 100, 0.0688) 105.76%)'
      },
      boxShadow: {
        'login':'0px 0px 15px 8px #00000026',
        'card':' -3px 0px 5px 0px #0000001A;',
        'card-active':'-3px 0px 9px 0px #80BCFF;',
        'create':'0px 0px 6px 2px #0000001A;'
      }
    },
  },
  plugins: [],
}