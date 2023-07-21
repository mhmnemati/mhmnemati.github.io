import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Link from "next/link";

import {
    Text as UnsafeText,
    Button as UnsafeButton,
    FrameHexagon as UnsafeFrameHexagon,
} from "@arwes/core";

import Default from "../layouts/Default";

const Text = UnsafeText as any;
const Button = UnsafeButton as any;
const FrameHexagon = UnsafeFrameHexagon as any;

export default function Component(props: {}) {
    const { t } = useTranslation();

    return (
        <Default>
            <section
                id="home"
                style={{
                    height: "100vh",
                    padding: 16,
                    backgroundImage: "url(/images/hero.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <Text>
                    <h1>{t("not_found")}</h1>
                </Text>
                <br />
                <Link href="/" style={{ marginTop: 32 }}>
                    <Button
                        FrameComponent={FrameHexagon}
                        style={{
                            width: 150,
                            height: 50,
                        }}
                    >
                        <Text>{t("goto_home")}</Text>
                    </Button>
                </Link>
            </section>
        </Default>
    );
}
