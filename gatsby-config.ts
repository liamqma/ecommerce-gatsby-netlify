/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Mysa & Co`,
    siteUrl: `https://mysaandco.com.au`,
  },
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
    'gatsby-plugin-emotion',
    'gatsby-plugin-netlify',
  ],
};
