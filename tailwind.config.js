module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ffffff",
          DEFAULT: "#9FA5B1",
          dark: "#000000",
        },
        secondary: {
          light: "#73b1d6",
          DEFAULT: "#4082a5",
          dark: "#005676",
        },
        accent: {
          light: "#5baa99",
          DEFAULT: "#287a6b",
          dark: "#004d40",
        },
      },
      fontFamily: {
        carme: ["Carme"],
        montserrat: ["Montserrat"],
      },
      gridTemplateColumns: {
        "header-md": "240px 389px",
        header: "240px 32px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
