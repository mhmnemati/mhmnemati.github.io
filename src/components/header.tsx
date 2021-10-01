import React from "react";

import { useTranslation, useI18next, Link } from "gatsby-plugin-react-i18next";

import Headroom from "react-headroom";

import { Visible } from "react-grid-system";

import {
    FrameUnderline as FrameUnderlineUnsafe,
    Button,
    FrameBox,
    FrameHexagon,
    Text,
} from "@arwes/core";
const FrameUnderline = FrameUnderlineUnsafe as any;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

import Modal from "./modal";

const Component: React.FC<{}> = (props) => {
    const { t } = useTranslation("header");
    const { language, languages, changeLanguage } = useI18next();

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
                            <Button
                                FrameComponent={FrameBox}
                                onClick={() =>
                                    changeLanguage(
                                        languages
                                            .filter((lang) => lang !== language)
                                            .toString()
                                    )
                                }
                            >
                                {languages
                                    .filter((lang) => lang !== language)
                                    .toString()}
                            </Button>
                        </div>
                    </Visible>
                    <Visible lg xl xxl>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Button
                                FrameComponent={FrameBox}
                                onClick={() =>
                                    changeLanguage(
                                        languages
                                            .filter((lang) => lang !== language)
                                            .toString()
                                    )
                                }
                            >
                                {languages
                                    .filter((lang) => lang !== language)
                                    .toString()}
                            </Button>
                            <div>
                                <Link to="/#home">
                                    <Button FrameComponent={FrameHexagon}>
                                        <Text>{t("home")}</Text>
                                    </Button>
                                </Link>
                                <Link to="/#about">
                                    <Button FrameComponent={FrameHexagon}>
                                        <Text>{t("about")}</Text>
                                    </Button>
                                </Link>
                                <Link to="/#resume">
                                    <Button FrameComponent={FrameHexagon}>
                                        <Text>{t("resume")}</Text>
                                    </Button>
                                </Link>
                                <Link to="/projects">
                                    <Button FrameComponent={FrameHexagon}>
                                        <Text>{t("projects")}</Text>
                                    </Button>
                                </Link>
                                <Link to="/books">
                                    <Button FrameComponent={FrameHexagon}>
                                        <Text>{t("books")}</Text>
                                    </Button>
                                </Link>
                                <Link to="/blog">
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
                    <Link to="/#home" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>{t("home")}</Text>
                        </Button>
                    </Link>
                    <Link to="/#about" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>{t("about")}</Text>
                        </Button>
                    </Link>
                    <Link to="/#resume" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>{t("resume")}</Text>
                        </Button>
                    </Link>
                    <Link to="/projects" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>{t("projects")}</Text>
                        </Button>
                    </Link>
                    <Link to="/books" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>{t("books")}</Text>
                        </Button>
                    </Link>
                    <Link to="/blog" onClick={() => setOpen(false)}>
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
};

export default Component;
