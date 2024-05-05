import Animator from "@/components/Animator";
import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

const research = [
    {
        title: "Graduate Research Assistant",
        subtitle: "Department of Mathematics, Statistics and Computer Science",
        location: "University of Tehran",
        date: "Feb 2023 -- Present",
        items: [
            {
                text: "Deep learning based seizure detection from EEG and ECG signals using biosignal transformers and self-supervised learning methods  \nUnder the supervision of **Prof. Bagher Babaali**\n",
            },
        ],
    },
];
const teaching = [
    {
        title: "Machine Learning",
        subtitle: "Prof. Bagher Babaali",
        location: "University of Tehran",
        date: "Oct 2023 -- Feb 2024",
        items: [
            {
                text: "Teaching subjects and troubleshooting",
            },
            {
                text: "Organized homeworks for mentored students",
            },
        ],
    },
    {
        title: "Advanced Programming",
        subtitle: "Prof. Arash Ahadi",
        location: "Kharazmi University",
        date: "Feb 2019 -- Jun 2019",
        items: [
            {
                text: "Teaching memory management in C, Object-Oriented paradigm in C (OOC)",
                link: "https://github.com/ckoliber/ooc_lecture",
            },
            {
                text: "Teaching basics of computer graphics and OpenGL programs in C",
                link: "https://github.com/ckoliber/opengl",
            },
            {
                text: "Graded and provided homework feedback for mentored students",
            },
        ],
    },
    {
        title: "Basic Programming",
        subtitle: "Prof. Saeed Reza Kheradpisheh",
        location: "Kharazmi University",
        date: "Sep 2018 -- Jan 2019",
        items: [
            {
                text: "Teaching basic data-structures and algorithms in Java",
            },
            {
                text: "Organized homeworks for mentored students",
                link: "https://github.com/ckoliber/Phy97Sources",
            },
        ],
    },
];
const work = [
    {
        title: "Shipup.net",
        subtitle: "DevOps Engineer",
        location: "Tehran, Iran",
        date: "May 2022 -- Present (Full-time)",
        items: [
            {
                text: "Maintaining and refactoring old bare-metal infrastructure",
            },
            {
                text: "Designing and architecting new cloud-based infrastructure",
            },
            {
                text: "Performing zero downtime database migrations (logical replication)",
            },
            {
                text: "Automating full and differential and incremental backups (pgbackrest)",
            },
            {
                text: "Setting up Grafana monitoring stack (LGTM - Loki, Grafana, Tempo, Mimir, Agent)",
            },
            {
                text: "Writing Grafana dashboards and alerts using promQL, logQL",
            },
            {
                text: "Provisioning entire new infrastructure using Terraform (IaC)",
            },
            {
                text: "Managing multi-cloud resources for reducing the costs (Hetzner, AWS)",
            },
            {
                text: "Using GitOps principle for CD (Continuous Deployment)",
            },
            {
                text: "Writing Docker Swarm compose manifests",
            },
            {
                text: "Setting up CI/CD using GitlabCI, Docker",
            },
        ],
    },
    {
        title: "University of Tehran",
        subtitle: "DevOps Engineer",
        location: "Tehran, Iran",
        date: "Jul 2022 -- Jun 2023 (Part-time)",
        items: [
            {
                text: "Setting up HPC cluster using Slurm Workload Manager & Pyxis",
            },
            {
                text: "Setting up HPC containers (Nvidia Enroot, Nvidia Pyxis)",
            },
            {
                text: "Setting up Slurm accounting and quota management",
            },
            {
                text: "Provisioning entire cluster using Terraform (IaC)",
            },
        ],
    },
    {
        title: "Pishgam Vira",
        subtitle: "DevOps Engineer",
        location: "Tehran, Iran",
        date: "Mar 2022 -- Jun 2022 (Part-time)",
        items: [
            {
                text: "Implementing CI/CD for projects using GitHub Actions & Docker",
            },
            {
                text: "Provisioning deployment servers using Docker Swarm",
            },
            {
                text: "Automate release process using semantic-release",
            },
        ],
    },
    {
        title: "Mobtaker Darya",
        subtitle: "Full-stack Developer & DevOps Engineer",
        location: "Tehran, Iran",
        date: "Nov 2019 -- Jun 2022 (Full-time)",
        items: [
            {
                text: "Maintaining and developing CCS project (Container Control System)",
            },
            {
                text: "Implementing CCS reports using Crystal Reports and SQL Server",
            },
            {
                text: "Developing Shaahin project (Cargo trucks traffic control)",
            },
            {
                text: "Implementing Shaahin web client using React.js",
            },
            {
                text: "Implementing Shaahin backend using Loopback.io, NodeJs, TypeScript, PostgreSQL",
            },
            {
                text: "Implementing CI/CD for projects using GitlabCI & Docker",
            },
            {
                text: "Provisioning deployment servers using Kubernetes",
            },
            {
                text: "Writing Kubernetes manifests and packaging the in Helm Charts",
            },
            {
                text: "Managing and coding entire infrastructure using Terraform (IaC)",
            },
        ],
    },
    {
        title: "TIS",
        subtitle: "Software Developer",
        location: "Tehran, Iran",
        date: "Mar 2019 -- Oct 2019 (Part-time)",
        items: [
            {
                text: "Maintaining and refactoring MFD project (Managed-Funds System)",
            },
            {
                text: "Replacing Process360 with ProcessMaker as BPMS core",
            },
            {
                text: "Implementing new UI using React.js and TypeScript",
            },
            {
                text: "Implementing dynamic forms in client (Forms schema loaded from BPMS)",
            },
        ],
    },
    {
        title: "Farmeal",
        subtitle: "React Developer",
        location: "Tehran, Iran",
        date: "Jun 2019 -- Sep 2019 (Part-time)",
        items: [
            {
                text: "Implementing food-shopping UI using React.js and TypeScript",
            },
            {
                text: "Interacting with backend GraphQL API's using Apollo Client",
            },
            {
                text: "Implementing CI/CD for project using GitlabCI & Docker",
            },
        ],
    },
    {
        title: "Self Employed",
        subtitle: "Full-stack Developer",
        location: "Tehran, Iran",
        date: "Dec 2013 -- Aug 2018",
        items: [
            {
                text: "Socket programming in C & Erlang",
            },
            {
                text: "Implementing Hole Punching for P2P direct connections",
            },
            {
                text: "Implementing Desktop Chat Application using Qt, C++, QML",
            },
            {
                text: "Implementing Android Chat Application using Java, C (JNI), AndroidStudio",
            },
            {
                text: "Using FFMPEG to implement audio & video streaming using native API's and raw sockets",
            },
        ],
    },
];

