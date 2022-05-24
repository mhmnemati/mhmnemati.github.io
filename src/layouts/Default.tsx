import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Link from "next/link";

import {
    Text,
    Button,
    FrameBox,
    FrameHexagon,
    FrameUnderline,
} from "@arwes/core";

import Headroom from "react-headroom";

import { Visible } from "react-grid-system";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHamburger,
    faEnvelope,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faTwitter,
    faReact,
} from "@fortawesome/free-brands-svg-icons";

import Modal from "components/Modal";

function Header(props: {}) {
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

function Footer(props: {}) {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <footer
            style={{
                width: "100vw",
                height: "40vh",
                padding: 16,
                backgroundImage: "url(/images/footer.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            <div>
                <a
                    style={{ color: "inherit" }}
                    href="mailto:koliberr136a1@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ margin: 16 }}
                        icon={faEnvelope}
                        size="2x"
                    />
                </a>
                <a
                    style={{ color: "inherit" }}
                    href="https://www.linkedin.com/in/mohammad-hosein-nemati-665b1813b/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ margin: 16 }}
                        icon={faLinkedin}
                        size="2x"
                    />
                </a>
                <a
                    style={{ color: "inherit" }}
                    href="https://twitter.com/ckoliberr"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ margin: 16 }}
                        icon={faTwitter}
                        size="2x"
                    />
                </a>
                <a
                    style={{ color: "inherit" }}
                    href="tel:+989377588105"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ margin: 16 }}
                        icon={faPhone}
                        size="2x"
                    />
                </a>
            </div>
            <br />
            <Text>
                © {t("copyright")} • <FontAwesomeIcon icon={faReact} />{" "}
                {t("author")}
            </Text>
        </footer>
    );
}

interface Props {
    children: any;
}

export default function Component(props: Props) {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <main>
            <Header />
            {props.children}
            <Footer />
        </main>
    );
}
