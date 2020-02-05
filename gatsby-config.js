/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "BackRoads",
    description:
      "Explore awesome destinations and live the local culture while meeting cool people",
    author: "Joh Doe",
    data: {
      name: "john",
      age: 24,
    },
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-styled-components`],
}
