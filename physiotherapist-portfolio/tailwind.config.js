/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#006400', // Dark green color code
        accent: '#0000ff', // Blue color code for contrast
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#006400', // Dark green color code
          secondary: '#ffffff', // White color code
          accent: '#0000ff', // Blue color code for contrast
          neutral: '#f0f0f0',
          'base-100': '#f0f0f0',
          info: '#000000',
          success: '#ffffff',
          warning: '#ffffff',
          error: '#ff0000',
        },
      },
    ],
  },
};
