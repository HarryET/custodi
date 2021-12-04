module.exports = {
  purge: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#55ACEE",
        "brand-hover": "#51A1DD",
        "brand-dark": "",
        "brand-dark-hover": "",
        "supabase": "#24B47E"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
