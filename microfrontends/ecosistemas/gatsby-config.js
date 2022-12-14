require("dotenv").config({
  path: `.env`,
})

const contentfulConfig = {
  spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  environment: `${process.env.CONTENTFUL_ENVIROMENT}`,
}

if (!contentfulConfig?.spaceId || !contentfulConfig?.accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
  ],
}
