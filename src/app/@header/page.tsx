import Link from "next/link";
import Frame from "@/components/Frame";
import Button from "@/components/Button";
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
                            <Button>
                                <FontAwesomeIcon icon={faHamburger} size="2x" />
                            </Button>
                        </Link>
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
                </Frame>
            </Headroom>
        </header>
    );
}
