/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'rgba(67, 70, 72, 0.6)',
        bgCyan: 'rgba(0, 133, 255, 0.4)',
        lightGray: 'rgba(161, 168, 174, 0.5)',
      },
      fontSize: {
        sm: ['1.2rem'],
      },
    },
  },
  plugins: [],
};
