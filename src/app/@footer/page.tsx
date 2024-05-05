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
