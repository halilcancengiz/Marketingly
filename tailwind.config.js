/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4A3AFF',
        'secondary1': '#3022CD',
        'secondary2': '#FFD600',
        'secondary3': '#FF6262',
        'secondary4': '#2417AE',

        'neutral-800': '#14142B',
        'neutral-700': '#605C78',
        'neutral-600': '#8184A3',
        'neutral-500': '#BCBED1',
        'neutral-400': '#DCDDEB',
        'neutral-300': '#EFF0F6',
        'neutral-200': '#F8F9FF',
        'neutral-100': '#FFFFFF',
      },
      screens: {
        'xs': '501px', //488 olacak
        'sm': '640px',
        'md': '768px',
        'lg': '992px', //animasyonlar devreye giriyor
        'hxl': '1135px',
        'xl': '1280px', //animasyonlar devreye giriyor
        '2xl': '1537px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}