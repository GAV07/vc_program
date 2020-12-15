module.exports = {
    siteMetadata: {
      title: "VC in Resdience Program",
      titleTemplate: "%s at the Center for Black Innovation",
      description: "A landing page showing the benefits and details of the Center for Black Innovation's Pre-Accelerator",
      url: "vcinresidence.org",
      image: "./images/b-icon.png"
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
              google: {
                families: 'Montserrat'
              },
              custom: {
                  families: 'Jakarta Sans',
                  urls: './style/fonts'
              }
            }
        },
        {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
          }
        },
    ]
}