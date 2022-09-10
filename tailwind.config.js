/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '429px',
      xl: '1440px',
    },
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'light-gray': 'hsl(212, 45%, 89%)',
      'grayish-blue': 'hsl(220, 15%, 55%)',
      'dark-blue': 'hsl(218, 44%, 22%)',
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
    fontSize: {
      'base': '15px',
    },
    extend: {},
  },
  plugins: [],
}