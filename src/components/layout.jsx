import React from "react";

import { ArwesThemeProvider, StylesBaseline } from "@arwes/core";
import { AnimatorGeneralProvider } from "@arwes/animation";
import { BleepsProvider } from "@arwes/sounds";

import Header from "./header";

const Component = (props) => {
    return (
        <ArwesThemeProvider themeSettings={{}}>
            <StylesBaseline
                styles={{
                    "html, body": {
                        fontFamily: '"Titillium Web", sans-serif',
                    },
                    "code, pre": {
                        fontFamily: '"Source Code Pro", monospace',
                    },
                }}
            />
            <BleepsProvider
                audioSettings={{ common: { volume: 0.25 } }}
                playersSettings={{
                    type: {
                        src: ["/sounds/type.mp3"],
                        loop: true,
                    },
                }}
                bleepsSettings={{ type: { player: "type" } }}
            >
                <AnimatorGeneralProvider
                    animator={{ duration: { enter: 200, exit: 200 } }}
                >
                    <div
                        style={{
                            width: "100vw",
                            height: "100vh",
                            backgroundImage: "url(/images/background_3.jpg)",
                            backgroundSize: "cover",
                        }}
                    >
                        {/* <Header /> */}
                        {props.children}
                    </div>
                </AnimatorGeneralProvider>
            </BleepsProvider>
        </ArwesThemeProvider>
    );
};

export default Component;
