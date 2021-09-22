import React from "react";

import { Text, FrameLines } from "@arwes/core";

const Component = (props) => {
    return (
        <section
            style={{
                height: "40vh",
                backgroundImage: `url(${props.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundFlip: "flip",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    padding: 16,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <Text>
                    <h2>{props.title}</h2>
                </Text>
            </div>
        </section>
    );
};

export default Component;
