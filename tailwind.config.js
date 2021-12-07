module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#7C62E3',
        secondary: '#674ADA',
        discord: "#5865f2",
        twitter: "#1da1f2",
      },
      dropShadow: {
         '3xl': '0 3px 4px rgba(0, 0, 0, 0.25)'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
