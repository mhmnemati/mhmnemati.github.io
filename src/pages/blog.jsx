import React from "react";

import { Row } from "react-grid-system";

import { Text } from "@arwes/core";

import Layout from "../components/layout";

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
            <h1>Sorry, this page is under construction!</h1>
        </Text>
    </Row>
);

const Component = (props) => {
    return (
        <Layout>
            <Hero />
        </Layout>
    );
};

export default Component;
