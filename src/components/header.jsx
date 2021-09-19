import React from "react";

import { FrameUnderline, Button, Text } from "@arwes/core";

const Component = (props) => {
    return (
        <header>
            <FrameUnderline
                style={{
                    width: "100%",
                    padding: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    backgroundColor: "rgba(0.2,1,1,0.2)",
                    position: "fixed",
                    zIndex: 5,
                }}
            >
                <Button palette="primary">
                    <Text>Home</Text>
                </Button>
                <Button palette="primary">
                    <Text>Blog</Text>
                </Button>
                <Button palette="primary">
                    <Text>About Me</Text>
                </Button>
            </FrameUnderline>
        </header>
    );
};

export default Component;
