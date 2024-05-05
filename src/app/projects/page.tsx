import Animator from "@/components/Animator";
import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

const notable = [
    {
        link: "https://github.com/ckoliber/nlpexercises",
        title: "Natural Language Processing",
        subtitle: "Prof. Bagher Babaali",
        location: "",
        date: "Fall 2022",
        items: [
            {
                text: "Training N-Gram Language Model on Hamshahri v2 dataset (Persian Newspaper) using NLTK",
                link: "https://github.com/ckoliber/nlpexercises/blob/main/src/exercise1.ipynb",
            },
            {
                text: "Implementation of Hidden-Markov-Model from scratch in python (Baum Welch Algorithm, Viterbi Algorithm)",
                link: "https://github.com/ckoliber/nlpexercises/blob/main/src/hmm/hmm.py",
            },
            {
                text: "Part-of-Speech Tagging using Hidden-Markov-Model",
                link: "https://github.com/ckoliber/nlpexercises/blob/main/src/exercise3.ipynb",
            },
            {
                text: "Applying TF-IDF and LSA for Text Classification on Persica dataset",
                link: "https://github.com/ckoliber/nlpexercises/blob/main/src/exercise4.ipynb",
            },
            {
                text: "Text Classification on Persica dataset using ParsBERT",
                link: "https://github.com/ckoliber/nlpexercises/blob/main/src/exercise5.ipynb",
            },
            {
                text: "Part-of-Speech Tagging on Persian dataset using ParsBERT",
                link: "https://github.com/ckoliber/nlpexercises/blob/main/src/exercise6.ipynb",
            },
        ],
    },
    {
        link: "https://github.com/ckoliber/dipexercises",
        title: "Digital Image Processing",
        subtitle: "Prof. Hedieh Sajedi",
        location: "",
        date: "Fall 2022",
        items: [
            {
                text: "Applying Geometrical Operation, Histogram Equalization, Filtering in Spacial and Frequency domain, and Morphological Operation using OpenCV",
                link: "https://github.com/ckoliber/dipexercises/blob/main/src/exercise1.ipynb",
            },
            {
                text: "Blast Cell Image Classification into Normal and Abnormal using a CNN Model",
                link: "https://github.com/ckoliber/dipexercises/blob/main/src/exercise2.ipynb",
            },
            {
                text: "CIFAR10 Classification using a Nested-Hierarchical Transformer (NesT)",
                link: "https://github.com/ckoliber/dipexercises/blob/main/src/project.ipynb",
            },
        ],
    },
    {
        link: "https://github.com/ckoliber/mlexercises",
        title: "Machine Learning",
        subtitle: "Prof. Bagher Babaali & Prof. Hedieh Sajedi",
        location: "",
        date: "Fall 2022",
        items: [
            {
                text: "Implementation of perceptron from scratch using Python and NumPy and applying it on Polynomial Regression problem",
                link: "https://github.com/ckoliber/mlexercises/blob/master/src/exercise1.ipynb",
            },
            {
                text: "Training perceptron for Money Classification into Real and Fake classes",
                link: "https://github.com/ckoliber/mlexercises/blob/master/src/exercise2.ipynb",
            },
            {
                text: "Implementation of Linear-Discriminant-Analysis using Python and NumPy and applying it to reducing dimension and visualizing data",
                link: "https://github.com/ckoliber/mlexercises/blob/master/src/exercise3.ipynb",
            },
            {
                text: "Implementation of Principal-Component-Analysis using Python and NumPy and applying it to Face Image dataset compression and reconstruction",
                link: "https://github.com/ckoliber/mlexercises/blob/master/src/exercise4.ipynb",
            },
            {
                text: "Applying Logistic Regression for a binary classification task on Income dataset",
                link: "https://github.com/ckoliber/mlexercises/blob/master/src/exercise5.ipynb",
            },
            {
                text: "Applying K-Means clustering method on dataset and visualizing clusters",
                link: "https://github.com/ckoliber/mlexercises/blob/master/src/exercise6.ipynb",
            },
            {
                text: "Activity Recognition using Wearable Physiological Signal Features using Decision Tree, Random Forest, XGBoost, and SVM Classifiers",
                link: "https://github.com/ckoliber/mlexercises/blob/master/src/exercise1_1.ipynb",
            },
            {
                text: "Parkinson's Disease Detection using Speech Signal Features using Decision Tree, Random Forest, XGBoost, SVM, MLP, ELM, and Autoencoder",
                link: "https://github.com/ckoliber/mlexercises/blob/master/src/exercise2_1.ipynb",
            },
            {
                text: "Heart Disease Prediction from Health Indicators using Decision Tree, Random Forest, XGBoost, SVM, MLP, ELM, and Autoencoder",
                link: "https://github.com/ckoliber/mlexercises/blob/master/src/project.ipynb",
            },
        ],
    },
    {
        link: "https://github.com/ckoliber/actexercises",
        title: "Advanced Computation Theory",
        subtitle: "Prof. Majid Alizadeh",
        location: "",
        date: "Fall 2022",
        items: [
            {
                text: "Implementation of Davis Language interpreter in python",
                link: "https://github.com/ckoliber/actexercises/blob/master/projects/interpreter.py",
            },
            {
                text: "Implementation of Davis Language encoder and decoder for Universal Programs",
                link: "https://github.com/ckoliber/actexercises/blob/master/projects/encoder.py",
            },
        ],
    },
    {
        title: "Operation Systems",
        subtitle: "Prof. Saeed Reza Kheradpisheh",
        location: "",
        date: "Fall 2020",
        items: [
            {
                text: "Implementation of Cross Platform Async Socket Server (TCP, UDP) in C",
                link: "https://github.com/ckoliber/Knet",
            },
            {
                text: "Implementation of Thread Pool and Process Pool design patterns in C using pthread library",
                link: "https://github.com/ckoliber/Kprocessor",
            },
            {
                text: "Implementation of Cross Platform IPC Tools (Semaphores, Shared Memories, Message Queues) in C",
                link: "https://github.com/ckoliber/Kipc",
            },
        ],
    },
    {
        title: "Compiler Design",
        subtitle: "Prof. Somaye Arabi",
        location: "",
        date: "Fall 2020",
        items: [
            {
                text: "C Language JSON parser and packer library",
                link: "https://github.com/ckoliber/Kson",
            },
            {
                text: "Mini C Language compiler using Lex and Yacc",
                link: "https://github.com/ckoliber/minicc",
            },
        ],
    },
    {
        title: "Data Structures and Algorithms",
        subtitle: "Prof. Somaye Arabi",
        location: "",
        date: "Fall 2020",
        items: [
            {
                text: "Postfix and Prefix parser using Java",
                link: "https://github.com/ckoliber/XFixToYFix",
            },
            {
                text: "TypeScript Memoization library (NPM package)",
                link: "https://github.com/ckoliber/memoizor",
            },
            {
                text: "Huffman Compressor desktop application using C++, Qt, QML",
                link: "https://github.com/ckoliber/kuffman",
            },
            {
                text: "Implementation of Basic Data Structures (ArrayList, LinkedList, Stack, Queue, Deque) in C",
                link: "https://github.com/ckoliber/kstd",
            },
        ],
    },
    {
        title: "Advanced Programming",
        subtitle: "Prof. Keivan Borna",
        location: "",
        date: "Fall 2020",
        items: [
            {
                text: "Implementation of 2048 Game in Java",
                link: "https://github.com/ckoliber/2048",
            },
            {
                text: "Implementation of Maze Game in Java",
                link: "https://github.com/ckoliber/Maze",
            },
            {
                text: "Implementation of Library Manager using Java, JavaFX",
                link: "https://github.com/ckoliber/LibraryManager",
            },
            {
                text: "Implementation of Govara Assets Manager using C++, Qt, QML",
                link: "https://github.com/ckoliber/govara",
            },
        ],
    },
];
const published = [
    {
        link: "https://github.com/cktf",
        title: "Terraform Community Modules",
        subtitle: "Open Source",
        location: "",
        date: "",
        items: [
            {
                text: "[**terraform-module-rke**](https://github.com/cktf/terraform-module-rke): Terraform module for Provisioning HA Kubernetes clusters using K3s and RKE2 on hosts using SSH, WinRM",
                link: "https://github.com/cktf/terraform-module-rke",
            },
            {
                text: "[**terraform-aws-wireguard**](https://github.com/cktf/terraform-aws-wireguard): Terraform module for Provisioning Wireguard VPN instance and manage users on AWS cloud",
                link: "https://github.com/cktf/terraform-aws-wireguard",
            },
            {
                text: "[**terraform-hcloud-rke**](https://github.com/cktf/terraform-hcloud-rke): Terraform module for Provisioning HA Kubernetes clusters using K3s and RKE2 on Hetzner cloud",
                link: "https://github.com/cktf/terraform-hcloud-rke",
            },
            {
                text: "[**terraform-hcloud-network**](https://github.com/cktf/terraform-hcloud-network): Terraform module for Creating and Managing Network, Subnet on Hetzner cloud",
                link: "https://github.com/cktf/terraform-hcloud-network",
            },
            {
                text: "[**terraform-hcloud-wireguard**](https://github.com/cktf/terraform-hcloud-wireguard): Terraform module for Provisioning Wireguard VPN instance and manage Users on Hetzner cloud",
                link: "https://github.com/cktf/terraform-hcloud-wireguard",
            },
            {
                text: "[**terraform-openstack-rke**](https://github.com/cktf/terraform-openstack-rke): Terraform module for Provisioning HA Kubernetes clusters using K3s and RKE2 on OpenStack cloud",
                link: "https://github.com/cktf/terraform-openstack-rke",
            },
            {
                text: "[**terraform-openstack-network**](https://github.com/cktf/terraform-openstack-network): Terraform module for Creating and Managing Network, Subnet, Routes on OpenStack cloud",
                link: "https://github.com/cktf/terraform-openstack-network",
            },
            {
                text: "[**terraform-kubernetes-x509**](https://github.com/cktf/terraform-kubernetes-x509): Terraform module for Creating and Managing X.509 Certificate and RoleBinding on Kubernetes",
                link: "https://github.com/cktf/terraform-kubernetes-x509",
            },
            {
                text: "[**terraform-kubernetes-environment**](https://github.com/cktf/terraform-kubernetes-environment): Terraform module for Creating and Managing isolated environments on Kubernetes",
                link: "https://github.com/cktf/terraform-kubernetes-environment",
            },
            {
                text: "[**terraform-gitlab-application**](https://github.com/cktf/terraform-gitlab-application): Terraform module for Creating and Managing Groups, Projects and default organization policies on Gitlab",
                link: "https://github.com/cktf/terraform-gitlab-application",
            },
            {
                text: "[**terraform-gitlab-environment**](https://github.com/cktf/terraform-gitlab-environment): Terraform module for Creating and Managing Environments for Projects on Gitlab",
                link: "https://github.com/cktf/terraform-gitlab-environment",
            },
            {
                text: "[**windows-cloud-image**](https://github.com/ckoliber/windows-cloud-image): Packer configs to create Windows Cloud Image uisng VirtualBox and QEMU",
                link: "https://github.com/ckoliber/windows-cloud-image",
            },
        ],
    },
    {
        link: "https://github.com/loopback4",
        title: "Loopback4 Community Components",
        subtitle: "Open Source",
        location: "",
        date: "",
        items: [
            {
                text: "[**loopback-component-crud**](https://github.com/loopback4/loopback-component-crud): Generating CRUD endpoints from Model supports AuthZ, Nested-Create, Nested-Update",
                link: "https://github.com/loopback4/loopback-component-crud",
            },
            {
                text: "[**loopback-component-filter**](https://github.com/loopback4/loopback-component-filter): Filtering Model records based on user permissions in ORM Repository level",
                link: "https://github.com/loopback4/loopback-component-filter",
            },
            {
                text: "[**loopback-component-history**](https://github.com/loopback4/loopback-component-history): Adding Soft-Delete and Soft-Update functionality in ORM Repository level",
                link: "https://github.com/loopback4/loopback-component-history",
            },
            {
                text: "[**loopback-component-cascade**](https://github.com/loopback4/loopback-component-cascade): Adding Cascade functionality to models in ORM Repository level",
                link: "https://github.com/loopback4/loopback-component-cascade",
            },
            {
                text: "[**loopback-component-authorization**](https://github.com/loopback4/loopback-component-authorization): Supporting HRBAC (Hierarchical Role Based Access Control) authorization",
                link: "https://github.com/loopback4/loopback-component-authorization",
            },
        ],
    },
    {
        title: "ReactAdmin Data Providers",
        subtitle: "Open Source",
        location: "",
        date: "",
        items: [
            {
                text: "[**ra-data-lb4**](https://github.com/loopback4/ra-data-lb4): Loopback4 auto-generated CRUD endpoints data-provider library",
                link: "https://github.com/loopback4/ra-data-lb4",
            },
            {
                text: "[**ra-data-mixer**](https://github.com/ckoliber/ra-data-mixer): Mixing multiple data-providers into one data-provider library",
                link: "https://github.com/ckoliber/ra-data-mixer",
            },
            {
                text: "[**ra-data-processmaker3**](https://github.com/ckoliber/ra-data-processmaker3): ProcessMaker3 BPMS CRUD endpoints data-provider library",
                link: "https://github.com/ckoliber/ra-data-processmaker3",
            },
        ],
    },
    {
        link: "https://github.com/ckoliber/cham",
        title: "Chapar Messenger (ChaM)",
        subtitle: "Open Source",
        location: "",
        date: "",
        items: [
            {
                text: "Implementation of a custom protocol over TCP, UDP sockets for messaging using Erlang",
            },
            {
                text: "Implementation of Hole Punching for P2P direct connection on Audio and Video calls using Erlang",
            },
            {
                text: "Implementation of Resumable Streaming protocol over TCP for uploading and downloading files using C",
            },
            {
                text: "Implementation of Audio & Video frame streaming using android native API's and raw sockets (FFMPEG, JNI)",
            },
            {
                text: "Implementation of Android Messenger Application using Java, C (JNI), AndroidStudio",
            },
            {
                text: "Implementation of Desktop Messenger Application using Qt, C++, QML",
            },
        ],
    },
];

export default function Page() {
    return (
        <>
            <Hero image="/images/break_projects.jpg" height="70vh">
                <Text as="h1">Projects</Text>
            </Hero>
            <section className="flex flex-col items-center p-4 md:p-8">
                <div className="container max-w-screen-xl">
                    <Text as="h2" className="warning">
                        Notable Projects
                    </Text>
                    <Animator manager="sequence">
                        {notable.map((item: any, idx: number) => (
                            <Card key={idx} {...item} />
                        ))}
                    </Animator>
                </div>
            </section>
            <Frame as="hr" />
            <section className="flex flex-col items-center p-4 md:p-8">
                <div className="container max-w-screen-xl">
                    <Text as="h2" className="warning">
                        Published Projects
                    </Text>
                    <Animator manager="sequence">
                        {published.map((item: any, idx: number) => (
                            <Card key={idx} {...item} />
                        ))}
                    </Animator>
                </div>
            </section>
        </>
    );
}
