import React from "react";

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
            >
                <a href="/#home">
                    <Button FrameComponent={FrameHexagon}>
                        <Text>Home</Text>
                    </Button>
                </a>
                <a href="/#about">
                    <Button FrameComponent={FrameHexagon}>
                        <Text>About</Text>
                    </Button>
                </a>
                <a href="/#resume">
                    <Button FrameComponent={FrameHexagon}>
                        <Text>Resume</Text>
                    </Button>
                </a>
                <a href="/#projects">
                    <Button FrameComponent={FrameHexagon}>
                        <Text>Projects</Text>
                    </Button>
                </a>
                <a href="/blog">
                    <Button FrameComponent={FrameHexagon}>
                        <Text>Blog</Text>
                    </Button>
                </a>
            </FrameUnderline>
        </header>
    );
};

export default Component;
