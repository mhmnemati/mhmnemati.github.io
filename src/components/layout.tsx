import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import { useI18next } from "gatsby-plugin-react-i18next";

import Modal from "react-modal";

import { Helmet as HelmetUnsafe } from "react-helmet";
const Helmet = HelmetUnsafe as any;

import { ArwesThemeProvider, StylesBaseline } from "@arwes/core";
import { AnimatorGeneralProvider } from "@arwes/animation";
import { BleepsProvider } from "@arwes/sounds";

import { ScreenClassProvider } from "react-grid-system";

import Header from "./header";
import Footer from "./footer";

import "./styles.css";

Modal.setAppElement("#___gatsby");

const Component: React.FC<{}> = (props) => {
    const { language } = useI18next();

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    keywords
                }
            }
        }
    `);

    return (
        <ArwesThemeProvider
            themeSettings={{
                palette: {
                    primary: { main: "#1ca6a9" },
                    secondary: { main: "#2c3531" },
                    neutral: { main: "#151917" },
                    text: {
                        headings: "#22c7cb",
                        root: "#d1e8e2",
                        link: "#22c7cb",
                        linkHover: "#d1e8e2",
                    },
                },
                space: 4,
                outline: 2,
            }}
        >
            <Helmet
                htmlAttributes={{
                    lang: language,
                }}
                title={data.site.siteMetadata.title}
                defer={false}
                meta={[
                    {
                        name: "description",
                        content: data.site.siteMetadata.description,
                    },
                    {
                        name: "keywords",
                        content: data.site.siteMetadata.keywords,
                    },
                    {
                        property: "og:title",
                        content: data.site.siteMetadata.title,
                    },
                    {
                        property: "og:description",
                        content: data.site.siteMetadata.description,
                    },
                    {
                        property: "og:type",
                        content: "website",
                    },
                    {
                        name: "twitter:card",
                        content: "summary",
                    },
                    {
                        name: "twitter:creator",
                        content: data.site.siteMetadata.author,
                    },
                    {
                        name: "twitter:title",
                        content: data.site.siteMetadata.title,
                    },
                    {
                        name: "twitter:description",
                        content: data.site.siteMetadata.description,
                    },
                ]}
            />
            <StylesBaseline
                styles={{
                    "html, body": {
                        fontFamily: `${
                            language === "fa" ? "BYekan" : "Roboto"
                        } !important`,
                        overflowX: "hidden",
                        lineHeight: "1.6 !important",
                        scrollBehavior: "smooth",
                        direction: language === "fa" ? "rtl" : "ltr",
                    },
                    "h1, h2, h3, h4, h5, h6": {
                        fontFamily: `${
                            language === "fa" ? "BYekan" : "Neuropolitical"
                        } !important`,
                        textTransform: "none",
                    },
                    "code, pre": {
                        fontFamily: "Source Code Pro, monospace !important",
                        direction: "ltr",
                    },
                    button: {
                        margin: 8,
                    },

                    ".ReactModal__Overlay": {
                        opacity: 0,
                        transition: "opacity 500ms ease-in-out",
                    },
                    ".ReactModal__Overlay--after-open": {
                        opacity: 1,
                    },
                    ".ReactModal__Overlay--before-close": {
                        opacity: 0,
                    },
                    ".ReactModal__Body--open": {
                        overflow: "hidden",
                        /* position: fixed; */
                        width: "100%",
                        height: "100%",
                    },
                }}
            />
            <BleepsProvider
                audioSettings={{ common: { volume: 0.25 } }}
                playersSettings={{
                    assemble: { src: ["/sounds/assemble.mp3"], loop: true },
                    type: { src: ["/sounds/type.mp3"], loop: true },
                    click: { src: ["/sounds/click.mp3"] },
                    warning: { src: ["/sounds/warning.mp3"] },
                }}
                bleepsSettings={{
                    assemble: { player: "assemble" },
                    type: { player: "type" },
                    click: { player: "click" },
                }}
            >
                <AnimatorGeneralProvider
                    animator={{ duration: { enter: 1000, exit: 1000 } }}
                >
                    <ScreenClassProvider>
                        <Header />
                        {props.children}
                        <Footer />
                    </ScreenClassProvider>
                </AnimatorGeneralProvider>
            </BleepsProvider>
        </ArwesThemeProvider>
    );
};

export default Component;
