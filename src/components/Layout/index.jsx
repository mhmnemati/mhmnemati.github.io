import React from "react";

import { ArwesThemeProvider, StylesBaseline } from "@arwes/core";
import { AnimatorGeneralProvider } from "@arwes/animation";
import { BleepsProvider } from "@arwes/sounds";

import { ScreenClassProvider } from "react-grid-system";

import Header from "../Header";

const Component = (props) => {
    return (
        <ArwesThemeProvider
            themeSettings={{
                palette: {
                    primary: { main: "#ffcb9a" },
                    neutral: { main: "#2c3531" },
                },
                space: 4,
                outline: 2,
            }}
        >
            <StylesBaseline
                styles={{
                    "html, body": {
                        fontFamily: '"Titillium Web", sans-serif',
                    },
                    "code, pre": {
                        fontFamily: '"Source Code Pro", monospace',
                    },
                    button: { margin: "8px" },
                }}
            />
            <BleepsProvider
                audioSettings={{ common: { volume: 0.25 } }}
                playersSettings={{
                    assemble: { src: ["/sounds/assemble.mp3"], loop: true },
                    type: { src: ["/sounds/type.mp3"], loop: true },
                    click: { src: ["/sounds/click.mp3"] },
                }}
                bleepsSettings={{
                    assemble: { player: "assemble" },
                    type: { player: "type" },
                    click: { player: "click" },
                }}
            >
                <AnimatorGeneralProvider
                    animator={{ duration: { enter: 200, exit: 200 } }}
                >
                    <ScreenClassProvider>
                        <div style={props.style}>
                            <Header />
                            {props.children}
                        </div>
                    </ScreenClassProvider>
                </AnimatorGeneralProvider>
            </BleepsProvider>
        </ArwesThemeProvider>
    );
};

export default Component;
