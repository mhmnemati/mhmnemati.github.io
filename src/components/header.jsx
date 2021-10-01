import React from "react";

import { useTranslation } from "gatsby-plugin-react-i18next";

import Headroom from "react-headroom";

import { Visible } from "react-grid-system";

import {
    FrameUnderline,
    Button,
    FrameBox,
    FrameHexagon,
    Text,
} from "@arwes/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

import Modal from "./modal";

const Component = (props) => {
    const { t } = useTranslation("header");

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
                        display: "flex",
                        justifyContent: "right",
                        backgroundColor: "#00000000",
                    }}
                >
                    <Visible xs sm md>
                        <Button
                            FrameComponent={FrameBox}
                            onClick={() => setOpen(true)}
                        >
                            <FontAwesomeIcon icon={faHamburger} size="2x" />
                        </Button>
                    </Visible>
                    <Visible lg xl xxl>
                        <a href="/#home">
                            <Button FrameComponent={FrameHexagon}>
                                <Text>{t("home")}</Text>
                            </Button>
                        </a>
                        <a href="/#about">
                            <Button FrameComponent={FrameHexagon}>
                                <Text>{t("about")}</Text>
                            </Button>
                        </a>
                        <a href="/#resume">
                            <Button FrameComponent={FrameHexagon}>
                                <Text>{t("resume")}</Text>
                            </Button>
                        </a>
                        <a href="/#projects">
                            <Button FrameComponent={FrameHexagon}>
                                <Text>{t("projects")}</Text>
                            </Button>
                        </a>
                        <a href="/blog">
                            <Button FrameComponent={FrameHexagon}>
                                <Text>{t("blog")}</Text>
                            </Button>
                        </a>
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
                    <a href="/#home" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>{t("home")}</Text>
                        </Button>
                    </a>
                    <a href="/#about" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>{t("about")}</Text>
                        </Button>
                    </a>
                    <a href="/#resume" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>{t("resume")}</Text>
                        </Button>
                    </a>
                    <a href="/#projects" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>{t("projects")}</Text>
                        </Button>
                    </a>
                    <a href="/blog" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>{t("blog")}</Text>
                        </Button>
                    </a>
                </div>
            </Modal>
        </header>
    );
};

export default Component;
