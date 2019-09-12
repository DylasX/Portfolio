// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: `Dylas`,
    description: `Welcome to my porfolio.`,
    author: `@_dylas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // eslint-disable-next-line no-undef
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon-website.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    `gatsby-plugin-netlify-cms`,
    // `gatsby-plugin-offline`,
  ],
}
