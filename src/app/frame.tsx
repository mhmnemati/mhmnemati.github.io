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
    createFrameOctagonClip,
} from "@arwes/react";

const theme = createAppTheme();
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

export default async function Frame(props: { children: React.ReactNode }) {
    const [active] = useState(true);

    return (
        <>
            <Global
                styles={
                    {
                        ...stylesBaseline,
                        button: {
                            width: 100,
                            height: 50,
                            background: "#017",
                            clipPath: createFrameOctagonClip({
                                squareSize: "1rem",
                            }),
                        },
                    } as Record<string, CSSObject>
                }
            />
            <AnimatorGeneralProvider {...animatorsSettings}>
                <Animator combine manager="stagger" active={active}>
                    <BleepsProvider {...bleepsSettings}>
                        {props.children}
                    </BleepsProvider>
                </Animator>
            </AnimatorGeneralProvider>
        </>
    );
}
