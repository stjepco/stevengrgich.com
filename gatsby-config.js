// gatsby-config.js
const path = require(`path`)
const rupture = require("rupture")

module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-stylus",
      options: {
        use: [rupture()]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, `src`),
      }
    }
  ]
}
