import "./globals.css";
import type { Metadata } from "next";

import Headroom from "@/components/Headroom";
import Theme from "@/components/Theme";
import Frame from "@/components/Frame";
import Modal from "@/components/Modal";
import Text from "@/components/Text";
import Link from "next/link";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
    faSkype,
    faReact,
} from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
    metadataBase: new URL("https://ckoliber.com"),
    title: "KoLiBer",
    description: "KoLiBer personal website",
    icons: {
        icon: "/images/favicon.ico",
    },
    keywords: [
        "KoLiBer",
        "koliber",
        "ckoliber",
        "blog",
        "personal",
        "portfolio",
        "Mohammad Hosein Nemati",
        "computer science",
        "biology",
        "cloud",
    ],
    openGraph: {
        type: "website",
        title: "KoLiBer",
        description: "KoLiBer personal website",
    },
    twitter: {
        card: "summary",
        title: "KoLiBer",
        creator: "@ckoliber",
        description: "KoLiBer personal website",
    },
};

const links = [
    ["Home", "/#home"],
    ["About", "/#about"],
    ["Resume", "/#resume"],
    ["Experiences", "/experiences"],
    ["Projects", "/projects"],
    ["Library", "/library"],
    ["Blog", "/blog"],
];

function Header() {
    return (
        <header className="w-full fixed z-10">
            <Headroom>
                <Frame
                    size="small"
                    type="underline"
                    className="flex justify-start md:justify-end"
                >
                    <div className="block md:hidden">
                        <Modal
                            button={<FontAwesomeIcon icon={faBars} size="2x" />}
                            className="flex flex-col gap-y-2"
                        >
                            {links.map(([title, href]) => (
                                <Link key={title} href={href}>
                                    <Frame
                                        as="button"
                                        size="small"
                                        type="corners"
                                        className="w-full p-4"
                                    >
                                        {title}
                                    </Frame>
                                </Link>
                            ))}
                        </Modal>
                    </div>
                    <div className="hidden md:block">
                        {links.map(([title, href]) => (
                            <Link key={title} href={href}>
                                <Frame
                                    as="button"
                                    size="small"
                                    type="hftagon"
                                    className="m-2 px-4 py-2"
                                >
                                    {title}
                                </Frame>
                            </Link>
                        ))}
                    </div>
                </Frame>
            </Headroom>
        </header>
    );
}

function Footer() {
    return (
        <footer
            className="flex flex-col justify-center text-center align-middle"
            style={{
                width: "100%",
                height: "40vh",
                backgroundImage: "url(/images/footer.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <span>
                <Link
                    className="text-inherit m-4"
                    href={`mailto:ckoliber@gmail.com`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={`https://www.linkedin.com/in/ckoliber/`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={`https://github.com/ckoliber`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href="https://join.skype.com/invite/fsPMhjWNv1rf"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faSkype} size="2x" />
                </Link>
            </span>
            <br />
            <Text manager="decipher" easing="outSine">
                © Copyright 2021 KoLiBer • <FontAwesomeIcon icon={faReact} /> by
                KoLiBer
            </Text>
        </footer>
    );
}

export default function Layout(props: {
    children: React.ReactNode;
    header: React.ReactNode;
    footer: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body dir="ltr">
                <Theme>
                    <Header />
                    {props.children}
                    <Footer />
                    <div id="modal" />
                </Theme>
            </body>
        </html>
    );
}
