import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import type { GetStaticPropsContext } from "next";

import Link from "next/link";

import { Text, Button, Figure, FrameHexagon } from "@arwes/core";

import { Container, Row, Col } from "react-grid-system";

import MDRenderer from "react-markdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faTwitter,
    faGithub,
    faGitlab,
} from "@fortawesome/free-brands-svg-icons";

import Default from "layouts/Default";
import Break from "components/Break";
import getContents from "providers/contents";

function Hero(props: {}) {
    const { t } = useTranslation("common");

    return (
        <section
            id="home"
            style={{
                height: "100vh",
                padding: 16,
                backgroundImage: "url(/images/hero.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            <Text>
                <h1>{t("iam_title")}</h1>
            </Text>
            <Text>
                <b>{t("iam_caption")}</b>
            </Text>
            <br />
            <div style={{ marginTop: 16 }}>
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
                    href="https://github.com/ckoliber"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ margin: 16 }}
                        icon={faGithub}
                        size="2x"
                    />
                </a>
                <a
                    style={{ color: "inherit" }}
                    href="https://gitlab.com/ckoliber"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        style={{ margin: 16 }}
                        icon={faGitlab}
                        size="2x"
                    />
                </a>
            </div>
            <br />

            <Link href="/blog" style={{ marginTop: 32 }}>
                <Button
                    FrameComponent={FrameHexagon}
                    style={{
                        width: 150,
                        height: 50,
                    }}
                >
                    <Text>{t("goto_blog")}</Text>
                </Button>
            </Link>
        </section>
    );
}

interface ContentProps {
    title: string;
    items: {
        slug: string;
        data: {
            index: number;
            language: string;
            image_src?: string;
            image_alt?: string;
        };
        content: string;
    }[];
}

function Content(props: ContentProps) {
    console.log(props);
    return (
        <Container style={{ padding: "32px 16px" }}>
            <Row style={{ margin: "0 8px" }}>
                {props.title && (
                    <Text>
                        <h2>{props.title}</h2>
                    </Text>
                )}
            </Row>
            {props.items.map((item, index) => (
                <article key={item.slug}>
                    <Row>
                        {item.data.image_src && (
                            <Col md={12} lg={4}>
                                <Figure
                                    src={item.data.image_src}
                                    alt={item.data.image_alt}
                                    preload
                                    fluid
                                />
                            </Col>
                        )}
                        <Col
                            md={12}
                            lg={item.data.image_src ? 8 : 12}
                            style={{ marginBottom: 8 }}
                        >
                            <MDRenderer>{item.content}</MDRenderer>
                        </Col>
                    </Row>
                    {index < props.items.length - 1 && (
                        <hr style={{ margin: "32px 0" }} />
                    )}
                </article>
            ))}
        </Container>
    );
}

interface ComponentProps {
    about: any;
    educations: any;
    courses: any;
    works: any;
}

export default function Component(props: ComponentProps) {
    const { t } = useTranslation();

    console.log(props);

    return (
        <Default>
            <Hero />
            <section id="about">
                <Content title={t("about")} items={props.about} />
            </section>
            <section id="resume">
                <Break title={t("resume")} image="/images/break_resume.jpg" />
                <Content title={t("educations")} items={props.educations} />
                <hr />
                <Content title={t("courses")} items={props.courses} />
                <hr />
                <Content title={t("works")} items={props.works} />
            </section>
        </Default>
    );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
    return {
        props: {
            about: getContents(true, "about", ctx.locale || ""),
            educations: getContents(false, "educations", ctx.locale || ""),
            courses: getContents(false, "courses", ctx.locale || ""),
            works: getContents(false, "works", ctx.locale || ""),
        },
    };
}
