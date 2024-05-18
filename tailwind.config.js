/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        vector269: "url('./assets/Vector269.png')",
        arrow: "url('./assets/arrow.png')",
        ellipse: "url('./assets/Ellipse7.png')",
      },
      colors: {
        grayText: "#979797",
        whiteText: "#f1f1f1",
        lineColor: "#4d4b4b",
        primaryBg: "#292929",
        secondaryBg: "#161815",
        green: "#1FCC70",
        black: "#000000",
      },
      screens: {
        hd: "1750px",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
    },
  },
  plugins: [],
};
