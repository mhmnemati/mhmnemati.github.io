import Animator from "@/components/Animator";
import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

const research = [
    {
        date: "Feb 2023 -- Present",
        title: "Graduate Research Assistant",
        subtitle: "Department of Mathematics, Statistics and Computer Science",
        location: "University of Tehran",
        children: [
            "Deep learning based seizure detection from EEG and ECG signals using biosignal transformers and self-supervised learning methods  \nUnder the supervision of **Prof. Bagher Babaali**\n",
        ],
    },
];
const teaching = [
    {
        date: "Oct 2023 -- Feb 2024",
        title: "Machine Learning",
        subtitle: "Prof. Bagher Babaali",
        location: "University of Tehran",
        children: [
            "Teaching subjects and troubleshooting",
            "Organized homeworks for mentored students",
        ],
    },
    {
        date: "Feb 2019 -- Jun 2019",
        title: "Advanced Programming",
        subtitle: "Prof. Arash Ahadi",
        location: "Kharazmi University",
        children: [
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
        date: "Sep 2018 -- Jan 2019",
        title: "Basic Programming",
        subtitle: "Prof. Saeed Reza Kheradpisheh",
        location: "Kharazmi University",
        children: [
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
        date: "May 2022 -- Present (Full-time)",
        title: "Shipup.net",
        subtitle: "DevOps Engineer",
        location: "Tehran, Iran",
        children: [
            "Maintaining and refactoring old bare-metal infrastructure",
            "Designing and architecting new cloud-based infrastructure",
            "Performing zero downtime database migrations (logical replication)",
            "Automating full and differential and incremental backups (pgbackrest)",
            "Setting up Grafana monitoring stack (LGTM - Loki, Grafana, Tempo, Mimir, Agent)",
            "Writing Grafana dashboards and alerts using promQL, logQL",
            "Provisioning entire new infrastructure using Terraform (IaC)",
            "Managing multi-cloud resources for reducing the costs (Hetzner, AWS)",
            "Using GitOps principle for CD (Continuous Deployment)",
            "Writing Docker Swarm compose manifests",
            "Setting up CI/CD using GitlabCI, Docker",
        ],
    },
    {
        date: "Jul 2022 -- Jun 2023 (Part-time)",
        title: "University of Tehran",
        subtitle: "DevOps Engineer",
        location: "Tehran, Iran",
        children: [
            "Setting up HPC cluster using Slurm Workload Manager & Pyxis",
            "Setting up HPC containers (Nvidia Enroot, Nvidia Pyxis)",
            "Setting up Slurm accounting and quota management",
            "Provisioning entire cluster using Terraform (IaC)",
        ],
    },
    {
        date: "Mar 2022 -- Jun 2022 (Part-time)",
        title: "Pishgam Vira",
        subtitle: "DevOps Engineer",
        location: "Tehran, Iran",
        children: [
            "Implementing CI/CD for projects using GitHub Actions & Docker",
            "Provisioning deployment servers using Docker Swarm",
            "Automate release process using semantic-release",
        ],
    },
    {
        date: "Nov 2019 -- Jun 2022 (Full-time)",
        title: "Mobtaker Darya",
        subtitle: "Full-stack Developer & DevOps Engineer",
        location: "Tehran, Iran",
        children: [
            "Maintaining and developing CCS project (Container Control System)",
            "Implementing CCS reports using Crystal Reports and SQL Server",
            "Developing Shaahin project (Cargo trucks traffic control)",
            "Implementing Shaahin web client using React.js",
            "Implementing Shaahin backend using Loopback.io, NodeJs, TypeScript, PostgreSQL",
            "Implementing CI/CD for projects using GitlabCI & Docker",
            "Provisioning deployment servers using Kubernetes",
            "Writing Kubernetes manifests and packaging the in Helm Charts",
            "Managing and coding entire infrastructure using Terraform (IaC)",
        ],
    },
    {
        date: "Mar 2019 -- Oct 2019 (Part-time)",
        title: "TIS",
        subtitle: "Software Developer",
        location: "Tehran, Iran",
        children: [
            "Maintaining and refactoring MFD project (Managed-Funds System)",
            "Replacing Process360 with ProcessMaker as BPMS core",
            "Implementing new UI using React.js and TypeScript",
            "Implementing dynamic forms in client (Forms schema loaded from BPMS)",
        ],
    },
    {
        date: "Jun 2019 -- Sep 2019 (Part-time)",
        title: "Farmeal",
        subtitle: "React Developer",
        location: "Tehran, Iran",
        children: [
            "Implementing food-shopping UI using React.js and TypeScript",
            "Interacting with backend GraphQL API's using Apollo Client",
            "Implementing CI/CD for project using GitlabCI & Docker",
        ],
    },
    {
        date: "Dec 2013 -- Aug 2018",
        title: "Self Employed",
        subtitle: "Full-stack Developer",
        location: "Tehran, Iran",
        children: [
            "Socket programming in C & Erlang",
            "Implementing Hole Punching for P2P direct connections",
            "Implementing Desktop Chat Application using Qt, C++, QML",
            "Implementing Android Chat Application using Java, C (JNI), AndroidStudio",
            "Using FFMPEG to implement audio & video streaming using native API's and raw sockets",
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
