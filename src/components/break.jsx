import React from "react";

import { Text } from "@arwes/core";

const Component = (props) => {
    return (
        <section
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
                <h2>{props.title}</h2>
            </Text>
        </section>
    );
};

export default Component;
