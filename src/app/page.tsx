import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
    faGitlab,
    faSkype,
} from "@fortawesome/free-brands-svg-icons";

import about from "@/contents/about.json";
import educations from "@/contents/educations.json";
import interests from "@/contents/interests.json";
import honors from "@/contents/honors.json";
import skills from "@/contents/skills.json";
import courses from "@/contents/courses.json";
import licenses from "@/contents/licenses.json";
import languages from "@/contents/languages.json";

function PHero() {
    return (
        <Hero id="home" image="/images/hero.jpg">
            <Text as="h1">I&apos;m {about.name}</Text>
            <Text as="b">{about.desc}</Text>
            <span>
                <Link
                    className="text-inherit m-4"
                    href={`mailto:${about.email}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={`https://www.linkedin.com/in/${about.linkedin}/`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={`https://github.com/${about.github}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={`https://gitlab.com/${about.gitlab}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGitlab} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={about.skype}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faSkype} size="2x" />
                </Link>
            </span>
            <span>
                <Link href="/blog">
                    <Frame
                        as="button"
                        size="small"
                        type="hftagon"
                        className="mt-8 px-8 py-4"
                    >
                        Goto Blog
                    </Frame>
                </Link>
            </span>
        </Hero>
    );
}

function About() {
    return (
        <section id="about" className="flex flex-col items-center p-8">
            <div className="container max-w-screen-xl">
                <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-3">
                        <Text as="h2">About</Text>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <Frame
                            as="figure"
                            size="medium"
                            type="corners"
                            className="w-100 h-100 p-2 aspect-square"
                        >
                            <Image
                                alt="Personal"
                                src="/images/personal.jpg"
                                width={1000}
                                height={1000}
                            />
                        </Frame>
                    </div>
                    <div className="col-span-3 md:col-span-2">
                        <Text as="h3">Who Am I</Text>
                        <span className="mb-2">
                            {about.summary.split("\n").map((text, idx) => (
                                <Text key={idx} as="p">
                                    {text}
                                </Text>
                            ))}
                        </span>
                        <Text as="h3">Contact Me</Text>
                        <div className="flex flwx-row justify-between">
                            <div>
                                <Link
                                    href={`https://www.linkedin.com/in/${about.linkedin}/`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        icon={faUser}
                                    />
                                    {about.name}
                                </Link>
                                <br />
                                <Link
                                    href={`mailto:${about.email}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        icon={faEnvelope}
                                    />
                                    {about.email}
                                </Link>
                                <br />
                                <Link
                                    href={about.skype}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        icon={faSkype}
                                    />
                                    skype
                                </Link>
                            </div>
                            <div>
                                <Frame
                                    as="button"
                                    size="small"
                                    type="hftagon"
                                    className="m-2 px-4 py-2"
                                >
                                    Download CV
                                </Frame>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Education() {
    return (
        <section className="flex flex-col items-center p-8">
            <div className="container max-w-screen-xl">
                <Text as="h2" className="warning">
                    Research Experiences
                </Text>
                {educations.map((item, index) => (
                    <Card key={index} {...(item as any)} />
                ))}
            </div>
        </section>
    );
}

function Interests() {
    return (
        <section className="flex flex-col items-center p-8">
            <div className="container max-w-screen-xl">
                <Text as="h2" className="warning">
                    Areas of Interest
                </Text>
                <ul>
                    {interests.map((item, index) => (
                        <Text key={index} as="li">
                            {item}
                        </Text>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function Honors() {
    return (
        <section className="flex flex-col items-center p-8">
            <div className="container max-w-screen-xl">
                <Text as="h2" className="warning">
                    Honors & Awards
                </Text>
                <ul>
                    {honors.map((item, index) => (
                        <Text key={index} as="li">
                            {item.title} {item.date}
                        </Text>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function Skills() {
    return (
        <section className="flex flex-col items-center p-8">
            <div className="container max-w-screen-xl">
                <Text as="h2" className="warning">
                    Technical Skills
                </Text>
                <ul>
                    {skills.map((item, index) => (
                        <Text key={index} as="li">
                            {item.title} {item.skills.join(" ")}
                        </Text>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function Courses() {
    return (
        <section className="flex flex-col items-center p-8">
            <div className="container max-w-screen-xl">
                <Text as="h2" className="warning">
                    Relevant Courses
                </Text>
                <ul>
                    {courses.map((item, index) => (
                        <Text key={index} as="li">
                            {item.title} {item.grade}
                        </Text>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function Licenses() {
    return (
        <section className="flex flex-col items-center p-8">
            <div className="container max-w-screen-xl">
                <Text as="h2" className="warning">
                    Licenses & Certifications
                </Text>
                {licenses.map((item, index) => (
                    <Card key={index} {...(item as any)} />
                ))}
            </div>
        </section>
    );
}

function Languages() {
    return (
        <section className="flex flex-col items-center p-8">
            <div className="container max-w-screen-xl">
                <Text as="h2" className="warning">
                    Languages
                </Text>
                <ul>
                    {languages.map((item, index) => (
                        <Text key={index} as="li">
                            {item.title} {item.description}
                        </Text>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default function Page() {
    return (
        <>
            <PHero />
            <About />
            <Hero id="resume" image="/images/break_resume.jpg" height="40vh">
                <Text as="h1">Resume</Text>
            </Hero>
            <Education />
            <Frame as="hr" />
            <Interests />
            <Frame as="hr" />
            <Honors />
            <Frame as="hr" />
            <Skills />
            <Frame as="hr" />
            <Courses />
            <Frame as="hr" />
            <Licenses />
            <Frame as="hr" />
            <Languages />
        </>
    );
}
