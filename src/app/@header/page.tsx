import Animated from "@/components/Animated";
import Headroom from "@/components/Headroom";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Page(props: { children: React.ReactNode }) {
    return (
        <header className="w-full fixed z-10">
            <Headroom>
                <Animated
                    size="small"
                    type="underline"
                    color="primary"
                    illuminator={200}
                    contentClass="flex justify-between"
                >
                    <div>
                        <Modal
                            button={<FontAwesomeIcon icon={faBars} size="2x" />}
                            className="flex flex-col gap-y-2"
                        >
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
                        </Modal>
                    </div>
                    <div>
                        <Link href="/#home">
                            <Button type="octagon">Home</Button>
                        </Link>
                        <Link href="/#about">
                            <Button type="octagon">About</Button>
                        </Link>
                        <Link href="/#resume">
                            <Button type="octagon">Resume</Button>
                        </Link>
                        <Link href="/projects">
                            <Button type="octagon">Projects</Button>
                        </Link>
                        <Link href="/books">
                            <Button type="octagon">Books</Button>
                        </Link>
                        <Link href="/blog">
                            <Button type="octagon">Blog</Button>
                        </Link>
                    </div>
                </Animated>
            </Headroom>
        </header>
    );
}
