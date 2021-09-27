import React from "react";

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
                                <Text>Home</Text>
                            </Button>
                        </a>
                        <a href="/#about">
                            <Button FrameComponent={FrameHexagon}>
                                <Text>About</Text>
                            </Button>
                        </a>
                        <a href="/#resume">
                            <Button FrameComponent={FrameHexagon}>
                                <Text>Resume</Text>
                            </Button>
                        </a>
                        <a href="/#projects">
                            <Button FrameComponent={FrameHexagon}>
                                <Text>Projects</Text>
                            </Button>
                        </a>
                        <a href="/blog">
                            <Button FrameComponent={FrameHexagon}>
                                <Text>Blog</Text>
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
                            <Text>Home</Text>
                        </Button>
                    </a>
                    <a href="/#about" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>About</Text>
                        </Button>
                    </a>
                    <a href="/#resume" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>Resume</Text>
                        </Button>
                    </a>
                    <a href="/#projects" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>Projects</Text>
                        </Button>
                    </a>
                    <a href="/blog" onClick={() => setOpen(false)}>
                        <Button
                            FrameComponent={FrameHexagon}
                            style={{ width: "100%" }}
                        >
                            <Text>Blog</Text>
                        </Button>
                    </a>
                </div>
            </Modal>
        </header>
    );
};

export default Component;
