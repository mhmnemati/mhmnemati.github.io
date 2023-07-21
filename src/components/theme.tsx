"use client";

import { useState } from "react";
import { type CSSObject, Global } from "@emotion/react";
import {
    createAppTheme,
    createAppStylesBaseline,
    type AnimatorGeneralProviderSettings,
    AnimatorGeneralProvider,
    Animator,
    type BleepsProviderSettings,
    BleepsProvider,
} from "@arwes/react";

const theme = createAppTheme({
    settings: {
        colors: {
            primary: { main: "#1ca6a9" },
            secondary: { main: "#2c3531" },
        },
    },
});
const stylesBaseline = createAppStylesBaseline(theme);

const animatorsSettings: AnimatorGeneralProviderSettings = {
    // Durations in seconds.
    duration: {
        enter: 0.2,
        exit: 0.2,
        stagger: 0.04,
    },
};

const bleepsSettings: BleepsProviderSettings = {
    // Shared global audio settings.
    master: {
        volume: 0.9,
    },
    bleeps: {
        intro: {
            sources: [{ src: "/sounds/assemble.mp3", type: "audio/mpeg" }],
        },
        click: {
            sources: [{ src: "/sounds/click.mp3", type: "audio/mpeg" }],
        },
    },
};

export default async function Theme({
    children,
}: {
    children: React.ReactNode;
}) {
    const [active] = useState(true);

    return (
        <>
            <Global styles={stylesBaseline as Record<string, CSSObject>} />
            <AnimatorGeneralProvider {...animatorsSettings}>
                <Animator combine manager="stagger" active={active}>
                    <BleepsProvider {...bleepsSettings}>
                        {children}
                    </BleepsProvider>
                </Animator>
            </AnimatorGeneralProvider>
        </>
    );
}
