import Link from "next/link";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import Headroom from "@/components/Headroom";
import Animator from "@/components/Animator";
import Animated from "@/components/Animated";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Page(props: { children: React.ReactNode }) {
    return (
        <header className="w-full fixed z-50">
            <Headroom>
                <Animated
                    frame="underline"
                    color="primary"
                    contentClass="flex justify-between"
                >
                    <div>
                        <Modal
                            button={<FontAwesomeIcon icon={faBars} size="2x" />}
                        >
                            <Animator manager="stagger">
                                <Link href="/#home">
                                    <Button className="w-full">Home</Button>
                                </Link>
                                <Link href="/#about">
                                    <Button className="w-full">About</Button>
                                </Link>
                                <Link href="/#resume">
                                    <Button className="w-full">Resume</Button>
                                </Link>
                                <Link href="/projects">
                                    <Button className="w-full">Projects</Button>
                                </Link>
                                <Link href="/books">
                                    <Button className="w-full">Books</Button>
                                </Link>
                                <Link href="/blog">
                                    <Button className="w-full">Blog</Button>
                                </Link>
                            </Animator>
                        </Modal>
                    </div>
                    <div>
                        <Link href="/#home">
                            <Button>Home</Button>
                        </Link>
                        <Link href="/#about">
                            <Button>About</Button>
                        </Link>
                        <Link href="/#resume">
                            <Button>Resume</Button>
                        </Link>
                        <Link href="/projects">
                            <Button>Projects</Button>
                        </Link>
                        <Link href="/books">
                            <Button>Books</Button>
                        </Link>
                        <Link href="/blog">
                            <Button>Blog</Button>
                        </Link>
                    </div>
                </Animated>
            </Headroom>
        </header>
    );
}
