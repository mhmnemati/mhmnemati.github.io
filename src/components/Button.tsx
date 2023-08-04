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
    fullWidth?: boolean;
}

export default function Component(props: Props) {
    const bleeps = useBleeps();

    return (
        <Animator>
            <Animated
                as="button"
                className={`button ${props.fullWidth && "fullwidth"}`}
                onClick={() => bleeps.click?.play()}
            >
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
        </Animator>
    );
}
