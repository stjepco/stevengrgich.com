// gatsby-config.js
const path = require(`path`)

module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, `src`),
      }
    }
  ]
}
