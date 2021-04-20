import React from "react";

import { FrameLines, Text } from "@arwes/core";

const Component = (props) => {
    return (
        <section
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <FrameLines
                animator={{ activate: true }}
                palette="error"
                largeLineWidth={2}
                smallLineWidth={4}
                smallLineLength={20}
                hover
            >
                {props.children}
            </FrameLines>
        </section>
    );
};

export default Component;
