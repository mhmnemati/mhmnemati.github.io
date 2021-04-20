import React from "react";

import { FrameBox, Button, Text } from "@arwes/core";

const Component = (props) => {
    return (
        <header>
            <FrameBox
                style={{
                    width: "100vw",
                    padding: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    backgroundColor: "rgba(1,1,1,0.5)",
                    position: "fixed",
                }}
            >
                <Button palette="primary" active>
                    <Text>Home</Text>
                </Button>
                <Button palette="primary" active>
                    <Text>Blog</Text>
                </Button>
                <Button palette="primary" active>
                    <Text>About Me</Text>
                </Button>
            </FrameBox>
        </header>
    );
};

export default Component;
