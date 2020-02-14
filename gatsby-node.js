// All changes on this file require restarting the server

const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // console.log(data)
  // In order to create pages on the fly, we need to use something unique, such as the slug
  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
