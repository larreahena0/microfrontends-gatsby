const generatePages = (pages, actions) => {
  const contentPages = pages.data.allContentfulCard.edges

  contentPages.forEach(page => {
    generatePage(page, actions)
  })
}

const generatePage = (page, actions) => {
  actions.createPage({
    path: `${page.node.url}/`,
    component: require.resolve("./src/templates/contenidos.js"),
    context: {
      project: "contenidos",
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const pages = await graphql(`
    query pageSlug {
      allContentfulCard {
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
