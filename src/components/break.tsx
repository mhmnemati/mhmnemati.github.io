import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Text as UnsafeText } from "@arwes/core";

const Text = UnsafeText as any;

interface Props {
    image: string;
    title: string;
}

export default function Component(props: Props) {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <section
            style={{
                height: "40vh",
                backgroundImage: `url(${props.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    padding: 16,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <Text>
                    <h2>{props.title}</h2>
                </Text>
            </div>
        </section>
    );
}
