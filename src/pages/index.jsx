import React from "react";

import { Container, Row, Col } from "react-grid-system";

import { Text, Figure, Button, FrameHexagon } from "@arwes/core";

import { faEnvelope, faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faTwitter,
    faGithub,
    faGitlab,
} from "@fortawesome/free-brands-svg-icons";

import Layout from "../components/layout";
import Content from "../components/content";
import Break from "../components/break";

import Icon from "../components/icon";

const Hero = () => (
    <Row
        id="home"
        style={{
            height: "100vh",
            padding: 16,
            backgroundImage: "url(/images/hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundFlip: "flip",
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
            <Icon icon={faEnvelope} href="mailto:koliberr136s1@gmail.com" />
            <Icon
                icon={faLinkedin}
                href="https://www.linkedin.com/in/mohammad-hosein-nemati-665b1813b/"
            />
            <Icon icon={faTwitter} href="https://twitter.com/ckoliberr" />
            <Icon icon={faGithub} href="https://github.com/ckoliber" />
            <Icon icon={faGitlab} href="https://gitlab.com/ckoliber" />
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
    </Row>
);

const About = () => (
    <Row id="about">
        <Container style={{ padding: 32 }}>
            <Row>
                <Col md={12} lg={4}>
                    <Figure
                        src={"/images/personal.jpg"}
                        alt="Mohammad Hosein"
                        preload
                        fluid
                    />
                </Col>
                <Col md={12} lg={8}>
                    <div style={{ margin: "16px 0" }}>
                        <Text>
                            <h2>About Me</h2>
                        </Text>
                        <Text>
                            Why do we use it? It is a long established fact that
                            a reader will be distracted by the readable content
                            of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less
                            normal distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English. Many desktop publishing packages
                            and web page editors now use Lorem Ipsum as their
                            default model text, and a search for 'lorem ipsum'
                            will uncover many web sites still in their infancy.
                            Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose
                            (injected humour and the like).
                        </Text>
                    </div>

                    <div style={{ margin: "16px 0" }}>
                        <Text>
                            <h2>Contact Details</h2>
                        </Text>
                        <br />
                        <Container>
                            <Row>
                                <Col sm={12} md={6}>
                                    <Text>
                                        <Icon
                                            margin={0}
                                            icon={faUser}
                                            href="https://www.linkedin.com/in/mohammad-hosein-nemati-665b1813b/"
                                            text="Mohammad Hosein Nemati"
                                        />
                                        <br />
                                        <Icon
                                            margin={0}
                                            icon={faEnvelope}
                                            href="mailto:koliberr136a1@gmail.com"
                                            text="koliberr136a1@gmail.com"
                                        />
                                        <br />
                                        <Icon
                                            margin={0}
                                            icon={faPhone}
                                            href="tel:+989377588105"
                                            text="+98-937-758-8105"
                                        />
                                    </Text>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Button FrameComponent={FrameHexagon}>
                                        <a
                                            href="/assets/cv.pdf"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Text>Download CV</Text>
                                        </a>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    </Row>
);

const Component = (props) => {
    return (
        <Layout>
            <Hero />
            <About />
            <Break
                image="/images/break_resume.jpg"
                title="Resume"
                id="resume"
            />
            <Row>
                <Container>
                    <Content title="Educations" category="educations" />
                    <hr />
                    <Content title="Courses" category="courses" />
                    <hr />
                    <Content title="Works" category="works" />
                </Container>
            </Row>
            <Break
                image="/images/break_projects.jpg"
                title="Projects & Books"
                id="projects"
            />
            <Row>
                <Container>
                    <Content title="Projects" category="projects" />
                    <hr />
                    <Content title="Books" category="books" />
                </Container>
            </Row>
        </Layout>
    );
};

export default Component;
