import React from "react";

import { graphql } from "gatsby";

import { useTranslation, Link } from "gatsby-plugin-react-i18next";

import { Container, Row, Col } from "react-grid-system";

import { Text, Button, Figure, FrameHexagon } from "@arwes/core";

import { MDXRenderer } from "gatsby-plugin-mdx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faTwitter,
    faGithub,
    faGitlab,
} from "@fortawesome/free-brands-svg-icons";

import Layout from "../components/layout";
import Break from "../components/break";

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
                <h1>{t("iam_title")}</h1>
            </Text>
            <Text>
                <b>{t("iam_caption")}</b>
            </Text>
            <br />
            <div style={{ marginTop: 16 }}>
                <a
                    style={{ color: "inherit" }}
                    href="mailto:koliberr136a1@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ margin: 16 }}
                        icon={faEnvelope}
                        size="2x"
                    />
                </a>
                <a
                    style={{ color: "inherit" }}
                    href="https://www.linkedin.com/in/mohammad-hosein-nemati-665b1813b/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ margin: 16 }}
                        icon={faLinkedin}
                        size="2x"
                    />
                </a>
                <a
                    style={{ color: "inherit" }}
                    href="https://twitter.com/ckoliberr"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ margin: 16 }}
                        icon={faTwitter}
                        size="2x"
                    />
                </a>
                <a
                    style={{ color: "inherit" }}
                    href="https://github.com/ckoliber"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ margin: 16 }}
                        icon={faGithub}
                        size="2x"
                    />
                </a>
                <a
                    style={{ color: "inherit" }}
                    href="https://gitlab.com/ckoliber"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ margin: 16 }}
                        icon={faGitlab}
                        size="2x"
                    />
                </a>
            </div>
            <br />

            <Link to="/blog" style={{ marginTop: 32 }}>
                <Button
                    FrameComponent={FrameHexagon}
                    style={{
                        width: 150,
                        height: 50,
                    }}
                >
                    <Text>{t("goto_blog")}</Text>
                </Button>
            </Link>
        </section>
    );
};

const Content: React.FC<{
    title: string;
    items: {
        id: string;
        body: string;
        rawBody: string;
        frontmatter: { image_src?: string; image_alt?: string };
    }[];
}> = (props) => {
    return (
        <Container style={{ padding: "32px 16px" }}>
            <Row>
                {props.title && (
                    <Text>
                        <h2>{props.title}</h2>
                    </Text>
                )}
            </Row>
            {props.items.map((item, index) => (
                <article key={item.id}>
                    <Row>
                        {item.frontmatter.image_src && (
                            <Col
                                md={12}
                                lg={item.rawBody.includes("\n---\n\n") ? 4 : 6}
                            >
                                <Figure
                                    src={item.frontmatter.image_src}
                                    alt={item.frontmatter.image_alt}
                                    preload
                                    fluid
                                />
                            </Col>
                        )}
                        {item.rawBody.includes("\n---\n\n") && (
                            <Col
                                md={12}
                                lg={item.frontmatter.image_src ? 8 : 12}
                                style={{ marginBottom: 8 }}
                            >
                                <MDXRenderer>{item.body}</MDXRenderer>
                            </Col>
                        )}
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
    const { t } = useTranslation("home");

    return (
        <Layout>
            <Hero />
            <section id="about">
                <Content title={t("about")} items={props.data.about.nodes} />
            </section>
            <section id="resume">
                <Break title={t("resume")} image="/images/break_resume.jpg" />
                <Content
                    title={t("educations")}
                    items={props.data.educations.nodes}
                />
                <hr />
                <Content
                    title={t("courses")}
                    items={props.data.courses.nodes}
                />
                <hr />
                <Content title={t("works")} items={props.data.works.nodes} />
            </section>
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

        about: allMdx(
            sort: { fields: frontmatter___index, order: DESC }
            filter: {
                slug: { regex: "/about/.*/" }
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

        educations: allMdx(
            sort: { fields: frontmatter___index, order: DESC }
            filter: {
                slug: { regex: "/educations/.*/" }
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

        courses: allMdx(
            sort: { fields: frontmatter___index, order: DESC }
            filter: {
                slug: { regex: "/courses/.*/" }
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

        works: allMdx(
            sort: { fields: frontmatter___index, order: DESC }
            filter: {
                slug: { regex: "/works/.*/" }
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
