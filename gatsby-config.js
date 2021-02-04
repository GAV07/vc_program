module.exports = {
    siteMetadata: {
      title: "VC in Resdience Program",
      titleTemplate: "%s at the Center for Black Innovation",
      description: "A landing page showing the benefits and details of the Center for Black Innovation's Pre-Accelerator",
      url: "vcinresidence.org",
      image: "./images/CFBI_logo.png"
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/images`,
          },
        },
        `gatsby-transformer-sharp`,
        {
          resolve: `gatsby-plugin-sharp`,
          options: {
            icon: "../images/CFBI_logo.png"
          }
        },
        {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
          }
        },
        {
          resolve: "gatsby-plugin-google-tagmanager",
          options: {
            id: process.env.GOOGLE_TAGMANAGER_ID || "none",
          }
        },
    ]
}