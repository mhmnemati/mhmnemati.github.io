import type { AppProps } from "next/app";

import { ArwesThemeProvider, StylesBaseline } from "@arwes/core";
import { AnimatorGeneralProvider } from "@arwes/animation";
import { BleepsProvider } from "@arwes/sounds";

import { appWithTranslation } from "next-i18next";

import theme from "app/theme";

const UnsafeArwesThemeProvider = ArwesThemeProvider as any;
const UnsafeBleepsProvider = BleepsProvider as any;

export default appWithTranslation(function Component(props: AppProps) {
    const { Component, pageProps, router, ...rest } = props;

    const getLayout = (Component as any).getLayout || ((page: any) => page);
    const isRTL = ["fa"].includes(router.locale || "");

    return (
        <UnsafeArwesThemeProvider
            themeSettings={(rest as any).theme || theme(isRTL)}
        >
            <StylesBaseline
                styles={{
                    "html, body": {
                        fontFamily: `${isRTL ? "BYekan" : "Roboto"} !important`,
                        overflowX: "hidden",
                        lineHeight: "1.6 !important",
                        scrollBehavior: "smooth",
                        direction: isRTL ? "rtl" : "ltr",
                    },
                    "h1, h2, h3, h4, h5, h6": {
                        fontFamily: `${
                            isRTL ? "BYekan" : "Neuropolitical"
                        } !important`,
                        textTransform: "none",
                    },
                    "code, pre": {
                        fontFamily: "Source Code Pro, monospace !important",
                        direction: "ltr",
                    },
                    button: {
                        margin: 8,
                    },

                    ".ReactModal__Overlay": {
                        opacity: 0,
                        transition: "opacity 500ms ease-in-out",
                    },
                    ".ReactModal__Overlay--after-open": {
                        opacity: 1,
                    },
                    ".ReactModal__Overlay--before-close": {
                        opacity: 0,
                    },
                    ".ReactModal__Body--open": {
                        overflow: "hidden",
                        /* position: fixed; */
                        width: "100%",
                        height: "100%",
                    },
                }}
            />
            <UnsafeBleepsProvider
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
                    animator={{ duration: { enter: 600, exit: 600 } }}
                >
                    <Component {...pageProps} />
                </AnimatorGeneralProvider>
            </UnsafeBleepsProvider>
        </UnsafeArwesThemeProvider>
    );
});
