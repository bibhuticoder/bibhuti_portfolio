module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'green': "#82B540",
        "black": "#373737",
        "heart": "#F44336",
        "white": "#Fafafa",
      },

      textColor: {
        "black": "#373737",
        "heart": "#F44336",
        "green": "#82B540",
      }
    },
    fontFamily: {
      Nunito: ['Nunito', 'sans-serif']
    },
    container: {
      center: true,
      padding: "1rem"
    },
    screens: {
      "lg": "1124px",
      "xl": "1124px",
      "2xl": "1124px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
