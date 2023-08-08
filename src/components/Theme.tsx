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
    settings: {
        hues: {
            primary: 200,
            secondary: 80,
        },
    },
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
                    // button: {
                    //     color: "hsl(60deg 100% 75%)",
                    //     textShadow: "0px 0px 2px hsl(60deg 100% 75% / 50%)",
                    //     transitionProperty: "color",
                    //     transitionDuration: "200ms",
                    //     transitionTimingFunction: "ease-out",

                    //     path: {
                    //         transitionProperty: "color",
                    //         transitionDuration: "200ms",
                    //         transitionTimingFunction: "ease-out",
                    //     },

                    //     "[data-name=bg]": {
                    //         color: "hsla(180, 100%, 10%, 0.5)", //theme.colors.primary.bg(2),
                    //     },
                    //     "[data-name=line]": {
                    //         color: "hsla(180, 100%, 10%, 0.9)", //theme.colors.primary.deco(2),
                    //     },

                    //     ":hover": {
                    //         color: "hsl(60deg 100% 85%)",
                    //         "[data-name=bg]": {
                    //             color: "hsl(60deg 100% 40% / 16%)",
                    //         },
                    //         "[data-name=line]": {
                    //             color: "hsl(60deg 100% 40% / 22%)",
                    //         },
                    //     },
                    //     ":focus": {
                    //         outline: "1px dotted hsl(60deg 100% 40% / 50%)",
                    //     },
                    // },

                    ...Object.fromEntries(
                        [
                            "primary",
                            "secondary",
                            "success",
                            "warning",
                            "error",
                            "info",
                        ].map((color) => [
                            `.${color}`,
                            {
                                color: (theme.colors as any)[color].text(2),
                                "h1,h2,h3,h4,h5,h6": {
                                    color: (theme.colors as any)[color].main(4),
                                    textShadow: `0 0 2px ${(
                                        theme.colors as any
                                    )[color].main(5)}`,
                                },

                                "[data-name=bg]": {
                                    color: (theme.colors as any)[color].bg(5, {
                                        alpha: 0.5,
                                    }),
                                    filter: `drop-shadow(0 0 4px ${(
                                        theme.colors as any
                                    )[color].bg(5, {
                                        alpha: 0.5,
                                    })})`,
                                },
                                "[data-name=line]": {
                                    color: (theme.colors as any)[color].main(5),
                                    filter: `drop-shadow(0 0 4px ${(
                                        theme.colors as any
                                    )[color].main(5)})`,
                                },
                            },
                        ])
                    ),
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
