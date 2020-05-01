/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      spacing: {
        "13": "56px",
        "36": "9rem",
        "40": "10rem",
        "41": "11rem",
        "50": "50rem",
        "60": "60rem",
        "80": "80rem"
      },
      fontSize: {
        "2/5xl": "1.6rem"
      },
      boxShadow: {
        header:
          "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
      }
    }
  },
  variants: {},
  plugins: []
};
