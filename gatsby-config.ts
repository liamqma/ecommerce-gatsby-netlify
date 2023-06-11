/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
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
  ],
};
