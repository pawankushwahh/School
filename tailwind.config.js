/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E63946', // vibrant red
          dark: '#B91C1C',
          light: '#FCA5A5',
        },
        secondary: {
          DEFAULT: '#FFB703', // warm yellow
          dark: '#D97706',
          light: '#FDE68A',
        },
        accent: {
          DEFAULT: '#1D3557', // deep blue
          light: '#457B9D',
        }
      }
    },
  },
  plugins: [],
};