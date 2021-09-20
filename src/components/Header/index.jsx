import React from "react";

import { Link } from "gatsby";

import { FrameUnderline, Button, FrameHexagon, Text } from "@arwes/core";

const Component = (props) => {
    return (
        <header>
            <FrameUnderline
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "right",
                    backgroundColor: "#00000000",
                    position: "fixed",
                    zIndex: 5,
                }}
                // as="button"
            >
                <Button palette="secondary" FrameComponent={FrameHexagon}>
                    <Link to="/blog">
                        <Text>Blog</Text>
                    </Link>
                </Button>
                <Button palette="secondary" FrameComponent={FrameHexagon}>
                    <Link to="/about">
                        <Text>About</Text>
                    </Link>
                </Button>
                <Button palette="secondary" FrameComponent={FrameHexagon}>
                    <Link to="/projects">
                        <Text>Projects</Text>
                    </Link>
                </Button>
                <Button palette="secondary" FrameComponent={FrameHexagon}>
                    <Link to="/resume">
                        <Text>Resume</Text>
                    </Link>
                </Button>
            </FrameUnderline>
        </header>
    );
};

export default Component;
