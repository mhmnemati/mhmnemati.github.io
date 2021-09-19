module.exports = {
    siteMetadata: {
        siteUrl: "https://koliber.ir",
        title: "KoLiBer personal website",
    },
    plugins: [
        "gatsby-plugin-styled-components",
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
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: "./static/posts/",
            },
            __key: "posts",
        },
        "gatsby-plugin-fontawesome-css",
    ],
};
