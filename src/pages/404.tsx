import React from "react";

import { graphql } from "gatsby";

import { useTranslation, Link } from "gatsby-plugin-react-i18next";

import { Text, Button, FrameHexagon } from "@arwes/core";

import Layout from "../components/layout";

const Hero: React.FC<{}> = (props) => {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            style={{
                height: "100vh",
                padding: 16,
                backgroundImage: "url(/images/hero.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            <Text>
                <h1>{t("not_found")}</h1>
            </Text>
            <br />
            <Link to="/" style={{ marginTop: 32 }}>
                <Button
                    FrameComponent={FrameHexagon}
                    style={{
                        width: 150,
                        height: 50,
                    }}
                >
                    <Text>{t("goto_home")}</Text>
                </Button>
            </Link>
        </section>
    );
};

const Component: React.FC<{ data: any }> = (props) => {
    return (
        <Layout>
            <Hero />
        </Layout>
    );
};

export default Component;

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: { language: { eq: $language } }) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;
