"use client";

import {
    Animator,
    Animated,
    Illuminator,
    FrameSVGOctagon,
    createFrameOctagonClip,
    useBleeps,
} from "@arwes/react";

interface Props {
    children: React.ReactNode;
}

export default function Component(props: Props) {
    const bleeps = useBleeps();

    return (
        <Animator>
            <Animated as="button" onClick={() => bleeps.click?.play()}>
                <Animator>
                    <Illuminator color="hsl(60 50% 90% / 20%)" size={200} />
                    <FrameSVGOctagon
                        squareSize={12}
                        leftBottom={false}
                        rightTop={false}
                    />
                </Animator>

                <div style={{ position: "relative" }}>{props.children}</div>
            </Animated>

            <style jsx global>{`
                button {
                    position: relative;
                    padding: 8px 16px;
                    background: transparent;
                    color: hsl(60deg 100% 75%);
                    text-shadow: 0px 0px 2px hsl(60deg 100% 75% / 50%);
                    transition-property: color;
                    transition-duration: 200ms;
                    transition-timing-function: ease-out;
                    clip-path: ${createFrameOctagonClip({
                        squareSize: 12,
                        leftBottom: false,
                        rightTop: false,
                    })};
                }
                button:hover {
                    color: hsl(60deg 100% 85%);
                }
                button:focus {
                    outline: 1px dotted hsl(60deg 100% 40% / 50%);
                }
                button [data-name="bg"] {
                    color: hsla(180, 100%, 10%, 0.5);
                }
                button:hover [data-name="bg"] {
                    color: hsl(60deg 100% 40% / 16%);
                }
                button [data-name="line"] {
                    color: hsla(180, 100%, 10%, 0.9);
                }
                button:hover [data-name="line"] {
                    color: hsl(60deg 100% 40% / 22%);
                }
                button path {
                    transition-property: color;
                    transition-duration: 200ms;
                    transition-timing-function: ease-out;
                }
            `}</style>
        </Animator>
    );
}
