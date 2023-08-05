import Link from "next/link";
import Frame from "@/components/Frame";
import Headroom from "@/components/Headroom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

export default function Page(props: { children: React.ReactNode }) {
    return (
        <header style={{ width: "100%", position: "fixed", zIndex: 5 }}>
            <Headroom>
                <Frame
                    frame="octagon"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <div>
                        <Link href="/menu" prefetch>
                            <Frame as="button" frame="octagon">
                                <FontAwesomeIcon icon={faHamburger} size="2x" />
                            </Frame>
                        </Link>
                    </div>
                    <div>
                        <Link href="/#home">
                            <Frame as="button" frame="corners">
                                Home
                            </Frame>
                        </Link>
                        <Link href="/#about">
                            <Frame as="button" frame="octagon">
                                About
                            </Frame>
                        </Link>
                        <Link href="/#resume">
                            <Frame as="button" frame="octagon">
                                Resume
                            </Frame>
                        </Link>
                        <Link href="/projects">
                            <Frame
                                as="button"
                                frame="nefrex"
                                className="m-2"
                                squareSize={12}
                            >
                                Projects
                            </Frame>
                        </Link>
                        <Link href="/books">
                            <Frame as="button" frame="octagon">
                                Books
                            </Frame>
                        </Link>
                        <Link href="/blog">
                            <Frame as="button" frame="octagon">
                                Blog
                            </Frame>
                        </Link>
                    </div>
                </Frame>
            </Headroom>
        </header>
    );
}
