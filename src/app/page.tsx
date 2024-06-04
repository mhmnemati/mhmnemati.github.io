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
                        <span className="mb-4 col-span-2">
                            <Text as="p">
                                My fascination with technology began in 2012
                                when I set out to build audio and video
                                messaging software. This ambitious goal led me
                                to dive into networking and programming
                                languages, culminating in my first major
                                project, ChaM (Chapar Messenger). More than just
                                a product, ChaM was my compass, guiding me
                                through the vast tech landscape and anchoring my
                                passion in backend development. As my skills
                                grew, so did my projects. I navigated through
                                full-stack development, serverless architecture,
                                and the innovative realms of Low-Code and
                                No-Code technologies. My exploration of cloud
                                computing further expanded my digital toolkit.
                            </Text>
                            <br />
                            <Text as="p">
                                Today, I stand at an exciting intersection:
                                <ul>
                                    <li>🎓 Computer Science M.Sc. student</li>
                                    <li>💻 Seasoned Full-Stack Developer</li>
                                    <li>
                                        🧠 Enthusiast in Cognitive Science &
                                        Brain Signal Processing
                                    </li>
                                </ul>
                            </Text>
                            <br />
                            <Text as="p">
                                But technology, to me, is more than lines of
                                code—it&apos;s a means to understand and enhance
                                humanity. This belief steers me toward No-Code
                                tools, not to work less, but to shift my focus.
                                By automating routine tasks, I free up time to
                                delve into the foundational concepts that truly
                                intrigue me: mathematics, logic, and artificial
                                intelligence. My current passion? Deciphering
                                the complex signals of the human brain. I
                                believe that by modeling cognitive processes, we
                                can create technology that&apos;s not just
                                smart, but truly understands us. It&apos;s a
                                challenge that marries my love for learning with
                                my tech expertise, pushing me to constantly seek
                                more knowledge and experience. Join me as I work
                                to bridge the gap between silicon and synapses,
                                crafting a future where technology doesn&apos;t
                                just serve humanity—it comprehends it.
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

function Educations() {
    return (
        <>
            <Text as="h2" className="warning mb-4">
                Educations
            </Text>
            <Card
                logo="/images/tehran_university.jpg"
                date="Sep 2021 -- Aug 2024 (Expected)"
                title="Master of Computer Science"
                subtitle="University of Tehran"
                location="Tehran, Iran"
            >
                {[
                    "Thesis: Deep learning based seizure detection",
                    "Total GPA: 3.82/4",
                ]}
            </Card>
            <Card
                logo="/images/kharazmi_university.jpg"
                date="Sep 2016 -- Jan 2021"
                title="Bachelor of Computer Science"
                subtitle="Kharazmi University"
                location="Tehran, Iran"
            >
                {["Last two years GPA: 3.46/4", "Total GPA: 3.12/4"]}
            </Card>
            <Card
                logo="/images/mandegar_alborz_highschool.jpg"
                date="Sep 2012 -- Aug 2016"
                title="Diploma of Mathematics"
                subtitle="Mandegar Alborz High School"
                location="Tehran, Iran"
            >
                {["Total GPA: 4/4"]}
            </Card>
        </>
    );
}

function Honors() {
    return (
        <>
            <Text as="h2" className="warning mb-4">
                Honors & Awards
            </Text>
            <ul>
                <li>
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <p className="text-start md:text-end mb-2 md:mb-0">
                            Ranked 18st in the Iranian university entrance exam
                            for the Master&apos;s Degree in Computer Science
                        </p>
                        <b>2021</b>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <p className="text-start md:text-end mb-2 md:mb-0">
                            Ranked top 1% among more than 190,000 students who
                            participated in nationwide entrance examination of
                            undergraduate studies in Iranian universities
                        </p>
                        <b>2016</b>
                    </div>
                </li>
            </ul>
        </>
    );
}

function Skills() {
    return (
        <>
            <Text as="h2" className="warning mb-4">
                Technical Skills
            </Text>
            <ul>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Programming Languages</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            C/C++, C#, Java, JavaScript, TypeScript, Python,
                            MATLAB, Erlang
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Client Development</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            HTML/CSS, TailwindCSS, ReactJS, ReactNative, Android
                            Studio, ElectronJS, Qt/QML (C++)
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Machine/Deep Learning</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            NumPy, OpenCV, Pandas, Seaborn, Matplotlib, PyTorch,
                            Tensorflow, Huggingface, Scikit-Learn
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Storage & Database</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            PostgreSQL, MSSQL, MySQL, SQLite, MongoDB,
                            CouchBase, Aerospike, Cassandra/ScyllaDB, RabbitMQ,
                            Redis, Minio
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Container Orchestration</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            Docker, DockerSwarm, DockerCompose, Kubernetes,
                            Helm, Nomad, Vault, K3s, RKE, EKS
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>High Performance Computing</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            Slurm, HTCondor, SunGridEngine, Rocks Cluster,
                            Nvidia Enroot, Nvidia Pyxis, Singularity
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Networking & Loadbalancer</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            Kong, Nginx, Traefik, CoreDNS, Envoy, Consul,
                            Linkerd, Cilium
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Infrastructure & Cloud</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            Terraform, Crossplane, Packer, GitOps, ESXi,
                            OpenStack, Hetzner Cloud, Amazon Web Services
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Monitoring & Alerting</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            Prometheus, Grafana, Grafana Agnet, OpenTelemetry,
                            fluentd/fluentbit, Loki, Mimir, Tempo, Cortex
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>CI/CD & Automation</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            DroneCI, GitlabCI, TravisCI, Github Actions, Azure
                            Pipelines, ArgoCD
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>LowCode & NoCode</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            N8n, Hasura, Strapi, ReactAdmin
                        </i>
                    </div>
                </li>
            </ul>
        </>
    );
}

