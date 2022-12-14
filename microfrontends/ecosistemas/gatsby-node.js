const generatePages = (pages, actions) => {
  const contentPages = pages.data.allContentfulCardEcosistemas.edges

  contentPages.forEach(page => {
    generatePage(page, actions)
  })
}

const generatePage = (page, actions) => {
  actions.createPage({
    path: `ecosistemas/${page.node.url}/`,
    component: require.resolve("./src/templates/ecosistemas.js"),
    context: {
      project: "ecosistemas",
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const pages = await graphql(`
    query pageSlug {
      allContentfulCardEcosistemas {
        edges {
          node {
            contentful_id
            title
            image {
              file {
                url
              }
            }
            description {
              description
            }
            url
          }
        }
      }
    }
  `)

  if (pages.data) {
    generatePages(pages, actions)
  }
}
