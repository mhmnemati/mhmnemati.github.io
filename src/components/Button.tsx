"use client";

import Animated, { type AnimatedProps } from "./Animated";

export default function Component(props: AnimatedProps) {
    return (
        <Animated
            {...props}
            as="button"
            frame="lines"
            contentClass={`${props.contentClass} p-4`}
        />
    );
}
