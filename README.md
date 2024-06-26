## Project Overview
This project is a professional website for a physiotherapist built from scratch using modern web technologies. The frontend is developed using React, TypeScript, Next.js, Tailwind CSS, Daisy UI, and Acernity UI. The backend functionality is handled by EmailJS. The primary colors for the website are dark green, white, and blue.

## Technologies Used
- **React**
- **TypeScript**
- **Next.js**
- **Tailwind CSS**
- **Daisy UI**
- **Acernity UI**
- **EmailJS**

## Installation
Follow these steps to set up the project:
1. **Clone the repository**:

  ```bash
  git clone https://github.com/yourusername/physiotherapist-portfolio.git
  cd physiotherapist-portfolio
  ```
2. **Install dependencies**:

  ```bash
  npm install
  ```

## Development
To start the development server, run:
```bash
npm run dev
```
This will start the Next.js development server.

## Configuration
Ensure your `tailwind.config.js` is set up as follows:
```js
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
        primary: '#ADCDAE', // pastel green color code
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
          primary: '#ADCDAE', // pastel green color code
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

Ensure your `postcss.config.js` is set up as follows:
```js
module.exports = {
  plugins: {
   tailwindcss: {},
   autoprefixer: {},
  },
};
```

Ensure your `postcss.config.js` is set up as follows:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## Future Enhancements

- Additional pages and features.
