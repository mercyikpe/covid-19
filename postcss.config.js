const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

// module.exports = {
// plugins: [tailwindcss, autoprefixer],
// };

module.exports = {
  plugins: [
    // require("postcss-import")(),
    require("tailwindcss")("./tailwind-config.js")
    // require("autoprefixer")()
  ]
};
