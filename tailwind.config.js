module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#7C62E3',
        secondary: '#674ADA',
        error: '#D33F49',
        warn: '#FEC601',
        success: '#0CCA4A',
        discord: '#5865f2',
        twitter: '#1da1f2',
        supabase: '#24B47E',
      },
      dropShadow: {
        '3xl': '0 3px 4px rgba(0, 0, 0, 0.25)',
      },
      spacing: {
        imgLG: '28rem',
        imgSM: '20rem',
      },
    },
    screens: {
      xs: '400px',
      sm: '640px',
      md: '1024px',
      lg: '1280px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
