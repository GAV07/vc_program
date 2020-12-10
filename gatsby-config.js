module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
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
    ]
}