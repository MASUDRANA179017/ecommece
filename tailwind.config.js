/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    container: {
        center: true,
    },
    screens: {
      'xs': '575px',
      'sm': '767px',
      'md': '991px',
      'lg': '1199px',
      'xl': '1399px',
      '2xl': '1600px',
    },

    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
