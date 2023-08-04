"use client";

import {
    Animator,
    Animated,
    Illuminator,
    FrameSVGNefrex,
    FrameSVGKranox,
    FrameSVGOctagon,
    createFrameKranoxClip,
    createFrameOctagonClip,
    aa,
} from "@arwes/react";

import { CSSProperties } from "react";

interface Props {
    children: React.ReactNode;
    style?: CSSProperties;
    frame: "kranox" | "octagon";
}

export default function Component(props: Props) {
    return (
        <Animator>
            <Animated
                className={`frame ${props.frame}`}
                animated={aa("scaleY", 0.5, 1, 1)}
            >
                <Animator>
                    <Illuminator color="hsl(60 50% 90% / 8%)" size={400} />
                    {props.frame == "kranox" && (
                        <FrameSVGKranox squareSize={12} />
                    )}
                    {props.frame == "octagon" && (
                        <FrameSVGOctagon squareSize={12} />
                    )}
                </Animator>

                <div className="frame-content" style={props.style}>
                    {props.children}
                </div>
            </Animated>
        </Animator>
    );
}
