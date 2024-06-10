import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

import Animator from "@/components/Animator";
import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Link from "next/link";

function Research() {
    return (
        <>
            <Text as="h2" className="warning">
                Research Experiences
            </Text>
            <Animator manager="sequence">
                <Card
                    date="Feb 2023 -- Present"
                    title="Graduate Research Assistant"
                    subtitle="Department of Mathematics, Statistics and Computer Science"
                    location="University of Tehran"
                >
                    <Text as="p">
                        Deep learning based seizure detection from EEG and ECG
                        signals using biosignal transformers and self-supervised
                        learning methods
                        <br />
                        Under the supervision of <b>Prof. Bagher Babaali</b>
                    </Text>
                </Card>
            </Animator>
        </>
    );
}

function Teaching() {
    return (
        <>
            <Text as="h2" className="warning">
                Teaching Experiences
            </Text>
            <Animator manager="sequence">
                <Card
                    date="Oct 2023 -- Feb 2024"
                    title="Machine Learning"
                    subtitle="Prof. Bagher Babaali"
                    location="University of Tehran"
                >
                    <ul>
                        <li>Teaching subjects and troubleshooting</li>
                        <li>Organized homeworks for mentored students</li>
                    </ul>
                </Card>
                <Card
                    date="Feb 2019 -- Jun 2019"
                    title="Advanced Programming"
                    subtitle="Prof. Arash Ahadi"
                    location="Kharazmi University"
                >
                    <ul>
                        <li>
                            Teaching memory management in C, Object-Oriented
                            paradigm in C (OOC)
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/ooc_lecture"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Teaching basics of computer graphics and OpenGL
                            programs in C
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/opengl"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Graded and provided homework feedback for mentored
                            students
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Sep 2018 -- Jan 2019"
                    title="Basic Programming"
                    subtitle="Prof. Saeed Reza Kheradpisheh"
                    location="Kharazmi University"
                >
                    <ul>
                        <li>
                            Teaching basic data-structures and algorithms in
                            Java
                        </li>
                        <li>
                            Organized homeworks for mentored students
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/Phy97Sources"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                    </ul>
                </Card>
            </Animator>
        </>
    );
}

