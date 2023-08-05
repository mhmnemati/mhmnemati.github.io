import Link from "next/link";
import Text from "@/components/Text";
import Frame from "@/components/Frame";
import Modal from "@/components/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

export default function Page(props: { children: React.ReactNode }) {
    return (
        <Modal
            path="/menu"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Link href="/#home">
                <Frame as="button" frame="octagon" className="w-full">
                    Home
                </Frame>
            </Link>
            <Link href="/#about">
                <Frame as="button" frame="octagon" className="w-full">
                    About
                </Frame>
            </Link>
            <Link href="/#resume">
                <Frame as="button" frame="octagon" className="w-full">
                    Resume
                </Frame>
            </Link>
            <Link href="/projects">
                <Frame as="button" frame="octagon" className="w-full">
                    Projects
                </Frame>
            </Link>
            <Link href="/books">
                <Frame as="button" frame="octagon" className="w-full">
                    Books
                </Frame>
            </Link>
            <Link href="/blog">
                <Frame as="button" frame="octagon" className="w-full">
                    Blog
                </Frame>
            </Link>
        </Modal>
    );
}
