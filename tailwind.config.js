/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '1040px',
    },
    colors: {
      'dark-blue': '#0B0D17',
      'light-blue': '#D0D6F9',
      'gray-400': '#979797',
      'gray-600': '#151620',
      'gray-700': '#383B4B',
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
        'destination-bg-mobile':
          "url('/destination/background-destination-mobile.jpg')",
        'destination-bg-tablet':
          "url('/destination/background-destination-tablet.jpg')",
        'destination-bg-desktop':
          "url('/destination/background-destination-desktop.jpg')",
        'img-moon': "url('/destination/image-moon.jpg')",
        'img-mars': "url('/destination/image-mars.jpg')",
        'img-titan': "url('/destination/image-titan.jpg')",
        'img-europa': "url('/destination/image-europa.jpg')",
      },
    },
  },
  plugins: [],
}
