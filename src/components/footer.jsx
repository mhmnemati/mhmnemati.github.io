import React from "react";

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
    return (
        <footer
            style={{
                width: "100vw",
                height: "40vh",
                padding: 16,
                backgroundImage:
                    "url(https://www.roche.com/dam/jcr:d963dfee-877b-475b-b29e-47f421c99225/en/quantum-computing-1920.jpg)",
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
                    href="mailto:koliberr136s1@gmail.com"
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
                © Copyright 2021 KoLiBer • <FontAwesomeIcon icon={faReact} /> by
                Mohammad Hosein Nemati
            </Text>
        </footer>
    );
};

export default Component;
