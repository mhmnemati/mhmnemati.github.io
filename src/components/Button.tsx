"use client";

import Animator from "./Animator";
import Animated, { type AnimatedProps } from "./Animated";

export default function Component(props: AnimatedProps) {
    return (
        <Animator>
            <Animated
                {...props}
                as="button"
                size="small"
                type="corners"
                illuminator={80}
                contentClass={`${props.contentClass} p-4`}
            />
            {/* <style jsx global>{`
                button: {
                    color: "hsl(60deg 100% 75%)",
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
                        color: "hsla(180, 100%, 10%, 0.5)", //theme.colors.primary.bg(2),
                    },
                    "[data-name=line]": {
                        color: "hsla(180, 100%, 10%, 0.9)", //theme.colors.primary.deco(2),
                    },

                    ":hover": {
                        color: "hsl(60deg 100% 85%)",
                        "[data-name=bg]": {
                            color: "hsl(60deg 100% 40% / 16%)",
                        },
                        "[data-name=line]": {
                            color: "hsl(60deg 100% 40% / 22%)",
                        },
                    },
                    ":focus": {
                        outline: "1px dotted hsl(60deg 100% 40% / 50%)",
                    },
                },
            `}</style> */}
        </Animator>
    );
}
