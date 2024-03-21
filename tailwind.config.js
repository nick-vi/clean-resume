/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        a4: '210mm',
      },
      maxWidth: {
        a4: '210mm',
      },
      minHeight: {
        a4: '297mm',
      },
      fontSize: {
        '2xs': '.675rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
