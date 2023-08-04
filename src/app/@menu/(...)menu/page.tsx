import Link from "next/link";
import Text from "@/components/Text";
import Modal from "@/components/Modal";
import Button from "@/components/Button";

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
                <Button fullWidth>Home</Button>
            </Link>
            <Link href="/#about">
                <Button fullWidth>About</Button>
            </Link>
            <Link href="/#resume">
                <Button fullWidth>Resume</Button>
            </Link>
            <Link href="/projects">
                <Button fullWidth>Projects</Button>
            </Link>
            <Link href="/books">
                <Button fullWidth>Books</Button>
            </Link>
            <Link href="/blog">
                <Button fullWidth>Blog</Button>
            </Link>
        </Modal>
    );
}
