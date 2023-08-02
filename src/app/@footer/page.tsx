import Button from "@/components/Button";

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
            style={{
                width: "100vw",
                height: "40vh",
                padding: 16,
                backgroundImage: "url(/images/footer.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            <div>
                <a
                    style={{ color: "inherit" }}
                    href="mailto:koliberr136a1@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ margin: 16 }}
                        icon={faEnvelope}
                        size="2x"
                    />
                </a>
                <a
                    style={{ color: "inherit" }}
                    href="https://www.linkedin.com/in/mohammad-hosein-nemati-665b1813b/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ margin: 16 }}
                        icon={faLinkedin}
                        size="2x"
                    />
                </a>
                <a
                    style={{ color: "inherit" }}
                    href="https://twitter.com/ckoliberr"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ margin: 16 }}
                        icon={faTwitter}
                        size="2x"
                    />
                </a>
                <a
                    style={{ color: "inherit" }}
                    href="tel:+989377588105"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ margin: 16 }}
                        icon={faPhone}
                        size="2x"
                    />
                </a>
            </div>
            <br />
            <Animator duration={{ stagger: 2 }}>
                <Text manager="decipher" easing="outSine" fixed>
                    © Copyright 2021 KoLiBer •{" "}
                    <FontAwesomeIcon icon={faReact} /> by KoLiBer
                </Text>
            </Animator>
            <Animated as="button">
                <div>
                    <Illuminator
                        className={classes.frameHexagonIlluminator}
                        color="hsl(60 50% 90% / 8%)"
                        size={200}
                    />
                    <FrameSVGNefrex
                        squareSize={12}
                        leftBottom={false}
                        rightTop={false}
                    />
                </div>
                <FrameSVGNefrex style={{ width: 100, height: 100 }} />
                click
            </Animated>
        </footer>
    );
}
