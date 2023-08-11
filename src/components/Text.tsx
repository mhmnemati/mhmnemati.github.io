"use client";

import { type TextProps, Text } from "@arwes/react";

export default function Component(props: TextProps) {
    return <Text {...props} className={`primary ${props.className}`} />;
}
