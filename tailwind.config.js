/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    backgroundSize: {
      'cover': 'cover',
    },
    objectFit: {
      'cover': 'cover',
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
      colors: {
        primary: '#f97316',
        secondary: '#64748b',
        dark: '#0f172a',
      },
    },
  },
  plugins: [],
}
