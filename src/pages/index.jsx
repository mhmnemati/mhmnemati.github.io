import React from "react";

import { Container, Row, Col } from "react-grid-system";

import { Text, Figure, Button, FrameHexagon } from "@arwes/core";

import { faEnvelope, faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faTwitter,
    faGithub,
    faGitlab,
} from "@fortawesome/free-brands-svg-icons";

import Layout from "../components/layout";
import Break from "../components/break";
import Icon from "../components/icon";

import Educations from "../components/contents/educations";
import Courses from "../components/contents/courses";
import Works from "../components/contents/works";

import Projects from "../components/contents/projects";
import Books from "../components/contents/books";

const Hero = () => (
    <Row
        id="home"
        style={{
            height: "100vh",
            padding: 16,
            backgroundImage: "url(/images/hero.jpg)",
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
        <Text>
            <h1>I'm Mohammad Hosein Nemati.</h1>
        </Text>
        <Text>
            <b>
                A computer science student and full stack developer who is
                mainly interested in modeling nature rules with computers
            </b>
        </Text>
        <br />
        <div style={{ marginTop: 16 }}>
            <Icon icon={faEnvelope} href="mailto:koliberr136a1@gmail.com" />
            <Icon
                icon={faLinkedin}
                href="https://www.linkedin.com/in/mohammad-hosein-nemati-665b1813b/"
            />
            <Icon icon={faTwitter} href="https://twitter.com/ckoliberr" />
            <Icon icon={faGithub} href="https://github.com/ckoliber" />
            <Icon icon={faGitlab} href="https://gitlab.com/ckoliber" />
        </div>
        <br />

        <a
            href="/blog"
            style={{
                marginTop: 32,
            }}
        >
            <Button
                FrameComponent={FrameHexagon}
                style={{
                    width: 150,
                    height: 50,
                }}
            >
                <Text>Goto Blog</Text>
            </Button>
        </a>
    </Row>
);

const About = () => (
    <section id="about">
        <Row style={{ margin: "32px 8px 32px 8px" }}>
            <Col md={12} lg={4}>
                <Figure
                    src={"/images/personal.jpg"}
                    alt="Mohammad Hosein"
                    preload
                    fluid
                />
            </Col>
            <Col md={12} lg={8}>
                <Text>
                    <h2 style={{ marginBottom: 8 }}>About Me</h2>
                    {/* <p style={{ marginTop: 8 }}>
                        من یک برنامه نویس Full-Stack و دانشجوی علوم کامپیوتر
                        هستم، علاقه‌مند به مباحث علوم شناختی و ژنتیک، یک عاشق
                        حقیقی یادگیری که همواره به دنبال کسب تجربه های بیشتر
                        بوده است. از سال ۲۰۱۲ به صورت تخصصی وارد حوزه برنامه
                        نویسی شدم، در ابتدا با هدف پیاده سازی یک نرم‌افزار
                        پیام‌رسان صوتی و تصویری شروع به آموختن مفاهیم شبکه و
                        سرور و زبان های برنامه نویسی کردم، حاصل این هدف پروژه
                        ChaM و دنیایی از تجربه‌های جدید بود که به من کمک کرد تا
                        مسیر حرفه ای خود را پیدا کنم و به طور تخصصی بر روی حوزه
                        Backend متمرکز شوم. پس از یادگیری و انجام چند پروژه
                        Full-Stack به تدریج با معماری های Serverless و تکنولوژی
                        های LowCode و NoCode و همچنین مفاهیم محاسبات ابری آشنا
                        شدم. از آنجا که از دیدگاه من برنامه نویسی صرفا ابزاری در
                        جهت خدمت به بشریت است، در تلاش هستم به کمک ابزار های
                        NoCode زمان کمتری را صرف برنامه نویسی بکنم و در عوض زمان
                        بیشتری را برای یادگیری مفاهیم پایه ای همچون ریاضیات،
                        منطق و ژنتیک صرف کنم.
                    </p> */}
                    <p style={{ marginTop: 8 }}>
                        I am a Full-Stack developer and computer science
                        student, interested in cognitive science and genetics, a
                        true lover of learning who has always sought more
                        experience. <br />
                        I entered the field of programming in 2012, initially
                        with the aim of implementing an audio and video
                        messaging software, I started to learn the concepts of
                        network and server and programming languages, the result
                        of this goal was the ChaM project and a world of new
                        experiences that It helped me find my career path and
                        focus on the Backend field. <br />
                        After learning and doing a few Full-Stack projects, I
                        gradually became familiar with Serverless architecture
                        and LowCode and NoCode technologies, as well as the
                        concepts of cloud computing. <br />
                        Because in my view programming is merely a tool to serve
                        humanity, I try to spend less time with programming by
                        using NoCode tools and instead spend more time for
                        learning basic concepts like math, logic and genetics.
                    </p>
                </Text>
                <div style={{ margin: "16px 0" }}>
                    <Text>
                        <h2>Contact Details</h2>
                    </Text>
                    <br />
                    <Container>
                        <Row>
                            <Col sm={12} md={6}>
                                <Text>
                                    <Icon
                                        margin={0}
                                        icon={faUser}
                                        href="https://www.linkedin.com/in/mohammad-hosein-nemati-665b1813b/"
                                        text="Mohammad Hosein Nemati"
                                    />
                                    <br />
                                    <Icon
                                        margin={0}
                                        icon={faEnvelope}
                                        href="mailto:koliberr136a1@gmail.com"
                                        text="koliberr136a1@gmail.com"
                                    />
                                    <br />
                                    <Icon
                                        margin={0}
                                        icon={faPhone}
                                        href="tel:+989377588105"
                                        text="+98-937-758-8105"
                                    />
                                </Text>
                            </Col>
                            <Col sm={12} md={6}>
                                <Button FrameComponent={FrameHexagon}>
                                    <a
                                        href="/assets/cv.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Text>Download CV</Text>
                                    </a>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Col>
        </Row>
    </section>
);

const Component = (props) => {
    return (
        <Layout>
            <Hero />
            <Row>
                <Container>
                    <About />
                </Container>
            </Row>
            <Break
                image="/images/break_resume.jpg"
                title="Resume"
                id="resume"
            />
            <Row>
                <Container>
                    <Educations />
                    <hr />
                    <Courses />
                    <hr />
                    <Works />
                </Container>
                ~
            </Row>
            <Break
                image="/images/break_projects.jpg"
                title="Projects & Books"
                id="projects"
            />
            <Row>
                <Container>
                    {/* <Projects />
                    <hr /> */}
                    <Books />
                </Container>
            </Row>
        </Layout>
    );
};

export default Component;
