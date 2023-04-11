/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'dark-blue': '#0B0D17',
      'light-blue': '#D0D6F9',
      'gray-400': '#979797',
      'gray-600': '#151620',
      white: '#FFF',
    },
    fontFamily: {
      sans: ['Barlow Condensed', 'sans-serif'],
      serif: ['Bellefair', 'serif'],
    },
    extend: {
      backgroundImage: {
        'hero-bg-mobile': "url('/home/background-home-mobile.jpg')",
        'hero-bg-tablet': "url('/home/background-home-tablet.jpg')",
        'hero-bg-desktop': "url('/home/background-home-desktop.jpg')",
      },
    },
  },
  plugins: [],
}
