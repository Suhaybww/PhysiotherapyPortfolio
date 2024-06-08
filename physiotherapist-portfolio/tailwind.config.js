// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#C1E1C1', // pastel green color code
        accent: '#A7C7E7',  // Blue color code for contrast
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
          primary: '#C1E1C1', // pastel green color code
          secondary: '#ffffff', // White color code
          accent: '#A7C7E7', // Blue color code for contrast
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
