import React from "react";

import { ArwesThemeProvider, StylesBaseline } from "@arwes/core";
import { AnimatorGeneralProvider } from "@arwes/animation";
import { BleepsProvider } from "@arwes/sounds";

const Component: React.FC<any> = (props) => {
    return (
        <ArwesThemeProvider themeSettings={{}}>
            <StylesBaseline
                styles={{
                    "html, body": {
                        width: "100%",
                        height: "100%",
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
                        src: ["/type.mp3"],
                        loop: true,
                    },
                }}
                bleepsSettings={{ type: { player: "type" } }}
            >
                <AnimatorGeneralProvider
                    animator={{ duration: { enter: 200, exit: 200 } }}
                >
                    {props.children}
                </AnimatorGeneralProvider>
            </BleepsProvider>
        </ArwesThemeProvider>
    );
};

export default Component;
