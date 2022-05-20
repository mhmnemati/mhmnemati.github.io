import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Link from "next/link";

import {
    Text as UnsafeText,
    Button as UnsafeButton,
    FrameBox as UnsafeFrameBox,
    FrameHexagon as UnsafeFrameHexagon,
    FrameUnderline as UnsafeFrameUnderline,
} from "@arwes/core";

import Headroom from "react-headroom";

import { Visible as UnsafeVisible } from "react-grid-system";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

import Modal from "components/Modal";

const Text = UnsafeText as any;
const Button = UnsafeButton as any;
const FrameBox = UnsafeFrameBox as any;
const FrameHexagon = UnsafeFrameHexagon as any;
const FrameUnderline = UnsafeFrameUnderline as any;

const Visible = UnsafeVisible as any;

interface Props {}

export default function Component(props: Props) {
    const router = useRouter();
    const { t } = useTranslation();

    const [open, setOpen] = React.useState(false);

    return (
        <header
            style={{
                width: "100%",
                position: "fixed",
                zIndex: 5,
            }}
        >
            <Headroom>
                <FrameUnderline
                    style={{
                        width: "100%",
                        backgroundColor: "#00000000",
                    }}
                >
                    <Visible xs sm md>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Button
                                FrameComponent={FrameBox}
                                onClick={() => setOpen(true)}
                            >
                                <FontAwesomeIcon icon={faHamburger} size="2x" />
                            </Button>
                            <Link
                                href="/#home"
                                locale={
                                    (router.locales || []).filter(
                                        (locale) => locale != router.locale
                                    )[0]
                                }
                            >
                                <Button FrameComponent={FrameBox}>
                                    {router.locale}
                                </Button>
                            </Link>
                        </div>
                    </Visible>
                    <Visible lg xl xxl>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Link
                                href="/#home"
                                locale={
                                    (router.locales || []).filter(
                                        (locale) => locale != router.locale
                                    )[0]
                                }
                            >
                                <Button FrameComponent={FrameBox}>
                                    {router.locale}
                                </Button>
                            </Link>
                            <div>
                                <Link href="/#home">
                                    <Button FrameComponent={FrameHexagon}>
                                        <Text>{t("home")}</Text>
                                    </Button>
                                </Link>
                                <Link href="/#about">
                                    <Button FrameComponent={FrameHexagon}>
                                        <Text>{t("about")}</Text>
                                    </Button>
                                </Link>
                                <Link href="/#resume">
                                    <Button FrameComponent={FrameHexagon}>
                                        <Text>{t("resume")}</Text>
                                    </Button>
                                </Link>
                                <Link href="/projects">
                                    <Button FrameComponent={FrameHexagon}>
                                        <Text>{t("projects")}</Text>
                                    </Button>
                                </Link>
                                <Link href="/books">
                                    <Button FrameComponent={FrameHexagon}>
                                        <Text>{t("books")}</Text>
                                    </Button>
                                </Link>
                                <Link href="/blog">
                                    <Button FrameComponent={FrameHexagon}>
                                        <Text>{t("blog")}</Text>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Visible>
                </FrameUnderline>
            </Headroom>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Link href="/#home" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>{t("home")}</Text>
                        </Button>
                    </Link>
                    <Link href="/#about" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>{t("about")}</Text>
                        </Button>
                    </Link>
                    <Link href="/#resume" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>{t("resume")}</Text>
                        </Button>
                    </Link>
                    <Link href="/projects" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>{t("projects")}</Text>
                        </Button>
                    </Link>
                    <Link href="/books" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>{t("books")}</Text>
                        </Button>
                    </Link>
                    <Link href="/blog" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>{t("blog")}</Text>
                        </Button>
                    </Link>
                </div>
            </Modal>
        </header>
    );
}
