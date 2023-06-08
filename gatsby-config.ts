/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true,
  },
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
    'gatsby-plugin-emotion',
    'gatsby-plugin-netlify',
  ],
};
