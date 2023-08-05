"use client";

import {
    Animator,
    Animated,
    type AnimatedProps,
    Illuminator,
    FrameSVGLines,
    FrameSVGNefrex,
    FrameSVGKranox,
    FrameSVGOctagon,
    FrameSVGCorners,
    FrameSVGUnderline,
    createFrameKranoxClip,
    createFrameOctagonClip,
    useFrameSVGAssemblingAnimation,
    useBleeps,
    aa,
} from "@arwes/react";

import { useRef } from "react";

interface Props extends AnimatedProps {
    frame: "lines" | "nefrex" | "kranox" | "octagon" | "corners" | "underline";
    squareSize?: number;
    clickable?: boolean;
    animate?: boolean;
}

export default function Component(props: Props) {
    const bleeps = useBleeps();
    const svgRef = useRef<SVGSVGElement | null>(null);
    const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

    let clipPath = createFrameOctagonClip({
        squareSize: props.squareSize,
        rightBottom: false,
        leftBottom: false,
        rightTop: false,
        leftTop: false,
    });
    if (props.frame === "nefrex") {
        clipPath = createFrameOctagonClip({
            squareSize: props.squareSize,
            leftBottom: false,
            rightTop: false,
        });
    }
    if (props.frame === "kranox") {
        clipPath = createFrameKranoxClip({
            squareSize: props.squareSize,
        });
    }
    if (props.frame === "octagon") {
        clipPath = createFrameOctagonClip({
            squareSize: props.squareSize,
        });
    }
    if (props.frame === "underline") {
        clipPath = createFrameOctagonClip({
            squareSize: props.squareSize,
            leftBottom: false,
            rightTop: false,
            leftTop: false,
        });
    }

    return (
        <Animator>
            <Animated
                {...props}
                className={`${props.className} frame`}
                animated={aa("scaleY", 0.5, 1, 1)}
                onClick={() => bleeps.click?.play()}
                style={{
                    position: "relative",
                    clipPath: clipPath,
                }}
            >
                <Animator>
                    <Illuminator size={400} />
                    {props.frame == "lines" && (
                        <FrameSVGLines
                            elementRef={props.animate ? svgRef : undefined}
                            onRender={props.animate ? onRender : undefined}
                        />
                    )}
                    {props.frame == "nefrex" && (
                        <FrameSVGNefrex
                            squareSize={props.squareSize}
                            elementRef={props.animate ? svgRef : undefined}
                            onRender={props.animate ? onRender : undefined}
                        />
                    )}
                    {props.frame == "kranox" && (
                        <FrameSVGKranox
                            squareSize={props.squareSize}
                            elementRef={props.animate ? svgRef : undefined}
                            onRender={props.animate ? onRender : undefined}
                        />
                    )}
                    {props.frame == "octagon" && (
                        <FrameSVGOctagon
                            squareSize={props.squareSize}
                            elementRef={props.animate ? svgRef : undefined}
                            onRender={props.animate ? onRender : undefined}
                        />
                    )}
                    {props.frame == "corners" && (
                        <FrameSVGCorners
                            elementRef={props.animate ? svgRef : undefined}
                            onRender={props.animate ? onRender : undefined}
                        />
                    )}
                    {props.frame == "underline" && (
                        <FrameSVGUnderline
                            squareSize={props.squareSize}
                            elementRef={props.animate ? svgRef : undefined}
                            onRender={props.animate ? onRender : undefined}
                        />
                    )}
                </Animator>

                <div style={{ position: "relative" }}>{props.children}</div>
            </Animated>
        </Animator>
    );
}
