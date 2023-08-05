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

export const theme = createAppTheme({
    // settings: {
    //     hues: {
    //         primary: 200,
    //         secondary: 80,
    //     },
    // },
});
const stylesBaseline = createAppStylesBaseline(theme);

const animatorsSettings: AnimatorGeneralProviderSettings = {
    duration: {
        enter: 0.2,
        exit: 0.2,
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
            <Global
                styles={{
                    ...(stylesBaseline as Record<string, CSSObject>),
                    button: {
                        padding: 8,
                        textShadow: "0px 0px 2px hsl(60deg 100% 75% / 50%)",
                        transitionProperty: "color",
                        transitionDuration: "200ms",
                        transitionTimingFunction: "ease-out",

                        path: {
                            transitionProperty: "color",
                            transitionDuration: "200ms",
                            transitionTimingFunction: "ease-out",
                        },

                        "[data-name=bg]": {
                            color: theme.colors.primary.bg(2),
                        },
                        "[data-name=line]": {
                            color: theme.colors.primary.deco(2),
                        },

                        ":hover": {
                            color: "hsl(60deg 100% 85%)",
                            "[data-name=bg]": {
                                color: theme.colors.primary.bg(4),
                            },
                            "[data-name=line]": {
                                color: theme.colors.primary.deco(4),
                            },
                        },
                        ":focus": {
                            outline: "1px dotted hsl(60deg 100% 40% / 50%)",
                        },
                    },

                    ".frame": {
                        padding: 8,

                        "[data-name=bg]": {
                            color: theme.colors.primary.bg(2),
                        },
                        "[data-name=line]": {
                            color: theme.colors.primary.deco(2),
                        },
                    },
                }}
            />
            <AnimatorGeneralProvider {...animatorsSettings}>
                <BleepsProvider {...bleepsSettings}>
                    {props.children}
                </BleepsProvider>
            </AnimatorGeneralProvider>
        </>
    );
}
