import React from "react";

import { graphql } from "gatsby";

import { Text, Button, FrameHexagon } from "@arwes/core";

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
import Content from "../components/content";

const Hero: React.FC<{}> = (props) => (
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
            <h1>I'm Mohammad Hosein Nemati.</h1>
        </Text>
        <Text>
            <b>
                A computer science student and full stack developer who is
                mainly interested in modeling nature rules with computers
            </b>
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

        <a
            href="/blog"
            style={{
                marginTop: 32,
            }}
        >
            <Button
                FrameComponent={FrameHexagon}
                style={{
                    width: 150,
                    height: 50,
                }}
            >
                <Text>Goto Blog</Text>
            </Button>
        </a>
    </section>
);

const Component: React.FC<{ data: any }> = (props) => {
    return (
        <Layout>
            <Hero />
            <section id="about">
                <Content title="About Me" items={props.data.about.nodes} />
            </section>
            <section id="resume">
                <Break image="/images/break_resume.jpg" title="Resume" />
                <Content
                    title="Educations"
                    items={props.data.educations.nodes}
                />
                <hr />
                <Content title="Courses" items={props.data.courses.nodes} />
                <hr />
                <Content title="Works" items={props.data.works.nodes} />
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
