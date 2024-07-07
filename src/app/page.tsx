import Animator from "@/components/Animator";
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
            <Text as="h1">I am Mohammad Hossein Nemati</Text>
            <Text as="b">
                a DevOps wizard constructing automated cloud infrastructures and
                MLOps pipelines to power intelligent systems
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
                                I am a passionate software engineer specializing
                                in programming, AI, DevOps, and MLOps,
                                constantly seeking ways to leverage these
                                disciplines to solve complex problems and create
                                innovative solutions. My journey in programming
                                began in 2013 with the development of an audio
                                and video messaging software called{" "}
                                <a
                                    href="https://github.com/ckoliber/cham"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    ChaM
                                </a>{" "}
                                (Chapar Messenger), which served as a guiding
                                compass, leading me through the intricate
                                branches of programming and networking.
                            </Text>
                            <br />
                            <Text as="p">
                                Throughout my career, I have worked on various
                                enterprise projects, sharpening my skills in
                                various languages and technologies. I have
                                contributed to notable projects such as the
                                ManagedFunds system at TIS, the CCS (Container
                                Control System) at Mobtaker Darya, and the
                                Shahin system, leveraging cutting-edge
                                technologies like React Native and Hasura.
                            </Text>
                            <br />
                            <Text as="p">
                                Alongside development, I have cultivated a deep
                                passion for DevOps and AI. As a Senior DevOps
                                Engineer at Visiwise and Smartech, I
                                revolutionized the companies&apos;
                                infrastructure and development practices. I
                                implemented CI/CD pipelines, Dockerized
                                applications, and embraced GitOps principles,
                                streamlining the development process and
                                enhancing the reliability and scalability of the
                                infrastructure. At Smartech, I managed a
                                large-scale infrastructure, implementing CI
                                pipelines across numerous repositories,
                                Dockerizing services, and establishing a GitOps
                                workflow using ArgoCD. I also initiated the
                                transition to Infrastructure as Code (IaC)
                                practices using Ansible and Terraform, laying
                                the foundation for more efficient and manageable
                                infrastructures.
                            </Text>
                            <br />
                            <Text as="p">
                                As a lifelong learner, I believe in the power of
                                No-Code and Low-Code technologies to accelerate
                                development and enable me to focus on
                                higher-level concepts. I am excited to
                                contribute my skills and knowledge to innovative
                                projects that push the boundaries of what is
                                possible, constantly seeking new challenges and
                                opportunities to grow.
                            </Text>
                            <br />
                            <Text as="p">
                                With a strong foundation in Full-Stack
                                development, a passion for AI and DevOps, and an
                                unwavering commitment to learning, I am eager to
                                collaborate with like-minded individuals who
                                share my vision of harnessing technology for the
                                betterment of society.
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
                            <li>DevOps and MLOps and Infrastructure as Code</li>
                            <li>Machine Learning and Deep Learning</li>
                            <li>Human Computer Interraction</li>
                        </ul>

                        <Text as="h3">Languages</Text>
                        <ul className="mb-4">
                            <li>
                                <b>Persian:</b> Native
                            </li>
                            <li>
                                <b>English:</b> Full professional proficiency
                            </li>
                            <li>
                                <b>Deutsch:</b> Elementary proficiency
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
                                    Mohammad Hossein Nemati
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
                title="M.Sc in Computer Science"
                subtitle="University of Tehran"
                location="Tehran, Iran"
            >
                <ul className="grid grid-cols-1">
                    <li className="w-full md:pr-8">
                        GPA: <b>17.74 / 20</b>
                    </li>
                    <li className="w-full md:pr-8">
                        Thesis: <b>Deep learning-based seizure detection</b>
                    </li>
                </ul>
                <Frame as="hr" className="my-2" />
                <Text as="h4" className="secondary">
                    Covered Courses
                </Text>
                <ul className="grid grid-cols-1">
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Digital Image Processing</b>
                            <i>17/20</i>
                        </div>
                    </li>
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Natural Language Processing</b>
                            <i>19.12/20</i>
                        </div>
                    </li>
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Advanced Computation Theory</b>
                            <i>18.5/20</i>
                        </div>
                    </li>
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Advanced Theory of Algorithms</b>
                            <i>14.75/20</i>
                        </div>
                    </li>
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Machine Learning</b>
                            <i>18.45/20</i>
                        </div>
                    </li>
                </ul>
            </Card>
            <Card
                logo="/images/kharazmi_university.jpg"
                date="Sep 2016 -- Jan 2021"
                title="B.Sc in Computer Science"
                subtitle="Kharazmi University"
                location="Tehran, Iran"
            >
                <ul className="grid grid-cols-1">
                    <li className="w-full md:pr-8">
                        Last two years GPA: <b>16.98 / 20</b>
                    </li>
                    <li className="w-full md:pr-8">
                        Total GPA: <b>16.12 / 20</b>
                    </li>
                </ul>
                <Frame as="hr" className="my-2" />
                <Text as="h4" className="secondary">
                    Selected Courses
                </Text>
                <ul className="grid grid-cols-1">
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
            </Card>
            <Card
                logo="/images/mandegar_alborz_highschool.jpg"
                date="Sep 2012 -- Aug 2016"
                title="Diploma of Mathematics and Physics"
                subtitle="Mandegar Alborz High School"
                location="Tehran, Iran"
            >
                <ul className="grid grid-cols-1">
                    <li className="w-full md:pr-8">
                        High school GPA: <b>18.59 / 20</b>
                    </li>
                    <li className="w-full md:pr-8">
                        Pre-university GPA: <b>18.03 / 20</b>
                    </li>
                </ul>
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
                            Cassandra/ScyllaDB, RabbitMQ, Kafka, Redis, Minio
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Container Orchestration</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            Docker, DockerSwarm, DockerCompose, Kubernetes (K3s,
                            RKE2, EKS), Helm, Nomad
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>High Performance Computing</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            Slurm, SunGridEngine, Rocks Cluster, Nvidia Enroot,
                            Nvidia Pyxis, Singularity
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Infrastructure & Cloud</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            Terraform, Ansible, Packer, ESXi, OpenStack, Hetzner
                            Cloud, Amazon Web Services
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Monitoring & Alerting</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            Grafana, GrafanaAgent, Promtail, Prometheus,
                            OpenTelemetry, Loki, Mimir, Tempo
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>CI/CD & Automation</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            DroneCI, GitlabCI, TravisCI, Github Actions, Azure
                            Pipelines, ArgoCD, GitOps
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

