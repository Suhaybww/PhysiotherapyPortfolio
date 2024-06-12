const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // For the components and pages in src directory
    './pages/**/*.{js,ts,jsx,tsx}', // For Next.js pages
    './components/**/*.{js,ts,jsx,tsx}' // For the components
  ],
  darkMode: "class", // Enabling dark mode with class strategy
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Adding custom font
      },
      colors: {
        primary: '#C1E1C1', // pastel green color code
        accent: '#6495ED',  // Blue color code for contrast
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`, // Custom shadow for input
      },
    },
  },
  plugins: [
    addVariablesForColors, // Adding color variables plugin
    require('daisyui'), // DaisyUI for additional UI components
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#C1E1C1', // pastel green color code
          secondary: '#ffffff', // White color code
          accent: '#6495ED', // Blue color code for contrast
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

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
