import React from "react";

import { Container, Row, Col } from "react-grid-system";

import { Text, Figure, Button, FrameHexagon } from "@arwes/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faTwitter,
    faGithub,
    faGitlab,
    faReact,
} from "@fortawesome/free-brands-svg-icons";

import Layout from "../components/Layout";
import Content from "../components/Content";

const Icon = (props) => (
    <a
        style={{
            color: "inherit",
        }}
        href={props.href}
    >
        <FontAwesomeIcon
            style={{ margin: props.margin || 8 }}
            icon={props.icon}
            size="2x"
        />
    </a>
);

const Hero = () => (
    <Row
        id="home"
        style={{
            height: "100vh",
            padding: 16,
            backgroundImage: "url(/images/background_4.jpg)",
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
                        <Text
                            style={{
                                color: "#ffcb9a",
                            }}
                        >
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
                                    <Text
                                        style={{
                                            color: "#ffcb9a",
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            style={{ marginRight: 8 }}
                                            icon={faUser}
                                        />
                                        Mohammad Hosein Nemati
                                        <br />
                                        <FontAwesomeIcon
                                            style={{ marginRight: 8 }}
                                            icon={faEnvelope}
                                        />
                                        <a href="mailto:koliberr136a1@gmail.com">
                                            koliberr136a1@gmail.com
                                        </a>
                                        <br />
                                        <FontAwesomeIcon
                                            style={{ marginRight: 8 }}
                                            icon={faPhone}
                                        />
                                        <a href="tel:+989377588105">
                                            +98-937-758-8105
                                        </a>
                                    </Text>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Button FrameComponent={FrameHexagon}>
                                        <a href="/assets/cv.pdf">
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

const Resume = () => (
    <Row id="resume">
        <Container style={{ padding: 32 }}>
            <Row>
                <Col md={12} lg={4}>
                    <Text>
                        <h2>Education</h2>
                    </Text>
                </Col>
                <Col md={12} lg={8}>
                    <div style={{ margin: "16px 0" }}>
                        <Text>
                            <h3>Kharazmi University</h3>
                        </Text>
                        <Text
                            style={{
                                color: "#ffcb9a",
                            }}
                        >
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
                            <h3>Mandegar Alborz High School</h3>
                        </Text>
                        <Text
                            style={{
                                color: "#ffcb9a",
                            }}
                        >
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
                </Col>
            </Row>

            <hr />

            <Row>
                <Col md={12} lg={4}>
                    <Text>
                        <h2>Courses</h2>
                    </Text>
                </Col>
                <Col md={12} lg={8}>
                    <div style={{ margin: "16px 0" }}>
                        <Text>
                            <h3>Kharazmi University</h3>
                        </Text>
                        <Text
                            style={{
                                color: "#ffcb9a",
                            }}
                        >
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
                            <h3>Mandegar Alborz High School</h3>
                        </Text>
                        <Text
                            style={{
                                color: "#ffcb9a",
                            }}
                        >
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
                </Col>
            </Row>

            <hr />

            <Row>
                <Col md={12} lg={4}>
                    <Text>
                        <h2>Work</h2>
                    </Text>
                </Col>
                <Col md={12} lg={8}>
                    <div style={{ margin: "16px 0" }}>
                        <Text>
                            <h3>Farmeal</h3>
                        </Text>
                        <Text
                            style={{
                                color: "#ffcb9a",
                            }}
                        >
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
                            <h3>Mandegar Alborz High School</h3>
                        </Text>
                        <Text
                            style={{
                                color: "#ffcb9a",
                            }}
                        >
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
                </Col>
            </Row>

            <hr />

            <Row>
                <Col md={12} lg={4}>
                    <Text>
                        <h2>Skills</h2>
                    </Text>
                </Col>
                <Col md={12} lg={8}>
                    <div style={{ margin: "16px 0" }}>
                        <Text>
                            <h3>Farmeal</h3>
                        </Text>
                        <Text
                            style={{
                                color: "#ffcb9a",
                            }}
                        >
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
                            <h3>Mandegar Alborz High School</h3>
                        </Text>
                        <Text
                            style={{
                                color: "#ffcb9a",
                            }}
                        >
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
                </Col>
            </Row>
        </Container>
    </Row>
);

const Projects = () => (
    <Row id="projects">
        <Container style={{ padding: 32 }}>
            <Row>
                <Col md={12} lg={4}>
                    <Text>
                        <h3>Projects</h3>
                    </Text>
                </Col>
                <Col md={12} lg={8}>
                    <div style={{ margin: "16px 0" }}>
                        <Text>
                            <h2>About Me</h2>
                        </Text>
                        <Text
                            style={{
                                color: "#ffcb9a",
                            }}
                        >
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
                                    <Text
                                        style={{
                                            color: "#ffcb9a",
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            style={{ marginRight: 8 }}
                                            icon={faUser}
                                        />
                                        Mohammad Hosein Nemati
                                        <br />
                                        <FontAwesomeIcon
                                            style={{ marginRight: 8 }}
                                            icon={faEnvelope}
                                        />
                                        <a href="mailto:koliberr136a1@gmail.com">
                                            koliberr136a1@gmail.com
                                        </a>
                                        <br />
                                        <FontAwesomeIcon
                                            style={{ marginRight: 8 }}
                                            icon={faPhone}
                                        />
                                        <a href="">+98-937-758-8105</a>
                                    </Text>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Button FrameComponent={FrameHexagon}>
                                        <a href="/assets/cv.pdf">
                                            <Text>Download CV</Text>
                                        </a>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>

            <hr />

            <Row>
                <Col md={12} lg={4}>
                    <Text>
                        <h3>Books</h3>
                    </Text>
                </Col>
                <Col md={12} lg={8}>
                    <div style={{ margin: "16px 0" }}>
                        <Text>
                            <h2>About Me</h2>
                        </Text>
                        <Text
                            style={{
                                color: "#ffcb9a",
                            }}
                        >
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
                                    <Text
                                        style={{
                                            color: "#ffcb9a",
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            style={{ marginRight: 8 }}
                                            icon={faUser}
                                        />
                                        Mohammad Hosein Nemati
                                        <br />
                                        <FontAwesomeIcon
                                            style={{ marginRight: 8 }}
                                            icon={faEnvelope}
                                        />
                                        <a href="mailto:koliberr136a1@gmail.com">
                                            koliberr136a1@gmail.com
                                        </a>
                                        <br />
                                        <FontAwesomeIcon
                                            style={{ marginRight: 8 }}
                                            icon={faPhone}
                                        />
                                        <a href="">+98-937-758-8105</a>
                                    </Text>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Button FrameComponent={FrameHexagon}>
                                        <a href="/assets/cv.pdf">
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
            <Row
                style={{
                    height: "40vh",
                    padding: 16,
                    backgroundImage: "url(/images/background_4.jpg)",
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
                    <h2>Resume</h2>
                </Text>
            </Row>
            <Resume />
            <Row
                style={{
                    height: "40vh",
                    padding: 16,
                    backgroundImage: "url(/images/background_4.jpg)",
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
                    <h2>Projects & Books</h2>
                </Text>
            </Row>
            <Projects />
            <Row
                style={{
                    height: "40vh",
                    padding: 16,
                    backgroundImage: "url(/images/background_4.jpg)",
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
                <div>
                    <Icon
                        margin={16}
                        icon={faEnvelope}
                        href="mailto:koliberr136s1@gmail.com"
                    />
                    <Icon
                        margin={16}
                        icon={faLinkedin}
                        href="https://www.linkedin.com/in/mohammad-hosein-nemati-665b1813b/"
                    />
                    <Icon
                        margin={16}
                        icon={faTwitter}
                        href="https://twitter.com/ckoliberr"
                    />
                    <Icon margin={16} icon={faPhone} href="tel:+989377588105" />
                </div>
                <br />
                <Text>
                    © Copyright 2021 KoLiBer •{" "}
                    <FontAwesomeIcon icon={faReact} /> by Mohammad Hosein Nemati
                </Text>
            </Row>
        </Layout>
    );
};

export default Component;
