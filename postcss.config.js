const postcssImport = require(`postcss-import`)
const postcssPresetEnv = require(`postcss-preset-env`)
const postcssCustomSelectors = require(`postcss-custom-selectors`);

module.exports = () => ({
  plugins: [
    postcssImport(),
    postcssPresetEnv(),
    postcssCustomSelectors()
  ]
})