export default function Page() {
    return (
        <>
            <Hero image="/images/break_projects.jpg" height="70vh">
                <Text as="h1">Experiences</Text>
            </Hero>
            <section className="flex flex-col items-center p-4 md:p-8">
                <div className="container max-w-screen-xl">
                    <Text as="h2" className="warning">
                        Research Experiences
                    </Text>
                    <Animator manager="sequence">
                        {research.map((item: any, idx: number) => (
                            <Card key={idx} {...item} />
                        ))}
                    </Animator>
                </div>
            </section>
            <Frame as="hr" />
            <section className="flex flex-col items-center p-4 md:p-8">
                <div className="container max-w-screen-xl">
                    <Text as="h2" className="warning">
                        Teaching Experiences
                    </Text>
                    <Animator manager="sequence">
                        {teaching.map((item: any, idx: number) => (
                            <Card key={idx} {...item} />
                        ))}
                    </Animator>
                </div>
            </section>
            <Frame as="hr" />
            <section className="flex flex-col items-center p-4 md:p-8">
                <div className="container max-w-screen-xl">
                    <Text as="h2" className="warning">
                        Work Experiences
                    </Text>
                    <Animator manager="sequence">
                        {work.map((item: any, idx: number) => (
                            <Card key={idx} {...item} />
                        ))}
                    </Animator>
                </div>
            </section>
        </>
    );
}
