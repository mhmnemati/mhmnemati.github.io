import React from "react";

import { graphql } from "gatsby";

import { useTranslation, Link } from "gatsby-plugin-react-i18next";

import { Container, Row, Col } from "react-grid-system";

import { Text, Figure, Button, FrameHexagon } from "@arwes/core";

import Layout from "../../components/layout";

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
                <h1>{t("blog")}</h1>
            </Text>
        </section>
    );
};

const Content: React.FC<{
    items: {
        id: string;
        frontmatter: {
            image_src: string;
            image_alt: string;
            title: string;
            date: string;
            description: string;
        };
    }[];
}> = (props) => {
    const { t } = useTranslation();

    return (
        <Container style={{ padding: "32px 16px" }}>
            {props.items.map((item, index) => (
                <article key={item.id}>
                    <Row>
                        <Col md={12} lg={4}>
                            <Figure
                                src={item.frontmatter.image_src}
                                alt={item.frontmatter.image_alt}
                                preload
                                fluid
                            />
                        </Col>
                        <Col md={12} lg={8}>
                            <h3>{item.frontmatter.title}</h3>
                            <p>
                                <b>{item.frontmatter.date}</b>
                            </p>
                            <Text>{item.frontmatter.description}</Text>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "end",
                                    marginTop: 8,
                                }}
                            >
                                <Link to={`/blog/${item.id}`}>
                                    <Button FrameComponent={FrameHexagon}>
                                        {t("show_more")}
                                    </Button>
                                </Link>
                            </div>
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
            <Content items={props.data.posts.nodes} />
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

        posts: allMdx(
            sort: { fields: frontmatter___index, order: DESC }
            filter: {
                slug: { regex: "/posts/.*/" }
                frontmatter: { language: { eq: $language } }
            }
        ) {
            nodes {
                id
                frontmatter {
                    image_src
                    image_alt
                    title
                    date
                    description
                }
            }
        }
    }
`;
