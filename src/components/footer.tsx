import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Text as UnsafeText } from "@arwes/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faTwitter,
    faReact,
} from "@fortawesome/free-brands-svg-icons";

const Text = UnsafeText as any;

interface Props {}

export default function Component(props: Props) {
    const router = useRouter();
    const { t } = useTranslation();

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
            <Text>
                © {t("copyright")} • <FontAwesomeIcon icon={faReact} />{" "}
                {t("author")}
            </Text>
        </footer>
    );
}
