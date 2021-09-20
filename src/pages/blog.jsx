import React from "react";

import { Container, Row, Col } from "react-grid-system";

import { Text } from "@arwes/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/Layout";
import Content from "../components/Content";

const Component = (props) => {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col
                        sm={6}
                        style={{
                            textAlign: "center",
                            height: "100vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div style={{ alignItems: "start" }}>
                            <Text>
                                <h1>Welcome!</h1>
                                <h4>I Am Full Stack Developer</h4>
                            </Text>
                        </div>
                    </Col>
                    <Col
                        sm={6}
                        style={{
                            textAlign: "center",
                            height: "100vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        KoLiBer
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Component;
