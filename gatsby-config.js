module.exports = {
    siteMetadata: {
        siteUrl: "https://koliber.ir",
        title: "KoLiBer personal website",
    },
    plugins: [
        "gatsby-plugin-image",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "286937289",
            },
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "static/images/icon.png",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "content",
                path: "./content/",
            },
            __key: "content",
        },
        "gatsby-plugin-fontawesome-css",
        {
            resolve: "gatsby-plugin-nprogress",
            options: {
                color: "#2c3531",
                showSpinner: true,
            },
        },
    ],
};
