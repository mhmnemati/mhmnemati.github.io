"use client";

import { type CSSObject, Global } from "@emotion/react";
import {
    createAppTheme,
    createAppStylesBaseline,
    type AnimatorGeneralProviderSettings,
    AnimatorGeneralProvider,
    type BleepsProviderSettings,
    BleepsProvider,
} from "@arwes/react";

const theme = createAppTheme();
const stylesBaseline = createAppStylesBaseline(theme);

const animatorsSettings: AnimatorGeneralProviderSettings = {
    duration: {
        enter: 0.2,
        exit: 0.2,
        stagger: 0.04,
    },
};

const bleepsSettings: BleepsProviderSettings = {
    master: {
        volume: 0.9,
    },
    bleeps: {
        intro: {
            sources: [
                {
                    src: "https://next.arwes.dev/assets/sounds/intro.mp3",
                    type: "audio/mpeg",
                },
            ],
        },
        click: {
            sources: [
                {
                    src: "https://next.arwes.dev/assets/sounds/click.mp3",
                    type: "audio/mpeg",
                },
            ],
        },
    },
};

export default function Component(props: { children: React.ReactNode }) {
    return (
        <>
            <Global styles={stylesBaseline as Record<string, CSSObject>} />
            <AnimatorGeneralProvider {...animatorsSettings}>
                <BleepsProvider {...bleepsSettings}>
                    {props.children}
                </BleepsProvider>
            </AnimatorGeneralProvider>
        </>
    );
}
