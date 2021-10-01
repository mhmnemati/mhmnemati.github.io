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
                pages: [
                    // {
                    //     matchPath: "/:lang?/blog/:uid",
                    //     getLanguageFromPath: true,
                    //     excludeLanguages: ["es"],
                    // },
                    // {
                    //     matchPath: "/preview",
                    //     languages: ["en"],
                    // },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                exclude: ["/**/404", "/**/404.html"],
                query: `
                  {
                    site {
                      siteMetadata {
                        siteUrl
                      }
                    }
                    allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {
                      edges {
                        node {
                          context {
                            i18n {
                              defaultLanguage
                              languages
                              originalPath
                            }
                          }
                          path
                        }
                      }
                    }
                  }
                `,
                serialize: ({ site, allSitePage }) => {
                    return allSitePage.edges.map((edge) => {
                        const { languages, originalPath, defaultLanguage } =
                            edge.node.context.i18n;
                        const { siteUrl } = site.siteMetadata;
                        const url = siteUrl + originalPath;
                        const links = [
                            { lang: defaultLanguage, url },
                            { lang: "x-default", url },
                        ];
                        languages.forEach((lang) => {
                            if (lang === defaultLanguage) return;
                            links.push({
                                lang,
                                url: `${siteUrl}/${lang}${originalPath}`,
                            });
                        });
                        return {
                            url,
                            changefreq: "daily",
                            priority: originalPath === "/" ? 1.0 : 0.7,
                            links,
                        };
                    });
                },
            },
        },
    ],
};
