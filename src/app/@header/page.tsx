import Headroom from "@/components/Headroom";
import Frame from "@/components/Frame";
import Modal from "@/components/Modal";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const links = [
    ["Home", "/#home"],
    ["About", "/#about"],
    ["Resume", "/#resume"],
    ["Experiences", "/experiences"],
    ["Projects", "/projects"],
    ["Library", "/library"],
    ["Blog", "/blog"],
];

export default function Page(props: { children: React.ReactNode }) {
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
