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
        padding: '1rem',
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
      fontSize: {
        display: ['5rem', { lineHeight: '5.5rem', fontWeight: 500 }],
        mdisplay: [
          '2.5rem',
          {
            lineHeight: '3.375rem',
            fontWeight: 500,
          },
        ],
        h1: ['3rem', { lineHeight: '3.625rem', fontWeight: 400 }],
        h1m: [
          '2rem',
          {
            lineHeight: '2.5rem',
            fontWeight: 400,
          },
        ],
        h2: ['3rem', { lineHeight: '3.25rem', fontWeight: 400 }],
        h2m: [
          '2rem',
          {
            lineHeight: '2rem',
            fontWeight: 400,
          },
        ],
        h3: ['2.5rem', { lineHeight: '2.25rem', fontWeight: 400, letterSpacing: '-0.05em', textTransform: 'uppercase' }],
        h3m: ['1.75rem', { lineHeight: '1.5rem', fontWeight: 400 }],
        h4: ['2rem', { lineHeight: '2rem', fontWeight: 400 }],
        h5: ['1.5rem', { lineHeight: '1.375rem', fontWeight: 500 }],
        h6: ['1rem', { lineHeight: '1rem', fontWeight: 400 }],
        p: [
          '1.0625rem',
          { lineHeight: '1.5rem', letterSpacing: '0', fontWeight: 400 },
        ],
        pbig: ['1.25rem', { lineHeight: '1.875rem', fontWeight: 400 }],
        psmall: [
          '0.875rem',
          { lineHeight: '1.25rem', letterSpacing: '0', fontWeight: 400 },
        ],
        caption: [
          '0.75rem',
          { lineHeight: '1.125rem', letterSpacing: '0', fontWeight: 400 },
        ],
      },
      colors: {
        primary: {
          DEFAULT: '#FFFCEF',
        },
        secondary: {
          DEFAULT: '#5a4e42',
        },
        background: {
          DEFAULT: '#CFE2F2',
        },
      },
      width: {
        'card': 'calc(100% - 1rem)',
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
