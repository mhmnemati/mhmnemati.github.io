import Link from "next/link";
import Text from "@/components/Text";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faTwitter,
    faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function Page(props: { children: React.ReactNode }) {
    return (
        <footer
            className="flex flex-col justify-center text-center align-middle"
            style={{
                width: "100vw",
                height: "40vh",
                backgroundImage: "url(/images/footer.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <span>
                <Link
                    className="text-inherit m-4"
                    href="mailto:koliberr136a1@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href="https://www.linkedin.com/in/mohammad-hosein-nemati-665b1813b/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href="https://twitter.com/ckoliberr"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href="tel:+989377588105"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faPhone} size="2x" />
                </Link>
            </span>
            <br />
            <Text manager="decipher" easing="outSine" fixed>
                © Copyright 2021 KoLiBer • <FontAwesomeIcon icon={faReact} /> by
                KoLiBer
            </Text>
        </footer>
    );
}
