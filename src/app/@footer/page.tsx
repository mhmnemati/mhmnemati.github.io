import Text from "@/components/Text";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
    faSkype,
    faReact,
} from "@fortawesome/free-brands-svg-icons";

import about from "@/contents/about.yaml";

export default function Page(props: { children: React.ReactNode }) {
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
                    href={`mailto:${about.email}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={`https://www.linkedin.com/in/${about.linkedin}/`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={`https://github.com/${about.github}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={about.skype}
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
