/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true, 
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px',
        },
      },
      fontFamily: {
        'body': ['Avenir-Book', 'Avenir', 'sans-serif'],
      },
      writingMode: {
        'sideways-lr': 'sideways-lr',
      },
      textOrientation: {
        'sideways': 'sideways',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.writing-mode-sideways-lr': {
          'writing-mode': 'sideways-lr',
        },
        '.text-orientation-sideways': {
          'text-orientation': 'sideways',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