function Licenses() {
    return (
        <Animator manager="sequence">
            <Text as="h2" className="warning mb-4">
                Licenses & Certifications
            </Text>
            <Card
                logo="/assets/nbml.png"
                title="Brain Mapping Spring School"
                subtitle="National Brain Mapping Laboratory"
                date="Apr 2023"
            >
                <Text as="h4" className="secondary">
                    Covered Topics
                </Text>
                <ul className="grid grid-cols-1">
                    <li className="w-full md:pr-8">
                        Foundamentals of neuroscience, cognitive science and
                        brain mapping
                    </li>
                    <li className="w-full md:pr-8">
                        Introduction to anatomy and physiology of the brain
                    </li>
                    <li className="w-full md:pr-8">
                        Foundamentals of EEG, MRI, fNIRS, iTMS/TES, and
                        neurofeedback
                    </li>
                    <li className="w-full md:pr-8">
                        Introduction to virtual reality and eye tracking
                        technology
                    </li>
                    <li className="w-full md:pr-8">
                        Introduction to cognitive assessment and rehabilitation
                        tools
                    </li>
                    <li className="w-full md:pr-8">
                        Machine intelligence (application of artificial
                        intelligence in visual neuroscience)
                    </li>
                </ul>
            </Card>
            <Card
                logo="/assets/cka.png"
                title="Certified Kubernetes Administrator (CKA)"
                subtitle="Udemy"
                date="Oct 2020"
            >
                <Text as="h4" className="secondary">
                    Covered Topics
                </Text>
                <ul>
                    <li className="w-full md:pr-8">
                        <b>Core Concepts:</b> Cluster architecture, API
                        primitives, services, and networking
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Scheduling:</b> Labels, selectors, resource limits,
                        manual and automatic scheduling, taints, tolerations,
                        and node affinity
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Logging & Monitoring:</b> Monitoring cluster
                        components and managing application logs
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Application Lifecycle Management:</b> Rolling
                        updates, rollbacks, deployments, jobs, CronJobs,
                        ConfigMaps, Secrets, and multi-container pods
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Cluster Maintenance:</b> Cluster upgrades, operating
                        system upgrades, backup, and restore
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Security:</b> Authentication, authorization, TLS
                        certificates, network policies, security contexts, and
                        secure images
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Storage:</b> Persistent Volumes, Persistent Volume
                        Claims, storage classes, and applications with
                        persistent storage
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Networking:</b> Network primitives, pod networking,
                        CNI, service networking, and Ingress
                    </li>
                    <li className="w-full md:pr-8">
                        Installation, Configuration & Validation,
                        Troubleshooting
                    </li>
                </ul>
            </Card>
            <Card
                logo="/assets/ckad.png"
                title="Kubernetes Certified Application Developer (CKAD)"
                subtitle="Udemy"
                date="Aug 2020"
            >
                <Text as="h4" className="secondary">
                    Covered Topics
                </Text>
                <ul>
                    <li className="w-full md:pr-8">
                        <b>Core Concepts:</b> Cluster architecture, API
                        primitives, Pods, YAML, ReplicaSets, Deployments,
                        Namespaces, and imperative commands
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Configuration:</b> Configuring containers,
                        Multi-container pods, ConfigMaps, Secrets, resource
                        requirements, security contexts, and service accounts
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Observability:</b> Readiness and liveness probes,
                        container logging, and monitoring applications
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Pod Design:</b> Labels, selectors, annotations,
                        rolling updates, rollbacks, Jobs, and CronJobs
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Services & Networking:</b> Services, NetworkPolicies,
                        and Ingress
                    </li>
                    <li className="w-full md:pr-8">
                        <b>State Persistence:</b> Volumes, Persistent Volumes,
                        Persistent Volume Claims, and storage classes
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Security:</b> Authentication, authorization, RBAC,
                        cluster roles, role bindings, admission controllers, and
                        custom resource definitions
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Additional topics</b>: Helm fundamentals, Kubernetes
                        challenges, certification tips, lightning labs, and mock
                        exams
                    </li>
                </ul>
            </Card>
            <Card
                logo="/assets/swarm.png"
                title="Docker - SWARM - Hands-on - DevOps"
                subtitle="Udemy"
                date="Jun 2020"
            >
                <Text as="h4" className="secondary">
                    Covered Topics
                </Text>
                <ul>
                    <li className="w-full md:pr-8">
                        <b>Docker Compose:</b> In-depth concepts, Hands-on
                        exercises
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Docker Swarm:</b> Architecture and concepts, Setting
                        up a Swarm cluster, Managing services, discovery, and
                        load balancing
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Docker Stacks:</b> Deploying multi-service
                        applications, Placement constraints
                    </li>
                    <li className="w-full md:pr-8">
                        <b>CI/CD with Docker:</b> Integration and workflow,
                        Docker Registry setup and usage
                    </li>
                    <li className="w-full md:pr-8">
                        Advanced networking with overlay networks
                    </li>
                </ul>
            </Card>
            <Card
                logo="/assets/ccna.png"
                title="Cisco Certified Network Associate (CCNA)"
                subtitle="Tehran Institute of Technology"
                date="Nov 2016"
            >
                <Text as="h4" className="secondary">
                    Covered Topics
                </Text>
                <ul>
                    <li className="w-full md:pr-8">
                        <b>Network Fundamentals:</b> OSI and TCP/IP models, IP
                        addressing and subnetting, Network components (routers,
                        switches, etc.)
                    </li>

                    <li className="w-full md:pr-8">
                        <b>LAN Switching Technologies:</b> Ethernet and
                        switching concepts, VLANs and Inter-VLAN routing,
                        Spanning Tree Protocol (STP)
                    </li>

                    <li className="w-full md:pr-8">
                        <b>Routing Technologies:</b> IP routing concepts, Static
                        and dynamic routing, Routing protocols (RIPv2, EIGRP,
                        OSPF)
                    </li>

                    <li className="w-full md:pr-8">
                        <b>WAN Technologies:</b> WAN concepts and technologies,
                        Point-to-Point Protocol (PPP), Frame Relay
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Infrastructure Services:</b> Dynamic Host
                        Configuration Protocol (DHCP), Network Address
                        Translation (NAT), Network Time Protocol (NTP)
                    </li>

                    <li className="w-full md:pr-8">
                        <b>Infrastructure Maintenance:</b> Device management and
                        maintenance, IOS backup and restore, Network
                        troubleshooting
                    </li>
                    <li className="w-full md:pr-8">
                        <b>Infrastructure Security:</b> Access control lists
                        (ACLs), Device security features, Remote access (Telnet,
                        SSH)
                    </li>
                </ul>
            </Card>
        </Animator>
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
            <section className="flex flex-col items-center p-4 md:p-8">
                <div className="container max-w-screen-xl">
                    <Educations />
                    <Frame as="hr" className="my-8" />
                    <Honors />
                    <Frame as="hr" className="my-8" />
                    <Skills />
                    <Frame as="hr" className="my-8" />
                    <Licenses />
                </div>
            </section>
        </>
    );
}
