"use client";

import {
    Animated,
    type AnimatedProps as Props,
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

type Color = "primary" | "secondary" | "success" | "warning" | "error" | "info";
type Frame =
    | "lines"
    | "nefrex"
    | "kranox"
    | "octagon"
    | "corners"
    | "underline";
export interface AnimatedProps extends Props {
    color?: Color;
    frame?: Frame;
    contentClass?: string;
    squareSize?: number;
    clickable?: boolean;
    animate?: boolean;
    onClick?: any;
}

const createFrameClip = (frame?: Frame, squareSize?: number) => {
    if (frame === "lines") {
        return createFrameOctagonClip({
            squareSize: squareSize,
            rightBottom: false,
            leftBottom: false,
            rightTop: false,
            leftTop: false,
        });
    }

    if (frame === "nefrex") {
        return createFrameOctagonClip({
            squareSize: squareSize,
            leftBottom: false,
            rightTop: false,
        });
    }

    if (frame === "kranox") {
        return createFrameKranoxClip({
            squareSize: squareSize,
        });
    }

    if (frame === "octagon") {
        return createFrameOctagonClip({
            squareSize: squareSize,
        });
    }

    if (frame === "corners") {
        return createFrameOctagonClip({
            squareSize: squareSize,
            rightBottom: false,
            leftBottom: false,
            rightTop: false,
            leftTop: false,
        });
    }

    if (frame === "underline") {
        return createFrameOctagonClip({
            squareSize: squareSize,
            leftBottom: false,
            rightTop: false,
            leftTop: false,
        });
    }
};

export default function Component(props: AnimatedProps) {
    const {
        frame,
        color,
        contentClass,
        squareSize,
        clickable,
        animate,
        ...rest
    } = props;

    const bleeps = useBleeps();
    const svgRef = useRef<SVGSVGElement | null>(null);
    const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

    return (
        <Animated
            {...rest}
            className={`${props.className} relative root ${color}`}
            style={{ clipPath: createFrameClip(frame, squareSize) }}
            animated={[aa("y", 16, 0), aa("scaleY", 0.5, 1, 1)]}
            onClick={() => {
                if (props.as === "button") {
                    bleeps.click?.play();
                    props.onClick?.();
                }
            }}
        >
            {props.as === "button" && <Illuminator size={200} />}
            {frame == "lines" && (
                <FrameSVGLines
                    strokeWidth={2}
                    largeLineWidth={2}
                    smallLineWidth={3}
                    elementRef={svgRef}
                    onRender={onRender}
                />
            )}
            {frame == "nefrex" && (
                <FrameSVGNefrex
                    strokeWidth={2}
                    squareSize={squareSize}
                    elementRef={svgRef}
                    onRender={onRender}
                />
            )}
            {frame == "kranox" && (
                <FrameSVGKranox
                    strokeWidth={3}
                    squareSize={squareSize}
                    elementRef={svgRef}
                    onRender={onRender}
                />
            )}
            {frame == "octagon" && (
                <FrameSVGOctagon
                    strokeWidth={2}
                    squareSize={squareSize}
                    elementRef={svgRef}
                    onRender={onRender}
                />
            )}
            {frame == "corners" && (
                <FrameSVGCorners
                    strokeWidth={2}
                    elementRef={svgRef}
                    onRender={onRender}
                />
            )}
            {frame == "underline" && (
                <FrameSVGUnderline
                    strokeWidth={2}
                    squareSize={squareSize}
                    elementRef={svgRef}
                    onRender={onRender}
                />
            )}

            <div className={`${contentClass} relative content`}>
                {props.children}
            </div>
        </Animated>
    );
}
