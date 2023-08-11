"use client";

import dynamic from "next/dynamic";

import {
    Animator,
    Animated,
    type AnimatedProps,
    IlluminatorSVG,
    FrameSVGLines,
    type FrameSVGLinesProps,
    FrameSVGNefrex,
    type FrameSVGNefrexProps,
    FrameSVGKranox,
    type FrameSVGKranoxProps,
    FrameSVGOctagon,
    type FrameSVGOctagonProps,
    FrameSVGCorners,
    type FrameSVGCornersProps,
    FrameSVGUnderline,
    type FrameSVGUnderlineProps,
    createFrameKranoxClip,
    createFrameOctagonClip,
    useFrameSVGAssemblingAnimation,
    useBleeps,
} from "@arwes/react";

import { useRef } from "react";

const XIlluminatorSVG = dynamic(() => Promise.resolve(IlluminatorSVG), {
    ssr: false,
});

type Size = "small" | "medium" | "large";
type Type =
    | "lines"
    | "nefrex"
    | "kranox"
    | "neranox"
    | "octagon"
    | "hftagon"
    | "corners"
    | "underline";
export interface FrameProps extends AnimatedProps {
    illuminator?: number;
    onClick?: any;
    type?: Type;
    size?: Size;
}

const createFrame = (type?: Type, size?: Size) => {
    const sizure = ["small", "medium", "large"].indexOf(size || "");

    if (type === "lines") {
        const frameProps: FrameSVGLinesProps = {
            strokeWidth: [2, 3, 4][sizure],
            largeLineWidth: [2, 3, 4][sizure],
            smallLineWidth: [3, 4, 5][sizure],
            smallLineLength: [16, 32, 64][sizure],
        };

        return {
            FrameComponent: FrameSVGLines,
            frameProps: frameProps as any,
            frameClip: createFrameOctagonClip({
                squareSize: 0,
                rightBottom: false,
                leftBottom: false,
                rightTop: false,
                leftTop: false,
            }),
        };
    }

    if (type === "nefrex") {
        const frameProps: FrameSVGNefrexProps = {
            squareSize: [16, 32, 64][sizure],
            strokeWidth: [2, 3, 4][sizure],
            smallLineLength: [16, 32, 64][sizure],
            largeLineLength: [64, 128, 256][sizure],
        };

        return {
            FrameComponent: FrameSVGNefrex,
            frameProps: frameProps as any,
            frameClip: createFrameOctagonClip({
                squareSize: frameProps.squareSize,
                leftBottom: false,
                rightTop: false,
            }),
        };
    }

    if (type === "kranox") {
        const frameProps: FrameSVGKranoxProps = {
            squareSize: [16, 32, 64][sizure],
            strokeWidth: [2, 3, 4][sizure],
            smallLineLength: [16, 32, 64][sizure],
            largeLineLength: [64, 128, 256][sizure],
        };

        return {
            FrameComponent: FrameSVGKranox,
            frameProps: frameProps as any,
            frameClip: createFrameKranoxClip({
                squareSize: frameProps.squareSize,
            }),
        };
    }

    if (type === "neranox") {
        const frameProps: FrameSVGKranoxProps = {
            squareSize: [16, 32, 64][sizure],
            strokeWidth: [2, 3, 4][sizure],
            smallLineLength: [16, 32, 64][sizure],
            largeLineLength: [64, 128, 256][sizure],
        };

        // TODO
        return {
            FrameComponent: FrameSVGKranox,
            frameProps: frameProps as any,
            frameClip: createFrameKranoxClip({
                squareSize: frameProps.squareSize,
            }),
        };
    }

    if (type === "octagon") {
        const frameProps: FrameSVGOctagonProps = {
            squareSize: [16, 32, 64][sizure],
            strokeWidth: [2, 3, 4][sizure],
        };

        return {
            FrameComponent: FrameSVGOctagon,
            frameProps: frameProps as any,
            frameClip: createFrameOctagonClip({
                squareSize: frameProps.squareSize,
            }),
        };
    }

    if (type === "hftagon") {
        const frameProps: FrameSVGOctagonProps = {
            squareSize: [16, 32, 64][sizure],
            strokeWidth: [2, 3, 4][sizure],
            leftBottom: false,
            rightTop: false,
        };

        return {
            FrameComponent: FrameSVGOctagon,
            frameProps: frameProps as any,
            frameClip: createFrameOctagonClip({
                squareSize: frameProps.squareSize,
                leftBottom: false,
                rightTop: false,
            }),
        };
    }

    if (type === "corners") {
        const frameProps: FrameSVGCornersProps = {
            strokeWidth: [2, 3, 4][sizure],
            cornerLength: [16, 32, 64][sizure],
        };

        return {
            FrameComponent: FrameSVGCorners,
            frameProps: frameProps as any,
            frameClip: createFrameOctagonClip({
                squareSize: 0,
                rightBottom: false,
                leftBottom: false,
                rightTop: false,
                leftTop: false,
            }),
        };
    }

    if (type === "underline") {
        const frameProps: FrameSVGUnderlineProps = {
            squareSize: [16, 32, 64][sizure],
            strokeWidth: [2, 3, 4][sizure],
        };

        return {
            FrameComponent: FrameSVGUnderline,
            frameProps: frameProps as any,
            frameClip: createFrameOctagonClip({
                squareSize: frameProps.squareSize,
                leftBottom: false,
                rightTop: false,
                leftTop: false,
            }),
        };
    }

    return {};
};

function Frame(props: FrameProps) {
    const { illuminator, type, size, ...rest } = props;
    const { FrameComponent, frameProps, frameClip } = createFrame(type, size);

    const bleeps = useBleeps();
    const svgRef = useRef<SVGSVGElement | null>(null);
    const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

    if (!!!props.children) {
        return (
            <Animated
                {...rest}
                style={{ clipPath: frameClip }}
                className={`relative ${props.className}`}
                onClick={() => {
                    if (props.as === "button") {
                        bleeps.click?.play();
                        props.onClick?.();
                    }
                }}
            />
        );
    }

    return (
        <Animated
            {...rest}
            style={{ clipPath: frameClip }}
            className={`relative ${props.className}`}
            onClick={() => {
                if (props.as === "button") {
                    bleeps.click?.play();
                    props.onClick?.();
                }
            }}
        >
            {FrameComponent && (
                <FrameComponent
                    {...frameProps}
                    elementRef={svgRef}
                    onRender={onRender}
                    style={{ zIndex: -1 }}
                >
                    {illuminator && (
                        <XIlluminatorSVG
                            color="hsl(180 50% 50% / 20%)"
                            size={illuminator}
                        />
                    )}
                </FrameComponent>
            )}
            {props.children}
        </Animated>
    );
}

export default function Component(props: FrameProps) {
    return (
        <Animator>
            <Frame {...props} className={`primary ${props.className}`} />
        </Animator>
    );
}
