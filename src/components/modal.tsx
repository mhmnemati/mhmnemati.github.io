import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Button, FrameBox } from "@arwes/core";

import Modal from "react-modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface Props {
    open: boolean;
    onClose: () => void;
    children: any;
}

export default function Component(props: Props) {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <Modal
            closeTimeoutMS={500}
            isOpen={props.open}
            onRequestClose={props.onClose}
            style={{
                overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 50,
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                },
                content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    // marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    minHeight: "50%",
                    maxHeight: "100vh",
                    border: "none",
                    overflowY: "scroll",
                    position: "relative",
                    WebkitOverflowScrolling: "touch",
                    background: "#151917",
                },
            }}
        >
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                }}
            >
                <Button FrameComponent={FrameBox} onClick={props.onClose}>
                    <FontAwesomeIcon icon={faTimes} size="2x" />
                </Button>
            </div>
            {props.children}
        </Modal>
    );
}
