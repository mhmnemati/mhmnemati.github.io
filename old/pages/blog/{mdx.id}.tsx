import React from "react";

import { graphql } from "gatsby";

import { useTranslation } from "gatsby-plugin-react-i18next";

import { Container } from "react-grid-system";

import { Text } from "@arwes/core";

import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../../components/layout";

const Hero: React.FC<{
    image_src: string;
    image_alt: string;
    title: string;
}> = (props) => {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            style={{
                height: "70vh",
                padding: 16,
                backgroundImage: `url(${props.image_src})`,
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
                <h1>{props.title}</h1>
            </Text>
        </section>
    );
};

const Content: React.FC<{
    body: string;
    frontmatter: { image_src: string; image_alt: string; date: string };
}> = (props) => {
    return (
        <Container style={{ padding: "32px 16px" }}>
            <MDXRenderer>{props.body}</MDXRenderer>
            <Text>
                <b>{props.frontmatter.date}</b>
            </Text>
        </Container>
    );
};

const Component: React.FC<{ data: any }> = (props) => {
    return (
        <Layout>
            <Hero
                image_src={props.data.post.frontmatter.image_src}
                image_alt={props.data.post.frontmatter.image_alt}
                title={props.data.post.frontmatter.title}
            />
            <Content
                body={props.data.post.body}
                frontmatter={props.data.post.frontmatter}
            />
        </Layout>
    );
};

export default Component;

export const query = graphql`
    query ($id: String!, $language: String!) {
        locales: allLocale(filter: { language: { eq: $language } }) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }

        post: mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                image_src
                image_alt
                title
                date
                description
            }
        }
    }
`;
