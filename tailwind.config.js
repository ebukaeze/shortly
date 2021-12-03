module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "shortly-cyan": "#2acfcf",
        "shortly-dark-violet": "#3b3054",
        "shortly-red": "#f46262",
        "shortly-grey": "#bfbfbf",
        "shortly-grey-violet": "#9e9aa7",
        "shortly-dark-blue": "#35323e",
        "shortly-very-dark-violet": "#232127",
      }
    },
    container:{
      center: true,
      padding: "1rem",
      screens:{
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
