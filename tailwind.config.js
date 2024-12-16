/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },

    // screens: {
    //   sm:'640px',
    //   md:'768px',
    //   lg:'960px',
    //   xl:'120px',

    // },
    extend: {},
  },
  fontFamily: {
    primary: ["Roboto", "sans-serif"],
  },
  extends: {
    colors: {
      primary: "#1c1c22",
      accent: {
        DEFAULT: "#00ff99",
        hover: "#00e187",
      },
    },
  },
  plugins: [],
};


