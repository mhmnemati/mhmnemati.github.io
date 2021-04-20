import React from "react";

import { Text } from "@arwes/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faTwitter,
    faGithub,
    faGitlab,
} from "@fortawesome/free-brands-svg-icons";

import Layout from "../components/layout";
import Content from "../components/content";

const Component = (props) => {
    return (
        <Layout>
            <Content>
                <Text
                    animator={{ activate: true }}
                    as="h1"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    KoLiBer
                </Text>
                <hr />
                <Text animator={{ activate: true }} as="p">
                    <b>
                        A computer science student and full stack developer who
                        is mainly interested in modeling nature rules with
                        computers
                    </b>
                </Text>
                <hr />
                <div>
                    <a
                        style={{
                            color: "inherit",
                        }}
                        href="mailto:koliberr136s1@gmail.com"
                    >
                        <FontAwesomeIcon
                            style={{
                                margin: 5,
                            }}
                            icon={faEnvelope}
                            size="2x"
                        />
                    </a>
                    <a
                        style={{
                            color: "inherit",
                        }}
                        href="https://www.linkedin.com/in/mohammad-hosein-nemati-665b1813b/"
                    >
                        <FontAwesomeIcon
                            style={{
                                margin: 5,
                            }}
                            icon={faLinkedin}
                            size="2x"
                        />
                    </a>
                    <a
                        style={{
                            color: "inherit",
                        }}
                        href="https://twitter.com/KoLiBer40259644"
                    >
                        <FontAwesomeIcon
                            style={{
                                margin: 5,
                            }}
                            icon={faTwitter}
                            size="2x"
                        />
                    </a>
                    <a
                        style={{
                            color: "inherit",
                        }}
                        href="https://github.com/ckoliber"
                    >
                        <FontAwesomeIcon
                            style={{
                                margin: 5,
                            }}
                            icon={faGithub}
                            size="2x"
                        />
                    </a>
                    <a
                        style={{
                            color: "inherit",
                        }}
                        href="https://gitlab.com/ckoliber"
                    >
                        <FontAwesomeIcon
                            style={{
                                margin: 5,
                            }}
                            icon={faGitlab}
                            size="2x"
                        />
                    </a>
                </div>
            </Content>
        </Layout>
    );
};

export default Component;
