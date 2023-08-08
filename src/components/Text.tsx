"use client";

import Animator from "./Animator";
import { Text, type TextProps } from "@arwes/react";

export default function Component(props: TextProps) {
    return (
        <Animator>
            <Text {...props} />
        </Animator>
    );
}
