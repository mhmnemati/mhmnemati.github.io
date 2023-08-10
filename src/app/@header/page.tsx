import Animator from "@/components/Animator";
import Animated from "@/components/Animated";
import Headroom from "@/components/Headroom";
import Modal from "@/components/Modal";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const links = [
    ["Home", "/#home"],
    ["About", "/#about"],
    ["Resume", "/#resume"],
    ["Projects", "/projects"],
    ["Books", "/books"],
    ["Blog", "/blog"],
];

export default function Page(props: { children: React.ReactNode }) {
    return (
        <header className="w-full fixed z-10">
            <Headroom>
                <Animated
                    size="small"
                    type="underline"
                    color="primary"
                    contentClass="flex justify-start md:justify-end"
                >
                    <div className="block md:hidden">
                        <Modal
                            button={<FontAwesomeIcon icon={faBars} size="2x" />}
                            className="flex flex-col gap-y-2"
                        >
                            {links.map(([title, href]) => (
                                <Link key={title} href={href}>
                                    <Animator>
                                        <Animated
                                            as="button"
                                            size="small"
                                            type="corners"
                                            className="w-full"
                                            contentClass="p-4"
                                        >
                                            {title}
                                        </Animated>
                                    </Animator>
                                </Link>
                            ))}
                        </Modal>
                    </div>
                    <div className="hidden md:block">
                        {links.map(([title, href]) => (
                            <Link key={title} href={href}>
                                <Animated
                                    as="button"
                                    size="small"
                                    type="hftagon"
                                    className="m-2"
                                    contentClass="px-4 py-2"
                                >
                                    {title}
                                </Animated>
                            </Link>
                        ))}
                    </div>
                </Animated>
            </Headroom>
        </header>
    );
}
