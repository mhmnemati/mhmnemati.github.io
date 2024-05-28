import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
    faGitlab,
    faSkype,
} from "@fortawesome/free-brands-svg-icons";

const educations = [
    {
        logo: "/images/tehran_university.jpg",
        title: "Master of Computer Science",
        subtitle: "University of Tehran",
        location: "Teharn, Iran",
        date: "Sep 2021 -- Aug 2024 (Expected)",
        items: [
            {
                text: "Thesis: Deep learning based seizure detection",
            },
            {
                text: "Total GPA: 3.82/4",
            },
        ],
    },
    {
        logo: "/images/kharazmi_university.jpg",
        title: "Bachelor of Computer Science",
        subtitle: "Kharazmi University",
        location: "Tehran, Iran",
        date: "Sep 2016 -- Jan 2021",
        items: [
            {
                text: "Last two years GPA: 3.46/4",
            },
            {
                text: "Total GPA: 3.12/4",
            },
        ],
    },
    {
        logo: "/images/mandegar_alborz_highschool.jpg",
        title: "Diploma of Mathematics",
        subtitle: "Mandegar Alborz High School",
        location: "Tehran, Iran",
        date: "Sep 2012 -- Aug 2016",
        items: [
            {
                text: "Total GPA: 4/4",
            },
        ],
    },
];
const licenses = [
    {
        logo: "/assets/nbml.png",
        title: "Brain Mapping Spring School",
        subtitle: "National Brain Mapping Laboratory",
        date: "Apr 2023",
    },
    {
        logo: "/assets/cka.png",
        title: "Certified Kubernetes Administrator (CKA)",
        subtitle: "Udemy",
        date: "Oct 2020",
    },
    {
        logo: "/assets/ckad.png",
        title: "Kubernetes Certified Application Developer (CKAD)",
        subtitle: "Udemy",
        date: "Aug 2020",
    },
    {
        logo: "/assets/swarm.png",
        title: "Docker - SWARM - Hands-on - DevOps",
        subtitle: "Udemy",
        date: "Jun 2020",
    },
    {
        logo: "/assets/ccna.png",
        title: "Cisco Certified Network Associate (CCNA)",
        subtitle: "Tehran Institute of Technology",
        date: "Nov 2016",
    },
];
const courses = [
    {
        title: "Digital Image Processing *",
        grade: "17/20",
    },
    {
        title: "Natural Language Processing *",
        grade: "19.12/20",
    },
    {
        title: "Advanced Computation Theory *",
        grade: "18.5/20",
    },
    {
        title: "Advanced Theory of Algorithms *",
        grade: "14.75/20",
    },
    {
        title: "Machine Learning *",
        grade: "18.45/20",
    },
    {
        title: "Artificial Intelligence",
        grade: "19.1/20",
    },
    {
        title: "Computer Graphics",
        grade: "20/20",
    },
    {
        title: "Principles of Operating Systems",
        grade: "20/20",
    },
    {
        title: "Principles of Computer Systems",
        grade: "20/20",
    },
    {
        title: "Principles of Logic and Set Theory",
        grade: "20/20",
    },
    {
        title: "Compiler",
        grade: "20/20",
    },
    {
        title: "Database",
        grade: "19/20",
    },
];
const skills = [
    {
        title: "Programming Languages",
        skills: [
            "C/C++",
            "C#",
            "Java",
            "JavaScript",
            "TypeScript",
            "Python",
            "MATLAB",
            "Erlang",
        ],
    },
    {
        title: "Client Development",
        skills: [
            "HTML/CSS",
            "TailwindCSS",
            "ReactJS",
            "ReactNative",
            "Android Studio",
            "ElectronJS",
            "Qt/QML (C++)",
        ],
    },
    {
        title: "Machine/Deep Learning",
        skills: [
            "NumPy",
            "OpenCV",
            "Pandas",
            "Seaborn",
            "Matplotlib",
            "PyTorch",
            "Tensorflow",
            "Huggingface",
            "Scikit-Learn",
        ],
    },
    {
        title: "Storage & Database",
        skills: [
            "PostgreSQL",
            "MSSQL",
            "MySQL",
            "SQLite",
            "MongoDB",
            "CouchBase",
            "Aerospike",
            "Cassandra/ScyllaDB",
            "RabbitMQ",
            "Redis",
            "Minio",
        ],
    },
    {
        title: "Container Orchestration",
        skills: [
            "Docker",
            "DockerSwarm",
            "DockerCompose",
            "Kubernetes",
            "Helm",
            "Nomad",
            "Vault",
            "K3s",
            "RKE",
            "EKS",
        ],
    },
    {
        title: "High Performance Computing",
        skills: [
            "Slurm",
            "HTCondor",
            "SunGridEngine",
            "Rocks Cluster",
            "Nvidia Enroot",
            "Nvidia Pyxis",
            "Singularity",
        ],
    },
    {
        title: "Networking & Loadbalancer",
        skills: [
            "Kong",
            "Nginx",
            "Traefik",
            "CoreDNS",
            "Envoy",
            "Consul",
            "Linkerd",
            "Cilium",
        ],
    },
    {
        title: "Infrastructure & Cloud",
        skills: [
            "Terraform",
            "Crossplane",
            "Packer",
            "GitOps",
            "ESXi",
            "OpenStack",
            "Hetzner Cloud",
            "Amazon Web Services",
        ],
    },
    {
        title: "Monitoring & Alerting",
        skills: [
            "Prometheus",
            "Grafana",
            "Grafana Agnet",
            "OpenTelemetry",
            "fluentd/fluentbit",
            "Loki",
            "Mimir",
            "Tempo",
            "Cortex",
        ],
    },
    {
        title: "CI/CD & Automation",
        skills: [
            "DroneCI",
            "GitlabCI",
            "TravisCI",
            "Github Actions",
            "Azure Pipelines",
            "ArgoCD",
        ],
    },
    {
        title: "LowCode & NoCode",
        skills: ["N8n", "Hasura", "Strapi", "ReactAdmin"],
    },
];

