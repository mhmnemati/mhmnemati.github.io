import React from "react";

import { Container, Row, Col } from "react-grid-system";

import { Text, Figure } from "@arwes/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faTwitter,
    faGithub,
    faGitlab,
} from "@fortawesome/free-brands-svg-icons";

import Layout from "../components/Layout";
import Content from "../components/Content";

const Component = (props) => {
    return (
        <Layout>
            <Container>
                <Row
                    style={{
                        justifyContent: "center",
                        paddingTop: 100,
                    }}
                >
                    <Col md={8} sm={12}>
                        <Figure
                            src={["/images/background_1.jpg"]}
                            alt="Me"
                            preload
                            // fluid
                            descriptionTextProps={{
                                style: {
                                    width: "100%",
                                    textAlign: "left",
                                },
                            }}
                        >
                            I'm Mohammad Hosein Nemati, a keyboard Professional
                        </Figure>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Component;
