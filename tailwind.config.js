module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        "2p": "2px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
