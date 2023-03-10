/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
  ],
  safelist: [
    {
      pattern:
        /(bg|border|text)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/images/bg.svg')",
      },
      colors: {
        primary: '#26534C',
        secondary: '#F2AC0D',
        tertiary: '#1C3F39',
        elipse: '#E9E6D7',
      },
      fontFamily: {},
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    container: false,
  },
};
