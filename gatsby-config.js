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
        name: `slider`,
        path: `${__dirname}/src/images/slider`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/favico.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
