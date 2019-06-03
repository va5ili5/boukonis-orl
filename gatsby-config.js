module.exports = {
  siteMetadata: {
    title: `ΩΡΛ ΠΕΡΙΣΤΕΡΙ - Κωνσταντίνος Χ. Μπουκόνης - Χειρουργός Ωτορινολαρυγγολόγος Ενηλίκων και Παίδων`,
    description: `Εξειδικευθείς εις Λονδίνο, Μεγάλη Βρετανία - Χειρουργός Ωτορινολαρυγγολόγος Περιστερι - ΤΗΛ: 2130575052 - Ιατρείο ΩΡΛ Περιστέρι Ενηλίκων και Παίδων - Δέχεται ιδιώτικά - Συνεργασία με όλες τις ιδιωτικές ασφαλιστικές - Λεωφόρος Κωνσταντινουπόλεως 63, Περιστερι - Ear Nose and Throat Surgeon - orl peristeri - Otorhinolaryngology Peristeri Athens`,
    keywords: `ΩΡΛ ΠΕΡΙΣΤΕΡΙ, Ωτορινολαρυγγολόγος Περιστέρι, ιατρός ΩΡΛ, Orilas, Orl Peristeri, orila paidia, ΜΠΟΥΚΟΝΗΣ, boukonis, παίδο-ωρλ, ωριλάς, ΩΡΛ Αθήνα, ΩΡΛ Ίλιον, ΩΡΛ Πετρούπολη, ΩΡΛ Χαϊδάρι, ΩΡΛ Αιγάλεω, Ear Nose and Throat Surgeon, Otorhinolaryngology`,
    author: `@Cons_ENTSurgeon`,
    siteUrl: `https://boukonis-orl.gr`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/content/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `surgeries`,
        path: `${__dirname}/content/surgeries`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/content/about`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 590,
          },
        },
      ],
    },
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favico.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