function Work() {
    return (
        <>
            <Text as="h2" className="warning">
                Work Experiences
            </Text>
            <Animator manager="sequence">
                <Card
                    date="May 2022 -- Present (Full-time)"
                    title="Shipup.net"
                    subtitle="DevOps Engineer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Maintaining and refactoring old bare-metal
                            infrastructure
                        </li>
                        <li>
                            Designing and architecting new cloud-based
                            infrastructure
                        </li>
                        <li>
                            Performing zero downtime database migrations
                            (logical replication)
                        </li>
                        <li>
                            Automating full and differential and incremental
                            backups (pgbackrest)
                        </li>
                        <li>
                            Setting up Grafana monitoring stack (LGTM - Loki,
                            Grafana, Tempo, Mimir, Agent)
                        </li>
                        <li>
                            Writing Grafana dashboards and alerts using promQL,
                            logQL
                        </li>
                        <li>
                            Provisioning entire new infrastructure using
                            Terraform (IaC)
                        </li>
                        <li>
                            Managing multi-cloud resources for reducing the
                            costs (Hetzner, AWS)
                        </li>
                        <li>
                            Using GitOps principle for CD (Continuous
                            Deployment)
                        </li>
                        <li>Writing Docker Swarm compose manifests</li>
                        <li>Setting up CI/CD using GitlabCI, Docker</li>
                    </ul>
                </Card>
                <Card
                    date="Jul 2022 -- Jun 2023 (Part-time)"
                    title="University of Tehran"
                    subtitle="DevOps Engineer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Setting up HPC cluster using Slurm Workload Manager
                            & Pyxis
                        </li>
                        <li>
                            Setting up HPC containers (Nvidia Enroot, Nvidia
                            Pyxis)
                        </li>
                        <li>
                            Setting up Slurm accounting and quota management
                        </li>
                        <li>
                            Provisioning entire cluster using Terraform (IaC)
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Mar 2022 -- Jun 2022 (Part-time)"
                    title="Pishgam Vira"
                    subtitle="DevOps Engineer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Implementing CI/CD for projects using GitHub Actions
                            & Docker
                        </li>
                        <li>
                            Provisioning deployment servers using Docker Swarm
                        </li>
                        <li>Automate release process using semantic-release</li>
                    </ul>
                </Card>
                <Card
                    date="Nov 2019 -- Jun 2022 (Full-time)"
                    title="Mobtaker Darya"
                    subtitle="Full-stack Developer & DevOps Engineer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Maintaining and developing CCS project (Container
                            Control System)
                        </li>
                        <li>
                            Implementing CCS reports using Crystal Reports and
                            SQL Server
                        </li>
                        <li>
                            Developing Shaahin project (Cargo trucks traffic
                            control)
                        </li>
                        <li>Implementing Shaahin web client using React.js</li>
                        <li>
                            Implementing Shaahin backend using Loopback.io,
                            NodeJs, TypeScript, PostgreSQL
                        </li>
                        <li>
                            Implementing CI/CD for projects using GitlabCI &
                            Docker
                        </li>
                        <li>
                            Provisioning deployment servers using Kubernetes
                        </li>
                        <li>
                            Writing Kubernetes manifests and packaging the in
                            Helm Charts
                        </li>
                        <li>
                            Managing and coding entire infrastructure using
                            Terraform (IaC)
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Mar 2019 -- Oct 2019 (Part-time)"
                    title="TIS"
                    subtitle="Software Developer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Maintaining and refactoring MFD project
                            (Managed-Funds System)
                        </li>
                        <li>
                            Replacing Process360 with ProcessMaker as BPMS core
                        </li>
                        <li>
                            Implementing new UI using React.js and TypeScript
                        </li>
                        <li>
                            Implementing dynamic forms in client (Forms schema
                            loaded from BPMS)
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Jun 2019 -- Sep 2019 (Part-time)"
                    title="Farmeal"
                    subtitle="React Developer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Implementing food-shopping UI using React.js and
                            TypeScript
                        </li>
                        <li>
                            Interacting with backend GraphQL API&apos;s using
                            Apollo Client
                        </li>
                        <li>
                            Implementing CI/CD for project using GitlabCI &
                            Docker
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Dec 2013 -- Aug 2018"
                    title="Self Employed"
                    subtitle="Full-stack Developer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>Socket programming in C & Erlang</li>
                        <li>
                            Implementing Hole Punching for P2P direct
                            connections
                        </li>
                        <li>
                            Implementing Desktop Chat Application using Qt, C++,
                            QML
                        </li>
                        <li>
                            Implementing Android Chat Application using Java, C
                            (JNI), AndroidStudio
                        </li>
                        <li>
                            Using FFMPEG to implement audio & video streaming
                            using native API&apos;s and raw sockets
                        </li>
                    </ul>
                </Card>
            </Animator>
        </>
    );
}

export default function Page() {
    return (
        <>
            <Hero image="/images/break_projects.jpg" height="70vh">
                <Text as="h1">Experiences</Text>
            </Hero>
            <section
                id="research"
                className="flex flex-col items-center p-4 md:p-8"
            >
                <div className="container max-w-screen-xl">
                    <Research />
                </div>
            </section>
            <Frame as="hr" />
            <section
                id="teaching"
                className="flex flex-col items-center p-4 md:p-8"
            >
                <div className="container max-w-screen-xl">
                    <Teaching />
                </div>
            </section>
            <Frame as="hr" />
            <section
                id="work"
                className="flex flex-col items-center p-4 md:p-8"
            >
                <div className="container max-w-screen-xl">
                    <Work />
                </div>
            </section>
        </>
    );
}
