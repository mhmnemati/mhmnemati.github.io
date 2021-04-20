module.exports = {
    siteMetadata: {
        title: "KoLiBer personal website",
        siteUrl: "https://koliber.ir",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        "gatsby-plugin-fontawesome-css",
    ],
};
