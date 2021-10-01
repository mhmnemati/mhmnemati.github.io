import React from "react";

import { graphql } from "gatsby";

import { useTranslation } from "gatsby-plugin-react-i18next";

import { Text } from "@arwes/core";

import Layout from "../components/layout";
import Content from "../components/content";

const Hero: React.FC<{}> = (props) => {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            style={{
                height: "70vh",
                padding: 16,
                backgroundImage: "url(/images/break_projects.jpg)",
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
                <h1>{t("projects")}</h1>
            </Text>
        </section>
    );
};

const Component: React.FC<{ data: any }> = (props) => {
    return (
        <Layout>
            <Hero />
            <Content items={props.data.projects.nodes} />
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

        projects: allMdx(
            sort: { fields: frontmatter___index, order: DESC }
            filter: {
                slug: { regex: "/projects/.*/" }
                frontmatter: { language: { eq: $language } }
            }
        ) {
            nodes {
                id
                body
                rawBody
                frontmatter {
                    image_src
                    image_alt
                }
            }
        }
    }
`;
