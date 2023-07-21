import Document from "next/document";
import type { DocumentContext } from "next/document";
import type { GetStaticPropsContext } from "next";

import { Html, Head, Main, NextScript } from "next/document";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default class Component extends Document {
    render() {
        const isRTL = ["fa"].includes(this.props.locale || "");

        return (
            <Html lang="en">
                <Head>
                    <meta
                        name="description"
                        content="KoLiBer personal website"
                    />
                    <meta
                        name="keywords"
                        content="KoLiBer, koliber, ckoliber, blog, personal, portfolio, Mohammad Hosein Nemati, IT, computer science, biology, cloud"
                    />
                    <meta property="og:title" content="KoLiBer" />
                    <meta
                        property="og:description"
                        content="KoLiBer personal website"
                    />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:creator" content="@ckoliber" />
                    <meta name="twitter:title" content="KoLiBer" />
                    <meta
                        name="twitter:description"
                        content="KoLiBer Twitter"
                    />
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link rel="stylesheet" href="/fonts/fonts.css" />
                </Head>
                <body dir={isRTL ? "rtl" : "ltr"}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
        };
    }
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
    return {
        props: {
            ...(await serverSideTranslations(ctx.locale || "", [
                "common",
                "header",
                "footer",
            ])),
        },
    };
}
