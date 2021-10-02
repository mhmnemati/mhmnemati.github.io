module.exports = {
    siteMetadata: {
        title: "KoLiBer",
        description: "KoLiBer personal website",
        siteUrl: "https://koliber.ir",
        author: "@ckoliberr",
        keywords:
            "KoLiBer, koliber, ckoliber, blog, personal, portfolio, Mohammad Hosein Nemati, IT, computer science, biology, cloud",
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
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                extensions: [`.mdx`, `.md`],
            },
        },
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
        "gatsby-plugin-offline",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: "./locale",
                name: "locale",
            },
        },
        {
            resolve: "gatsby-plugin-react-i18next",
            options: {
                localeJsonSourceName: "locale",
                languages: ["en", "fa"],
                defaultLanguage: "en",
                siteUrl: "https://koliber.ir/",
                i18nextOptions: {
                    interpolation: {
                        escapeValue: false,
                    },
                    keySeparator: false,
                    nsSeparator: false,
                },
            },
        },
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                excludes: [
                    "/**/404",
                    "/**/404.html",
                    "/**/dev-404-page",
                    "/**/offline-plugin-app-shell-fallback",
                ],
            },
        },
    ],
};
