import React from "react";

import { ArwesThemeProvider, StylesBaseline } from "@arwes/core";
import { AnimatorGeneralProvider } from "@arwes/animation";
import { BleepsProvider } from "@arwes/sounds";

import { ScreenClassProvider } from "react-grid-system";

import Header from "./header";
import Footer from "./footer";

import "./styles.css";

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]');
}

const Component = (props) => {
    return (
        <ArwesThemeProvider
            themeSettings={{
                palette: {
                    primary: { main: "#1ca6a9" },
                    secondary: { main: "#2c3531" },
                    neutral: { main: "#151917" },
                    text: {
                        headings: "#22c7cb",
                        root: "#d1e8e2",
                        link: "#d1e8e2",
                        linkHover: "#d1e8e2",
                    },
                },
                space: 4,
                outline: 2,
            }}
        >
            <StylesBaseline
                styles={{
                    "html, body": {
                        fontFamily: '"Titillium Web", sans-serif',
                        overflowX: "hidden",
                        lineHeight: 1.6,
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
                    warning: { src: ["/sounds/warning.mp3"] },
                }}
                bleepsSettings={{
                    assemble: { player: "assemble" },
                    type: { player: "type" },
                    click: { player: "click" },
                }}
            >
                <AnimatorGeneralProvider
                    animator={{ duration: { enter: 1000, exit: 1000 } }}
                >
                    <ScreenClassProvider>
                        <Header />
                        {props.children}
                        <Footer />
                    </ScreenClassProvider>
                </AnimatorGeneralProvider>
            </BleepsProvider>
        </ArwesThemeProvider>
    );
};

export default Component;
