import React from "react";

import { graphql } from "gatsby";

import { useTranslation } from "gatsby-plugin-react-i18next";

import { Container, Row, Col } from "react-grid-system";

import { Text } from "@arwes/core";

import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";

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

const Content: React.FC<{
    items: {
        id: string;
        body: string;
        frontmatter: { image_src?: string; image_alt?: string };
    }[];
}> = (props) => {
    return (
        <Container style={{ padding: "32px 16px" }}>
            {props.items.map((item, index) => (
                <article key={item.id}>
                    <Row>
                        <Col md={12} lg={12}>
                            <MDXRenderer>{item.body}</MDXRenderer>
                        </Col>
                    </Row>
                    {index < props.items.length - 1 && (
                        <hr style={{ margin: "32px 0" }} />
                    )}
                </article>
            ))}
        </Container>
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
                frontmatter {
                    image_src
                    image_alt
                }
            }
        }
    }
`;
