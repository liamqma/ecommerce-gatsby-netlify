/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    // If you didn't use the resolveSiteUrl option this needs to be set
    siteUrl: 'https://mysaandco.com.au',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Amatic SC:700`],
        display: 'block',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `./src/images/favicon.png`,
      },
    },
    {
      resolve: '@sentry/gatsby',
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-TDCHXHBJ3S', // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
  ],
};