function Courses() {
    return (
        <>
            <Text as="h2" className="warning">
                Relevant Courses
            </Text>
            <Text as="blockquote" className="mb-4">
                Graduate courses are indicated by *
            </Text>
            <ul className="grid grid-cols-1 md:grid-cols-2">
                <li className="w-full md:pr-8">
                    <div className="flex justify-between">
                        <b>Digital Image Processing *</b>
                        <i>17/20</i>
                    </div>
                </li>
                <li className="w-full md:pr-8">
                    <div className="flex justify-between">
                        <b>Natural Language Processing *</b>
                        <i>19.12/20</i>
                    </div>
                </li>
                <li className="w-full md:pr-8">
                    <div className="flex justify-between">
                        <b>Advanced Computation Theory *</b>
                        <i>18.5/20</i>
                    </div>
                </li>
                <li className="w-full md:pr-8">
                    <div className="flex justify-between">
                        <b>Advanced Theory of Algorithms *</b>
                        <i>14.75/20</i>
                    </div>
                </li>
                <li className="w-full md:pr-8">
                    <div className="flex justify-between">
                        <b>Machine Learning *</b>
                        <i>18.45/20</i>
                    </div>
                </li>
                <li className="w-full md:pr-8">
                    <div className="flex justify-between">
                        <b>Artificial Intelligence</b>
                        <i>19.1/20</i>
                    </div>
                </li>
                <li className="w-full md:pr-8">
                    <div className="flex justify-between">
                        <b>Computer Graphics</b>
                        <i>20/20</i>
                    </div>
                </li>
                <li className="w-full md:pr-8">
                    <div className="flex justify-between">
                        <b>Principles of Operating Systems</b>
                        <i>20/20</i>
                    </div>
                </li>
                <li className="w-full md:pr-8">
                    <div className="flex justify-between">
                        <b>Principles of Computer Systems</b>
                        <i>20/20</i>
                    </div>
                </li>
                <li className="w-full md:pr-8">
                    <div className="flex justify-between">
                        <b>Principles of Logic and Set Theory</b>
                        <i>20/20</i>
                    </div>
                </li>
                <li className="w-full md:pr-8">
                    <div className="flex justify-between">
                        <b>Compiler</b>
                        <i>20/20</i>
                    </div>
                </li>
                <li className="w-full md:pr-8">
                    <div className="flex justify-between">
                        <b>Database</b>
                        <i>19/20</i>
                    </div>
                </li>
            </ul>
        </>
    );
}

function Licenses() {
    return (
        <>
            <Text as="h2" className="warning mb-4">
                Licenses & Certifications
            </Text>
            <Card
                logo="/assets/nbml.png"
                title="Brain Mapping Spring School"
                subtitle="National Brain Mapping Laboratory"
                date="Apr 2023"
            />
            <Card
                logo="/assets/cka.png"
                title="Certified Kubernetes Administrator (CKA)"
                subtitle="Udemy"
                date="Oct 2020"
            />
            <Card
                logo="/assets/ckad.png"
                title="Kubernetes Certified Application Developer (CKAD)"
                subtitle="Udemy"
                date="Aug 2020"
            />
            <Card
                logo="/assets/swarm.png"
                title="Docker - SWARM - Hands-on - DevOps"
                subtitle="Udemy"
                date="Jun 2020"
            />
            <Card
                logo="/assets/ccna.png"
                title="Cisco Certified Network Associate (CCNA)"
                subtitle="Tehran Institute of Technology"
                date="Nov 2016"
            />
        </>
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
            <section
                id="about"
                className="flex flex-col items-center p-4 md:p-8"
            >
                <div className="container max-w-screen-xl">
                    <Educations />
                    <Frame as="hr" className="my-8" />
                    <Honors />
                    <Frame as="hr" className="my-8" />
                    <Skills />
                    <Frame as="hr" className="my-8" />
                    <Courses />
                    <Frame as="hr" className="my-8" />
                    <Licenses />
                </div>
            </section>
        </>
    );
}
