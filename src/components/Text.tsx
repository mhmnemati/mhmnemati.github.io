"use client";

import { Animator, type TextProps, Text } from "@arwes/react";

export default function Component(props: TextProps) {
    return (
        <Animator>
            <Text {...props} className={`primary ${props.className}`} fixed />
        </Animator>
    );
}
