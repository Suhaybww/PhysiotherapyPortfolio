# Physiotherapist Portfolio Website

## Project Overview

This project is a professional website for a physiotherapist built from scratch using modern web technologies. The frontend is developed using React, TypeScript, Next.js, Tailwind CSS, and Daisy UI. The backend will be added in future stages. The primary colors for the website are dark green, white, and blue.

## Technologies Used

- **React**
- **TypeScript**
- **Next.js**
- **Tailwind CSS**
- **Daisy UI**

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
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
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

- Adding backend functionality.
- Additional pages and features.

## License

This project is licensed under the MIT License.