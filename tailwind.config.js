/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        activeColor:"#53ACFF",
        orangeColor:"#D94111",
        greenColor: "#118F4B",
        grayColor:"#979797",
        mainBg: "#181818",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: []
  ,
};