function Home() {
    return (
        <Hero id="home" image="/images/hero.jpg">
            <Text as="h1">I&apos;m Mohammad Hosein Nemati</Text>
            <Text as="b">
                A computer science student and full stack developer who is
                mainly interested in modeling nature rules with computers
            </Text>
            <span>
                <Link
                    className="text-inherit m-4"
                    href={`mailto:ckoliber@gmail.com`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={`https://www.linkedin.com/in/ckoliber/`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={`https://github.com/ckoliber`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href={`https://gitlab.com/ckoliber`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGitlab} size="2x" />
                </Link>
                <Link
                    className="text-inherit m-4"
                    href="https://join.skype.com/invite/fsPMhjWNv1rf"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faSkype} size="2x" />
                </Link>
            </span>
            <span>
                <Link href="/assets/CV.pdf" target="_blank">
                    <Frame
                        as="button"
                        size="small"
                        type="hftagon"
                        className="mt-8 px-8 py-4"
                    >
                        Download CV
                    </Frame>
                </Link>
            </span>
        </Hero>
    );
}

function About() {
    return (
        <section id="about" className="flex flex-col items-center p-4 md:p-8">
            <div className="container max-w-screen-xl">
                <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-3">
                        <Text as="h2">About</Text>
                        <span className="mb-4">
                            <Text as="p">
                                I am a Full-Stack developer and computer science
                                M.Sc. student, interested in cognitive science
                                and brain signals processing, and a true lover
                                of learning who has always sought more
                                experience. I entered the field of programming
                                in 2012, initially with the aim of implementing
                                audio and video messaging software, I started to
                                learn the concepts of networking and programming
                                languages, and the result of this goal was the
                                ChaM (Chapar Messenger) project and a world of
                                new experiences that It helped me find my career
                                path and focus on the backend field. After
                                learning and doing a few Full-Stack projects, I
                                gradually became familiar with serverless
                                architecture and Low-Code and No-Code
                                technologies, as well as the concepts of cloud
                                computing.
                            </Text>
                            <Text as="p">
                                Because in my view, programming is merely a tool
                                to serve humanity, I try to spend less time
                                programming with No-Code tools and instead spend
                                more time learning basic concepts like math,
                                logic, and AI.
                            </Text>
                        </span>
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
                        <Text as="h3">Interests</Text>
                        <ul className="mb-4">
                            <li>
                                High Performance Computing and Parallel
                                Processing
                            </li>
                            <li>
                                Artificial Intelligence and Machine Learning
                            </li>
                            <li>
                                Deep Learning and Artificial Neural Networks
                            </li>
                            <li>Natural Language Processing</li>
                            <li>Brain Signal Processing</li>
                        </ul>

                        <Text as="h3">Languages</Text>
                        <ul className="mb-4">
                            <li>
                                <b>Persian:</b> Native
                            </li>
                            <li>
                                <b>English:</b> Professional working proficiency
                            </li>
                        </ul>

                        <Text as="h3">Contact Me</Text>
                        <div className="flex flex-col md:flex-row justify-between md:items-center">
                            <div className="mb-4 md:mb-0">
                                <Link
                                    href={`https://www.linkedin.com/in/ckoliber/`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        icon={faLinkedin}
                                    />
                                    Mohammad Hosein Nemati
                                </Link>
                                <br />
                                <Link
                                    href={`mailto:ckoliber@gmail.com`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon
                                        className="mr-2"
                                        icon={faEnvelope}
                                    />
                                    ckoliber@gmail.com
                                </Link>
                                <br />
                                <Link
                                    href="https://join.skype.com/invite/fsPMhjWNv1rf"
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
                                <Link href="/assets/CV.pdf" target="_blank">
                                    <Frame
                                        as="button"
                                        size="small"
                                        type="hftagon"
                                        className="px-4 py-2"
                                    >
                                        Download CV
                                    </Frame>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Resume() {
    return (
        <section id="about" className="flex flex-col items-center p-4 md:p-8">
            <div className="container max-w-screen-xl">
                <Text as="h2" className="warning mb-4">
                    Educations
                </Text>
                {educations.map((item: any, index: number) => (
                    <Card key={index} {...item} />
                ))}

                <Frame as="hr" className="my-8" />

                <Text as="h2" className="warning mb-4">
                    Honors & Awards
                </Text>
                <ul>
                    <li>
                        <div className="flex flex-col md:flex-row md:justify-between">
                            <p className="text-start md:text-end mb-2 md:mb-0">
                                Ranked 18st in the Iranian university entrance
                                exam for the Master's Degree in Computer Science
                            </p>
                            <b>2021</b>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col md:flex-row md:justify-between">
                            <p className="text-start md:text-end mb-2 md:mb-0">
                                Ranked top 1% among more than 190,000 students
                                who participated in nationwide entrance
                                examination of undergraduate studies in Iranian
                                universities
                            </p>
                            <b>2016</b>
                        </div>
                    </li>
                </ul>

                <Frame as="hr" className="my-8" />

                <Text as="h2" className="warning mb-4">
                    Technical Skills
                </Text>
                <ul>
                    {skills.map((item: any, index: number) => (
                        <li key={index} className="w-full pr-8">
                            <div className="flex flex-col md:flex-row md:justify-between">
                                <b>{`${item.title}: `}</b>
                                <i className="text-start md:text-end mb-2 md:mb-0">
                                    {item.skills.join(", ")}
                                </i>
                            </div>
                        </li>
                    ))}
                </ul>

                <Frame as="hr" className="my-8" />

                <Text as="h2" className="warning">
                    Relevant Courses
                </Text>
                <Text as="blockquote" className="mb-4">
                    Graduate courses are indicated by *
                </Text>
                <ul className="grid grid-cols-1 md:grid-cols-2">
                    {courses.map((item: any, index: number) => (
                        <li key={index} className="w-full md:pr-8">
                            <div className="flex justify-between">
                                <b>{`${item.title}: `}</b>
                                <i>{item.grade}</i>
                            </div>
                        </li>
                    ))}
                </ul>

                <Frame as="hr" className="my-8" />

                <Text as="h2" className="warning mb-4">
                    Licenses & Certifications
                </Text>
                {licenses.map((item: any, index: number) => (
                    <Card key={index} {...item} />
                ))}
            </div>
        </section>
    );
}

export default function Page() {
    return (
        <>
            <Home />
            <About />
            <Hero id="resume" image="/images/break_resume.jpg" height="40vh">
                <Text as="h1">Resume</Text>
            </Hero>
            <Resume />
        </>
    );
}
