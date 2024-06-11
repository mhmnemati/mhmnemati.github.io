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
            <Text id="research" as="h2" className="warning">
                Research Experiences
            </Text>
            <Animator manager="sequence">
                <Card
                    date="Feb 2023 -- Present"
                    title="Graduate Research Assistant"
                    subtitle="Department of Mathematics, Statistics and Computer Science"
                    location="University of Tehran"
                >
                    <b>Deep learning-based Seizure detection:</b> Utilizing
                    Graph Neural Networks (GNN) and Bio-signal transformers on
                    multi-channel EEG data to seizure detection
                    <br />
                    Under the supervision of <b>Prof. Bagher Babaali</b>
                </Card>
            </Animator>
        </>
    );
}

function Teaching() {
    return (
        <>
            <Text id="teaching" as="h2" className="warning">
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
            <Text id="work" as="h2" className="warning">
                Work Experiences
            </Text>
            <Animator manager="sequence">
                <Card
                    date="Feb 2024 -- June 2024 (Full-time)"
                    title="Smartech"
                    subtitle="Senior DevOps Engineer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Maintaining and monitoring large scale
                            infrastructure, about 500 virtuals-machines and
                            bare-metals, near 50TB of warm data
                        </li>
                        <li>
                            Maintaining and monitoring various services
                            (PostgreSQL, Elasticsearch, ClickHouse, ScyllaDB,
                            Kafka, Redis, Minio)
                        </li>
                        <li>
                            Standardize and refactor various types of projects
                            and implement CI/CD pipelines (Django, SpringBoot,
                            NPM, Android, ASP.Net, ...)
                        </li>
                        <li>
                            Write kubernetes manifests for various projects
                            (Deployment, ConfigMap, Secret, HPA, Ingress, ...)
                        </li>
                        <li>
                            Setting up ArgoCD for GitOps based deployment
                            process to kubernetes clusters
                        </li>
                        <li>
                            Writing Ansible roles and playbooks for deploying
                            and updating various services
                        </li>
                    </ul>
                </Card>
                <Card
                    date="May 2022 -- Present (Part-time)"
                    title="Visiwise.co"
                    subtitle="Senior DevOps Engineer"
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
                            (physical/logical replication)
                        </li>
                        <li>
                            Automating full and differential and incremental
                            backups (pgbackrest)
                        </li>
                        <li>
                            Setting up Grafana monitoring stack (LGTM - Loki,
                            Grafana, Tempo, Mimir, Alloy)
                        </li>
                        <li>
                            Setting up N8n, Strapi, Wordpress, Posthog, Sentry
                            self-hosted services
                        </li>
                        <li>
                            Writing Grafana dashboards and alerts using logQL,
                            promQL, traceQL
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
                            Implementing GitOps principle for CD (Continuous
                            Deployment)
                        </li>
                        <li>
                            Adapt source codes to the 12factor standard
                            (incorporate with developers)
                        </li>
                        <li>
                            Setting up MR review-apps (temporary environments)
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
                        <li>Monitoring and Management of jobs and queues</li>
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
                        <li>Implementing Shaahin web client using ReactJS</li>
                        <li>
                            Implementing Shaahin backend using Hasura,
                            PostgreSQL
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
                    subtitle="Full-stack Developer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Maintaining and refactoring MFD project
                            (Managed-Funds System)
                        </li>
                        <li>
                            Implementing backend API&apos;s using Loopback.io,
                            NodeJs, TypeScript, PostgreSQL
                        </li>
                        <li>
                            Replacing Process360 with ProcessMaker as BPMS core
                        </li>
                        <li>
                            Implementing new UI using ReactJS and TypeScript
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
                    subtitle="Frontend Developer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Implementing food-shopping UI using ReactJS and
                            MaterialUI and TypeScript
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
                            Utilizing Cassandra/ScyllaDB as Chat Application
                            core database
                        </li>
                        <li>
                            Implementing Desktop Chat Application using Qt/QML
                            (C++)
                        </li>
                        <li>
                            Implementing Android Chat Application using Java, C
                            (JNI), Android Studio
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
            <section className="flex flex-col items-center p-4 md:p-8">
                <div className="container max-w-screen-xl">
                    <Research />
                    <Frame as="hr" className="my-8" />
                    <Teaching />
                    <Frame as="hr" className="my-8" />
                    <Work />
                </div>
            </section>
        </>
    );
}
