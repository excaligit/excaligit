/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        pulsefast: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        set1: '#151718',
        set2Border: '#313538',
        set3: '#26292b',
        set4Text: '#8d9397',
        set5: '#1a1d1e',
        set6Back: '#0c0d0e',
      },
    },
  },
  plugins: [],
}
