import React from "react";

import { useTranslation } from "gatsby-plugin-react-i18next";

import { Text } from "@arwes/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faTwitter,
    faReact,
} from "@fortawesome/free-brands-svg-icons";

import Icon from "./icon";

const Component = (props) => {
    const { t } = useTranslation("footer");

    return (
        <footer
            style={{
                width: "100vw",
                height: "40vh",
                padding: 16,
                backgroundImage: "url(/images/footer.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundFlip: "flip",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            <div>
                <Icon
                    margin={16}
                    icon={faEnvelope}
                    href="mailto:koliberr136a1@gmail.com"
                />
                <Icon
                    margin={16}
                    icon={faLinkedin}
                    href="https://www.linkedin.com/in/mohammad-hosein-nemati-665b1813b/"
                />
                <Icon
                    margin={16}
                    icon={faTwitter}
                    href="https://twitter.com/ckoliberr"
                />
                <Icon margin={16} icon={faPhone} href="tel:+989377588105" />
            </div>
            <br />
            <Text>
                © {t("copyright")} • <FontAwesomeIcon icon={faReact} />{" "}
                {t("author")}
            </Text>
        </footer>
    );
};

export default Component;
