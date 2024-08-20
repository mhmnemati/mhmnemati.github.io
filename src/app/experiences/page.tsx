import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

import Animator from "@/components/Animator";
import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Link from "next/link";

function Work() {
    return (
        <>
            <Text id="work" as="h2" className="warning">
                Work Experiences
            </Text>
            <Animator manager="sequence">
                <Card
                    date="May 2022 -- Present"
                    title="Visiwise.co"
                    subtitle="Senior DevOps Engineer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Refactored codebases across 5+ projects and set up
                            CI pipelines, reducing deployment times by 30%
                        </li>
                        <li>
                            Migrated 10+ services to Docker Swarm cluster on
                            Hetzner Cloud, improving resource efficiency by 25%
                        </li>
                        <li>
                            Clustered PostgreSQL and automated backups, ensuring
                            100% data integrity during zero-downtime migration
                        </li>
                        <li>
                            Automated infrastructure provisioning with Terraform
                            and Ansible across 5+ environments
                        </li>
                        <li>
                            Deployed 5+ self-hosted services, reducing
                            third-party dependencies by 40%
                        </li>
                        <li>
                            Established monitoring with Grafana stack, improving
                            incident response by 80% with 10+ custom dashboards
                        </li>
                        <li>
                            Standardized CI/CD pipelines, reducing build times
                            to under 1 minute across 10+ repositories
                        </li>
                        <li>
                            Managed multi-cloud setup (Hetzner & AWS), cutting
                            operational costs by 20%
                        </li>
                        <li>
                            Implemented dynamic environments, boosting developer
                            productivity by 35%
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Feb 2024 -- June 2024"
                    title="Smartech"
                    subtitle="Senior DevOps Engineer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Standardized CI/CD templates across 50+
                            repositories, reducing deployment times by 40%
                        </li>
                        <li>
                            Configured auto-scaling Kubernetes clusters with
                            Terraform for 10+ Event Processor apps, optimizing
                            Kafka load handling
                        </li>
                        <li>
                            Developed Kubernetes manifests for 20+ projects and
                            automated deployment of 40+ services via ArgoCD
                        </li>
                        <li>
                            Automated server management with Ansible for 50+
                            servers, including Firewall, User Management, and
                            Minio clusters
                        </li>
                        <li>
                            Managed 500+ VMs and 50TB+ of warm data across
                            services like Elasticsearch, ScyllaDB, and Kafka
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Jul 2022 -- Jun 2023"
                    title="University of Tehran"
                    subtitle="DevOps Engineer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Provisioned a 20+ node HPC cluster using Terraform
                            and Ansible; set up Slurm with Singularity and
                            Nvidia Enroot
                        </li>
                        <li>
                            Optimized GPU workloads for 10+ researchers by
                            integrating Nvidia Enroot with Slurm via Nvidia
                            Pyxis
                        </li>
                        <li>
                            Managed permissions and quotas for 200+ users and
                            created 5+ resource-specific queues for jobs
                        </li>
                        <li>
                            Deployed a Grafana monitoring stack, improving
                            resource utilization by 30%
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Mar 2022 -- Jun 2022"
                    title="Pishgam Vira"
                    subtitle="DevOps Engineer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Provisioned Docker Swarm clusters and database
                            servers with Ansible across 3+ environments
                        </li>
                        <li>
                            Wrote Docker Compose manifests for streamlined
                            deployments
                        </li>
                        <li>
                            Set up CI/CD pipelines for 5+ repositories using
                            GitHub Actions
                        </li>
                        <li>Automated versioning with semantic-release</li>
                    </ul>
                </Card>
                <Card
                    date="Nov 2019 -- Jun 2022"
                    title="Mobtaker Darya"
                    subtitle="Full-stack Developer & DevOps Engineer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Maintained and developed the CCS project, generating
                            50+ reports with Crystal Reports and SQL Server
                        </li>
                        <li>
                            Developed the Shaahin project with a ReactJS
                            frontend and Hasura/PostgreSQL backend
                        </li>
                        <li>
                            Implemented CI/CD pipelines using GitLab CI and
                            Docker
                        </li>
                        <li>
                            Provisioned servers with Kubernetes, writing
                            manifests and packaging them in Helm Charts
                        </li>
                        <li>
                            Managed infrastructure using Terraform and Ansible
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Mar 2019 -- Oct 2019"
                    title="Tolou Yekta Samaneh"
                    subtitle="Full-stack Developer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Maintained and refactored the Managed-Funds System
                            (MFD), implementing backend APIs with Loopback.io,
                            Node.js, TypeScript, and PostgreSQL
                        </li>
                        <li>
                            Replaced Process360 with ProcessMaker as the BPMS
                            core and developed a new UI using ReactJS and
                            TypeScript
                        </li>
                        <li>
                            Implemented dynamic forms in the client with schema
                            integration from BPMS
                        </li>
                        <li>
                            Developed a food-shopping UI for the Farmeal project
                            using ReactJS, MaterialUI, and TypeScript, and
                            integrated with backend GraphQL APIs using Apollo
                            Client
                        </li>
                        <li>
                            Set up CI/CD pipelines using GitLab CI and Docker
                            for ManagedFunds and Farmeal projects
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Dec 2013 -- Aug 2018"
                    title="ChaM (Chapar Messenger)"
                    subtitle="Founder & Lead Developer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Designed and developed an audio/video messaging
                            platform using C, Erlang, and Java
                        </li>
                        <li>
                            Implemented P2P connections and used
                            Cassandra/ScyllaDB for chat data management
                        </li>
                        <li>
                            Created a desktop client with Qt/QML (C++) and an
                            Android app with Java and JNI
                        </li>
                        <li>
                            Integrated FFMPEG for audio/video streaming with
                            native APIs
                        </li>
                        <li>
                            Managed full-stack development, including server
                            infrastructure and client interfaces
                        </li>
                    </ul>
                </Card>
            </Animator>
        </>
    );
}

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
                    <b>Advisor:</b> Prof. Bagher Babaali
                    <ul>
                        <li>
                            Researching deep learning-based seizure detection
                            with GNNs and bio-signal transformers
                        </li>
                        <li>
                            Implemented the model using PyTorch, PyTorch
                            Geometric, and PyTorch Lightning
                        </li>
                        <li>Used Captum for model interpretability</li>
                        <li>Monitored metrics with TensorBoard</li>
                    </ul>
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
                        <li>
                            Assisted in teaching machine learning topics and
                            troubleshooting student issues
                        </li>
                        <li>
                            Organized and managed homework assignments for
                            mentored students
                        </li>
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
                            Taught memory management in C and Object-Oriented
                            programming in C (OOC){" "}
                            <Link
                                className="ml-2"
                                href="https://github.com/mhmnemati/ooc_lecture"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Instructed students on the basics of computer
                            graphics and OpenGL programming in C{" "}
                            <Link
                                className="ml-2"
                                href="https://github.com/mhmnemati/opengl"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Graded assignments and provided feedback to students
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
                            Taught basic data structures and algorithms in Java
                        </li>
                        <li>
                            Organized and managed homework assignments for
                            students
                            <Link
                                className="ml-2"
                                href="https://github.com/mhmnemati/Phy97Sources"
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

export default function Page() {
    return (
        <>
            <Hero image="/images/break_projects.jpg" height="70vh">
                <Text as="h1">Experiences</Text>
            </Hero>
            <section className="flex flex-col items-center p-4 md:p-8">
                <div className="container max-w-screen-xl">
                    <Work />
                    <Frame as="hr" className="my-8" />
                    <Research />
                    <Frame as="hr" className="my-8" />
                    <Teaching />
                </div>
            </section>
        </>
    );
}
