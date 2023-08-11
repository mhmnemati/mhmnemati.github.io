import Animator from "@/components/Animator";
import Animated from "@/components/Animated";
import Text from "@/components/Text";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
    faGitlab,
} from "@fortawesome/free-brands-svg-icons";

function Hero() {
    return (
        <section
            className="w-full h-screen flex flex-col justify-center text-center align-middle gap-8"
            style={{
                backgroundImage: "url(/images/hero.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <h1>I'm Mohammad Hosein Nemati</h1>
            <b>
                A computer science student and full stack developer who is
                mainly interested in modeling nature rules with computers
            </b>
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
                    href="https://github.com/ckoliber"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href="https://gitlab.com/ckoliber"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGitlab} size="2x" />
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
            <span>
                <Animator>
                    <Animated
                        as="button"
                        size="small"
                        type="hftagon"
                        color="primary"
                        className="mt-8 px-8 py-4"
                    >
                        Goto Blog
                    </Animated>
                </Animator>
            </span>
        </section>
    );
}

export default function Page(props: { children: React.ReactNode }) {
    return (
        <>
            <Hero />
            <Animated
                as="figure"
                size="medium"
                type="hftagon"
                className="w-64 h-64 p-1"
            >
                <img
                    src="/images/personal.jpg"
                    className="relative w-full h-full -z-10"
                />
            </Animated>
        </>
    );
}
