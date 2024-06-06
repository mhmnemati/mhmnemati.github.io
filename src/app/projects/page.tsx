import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

import Animator from "@/components/Animator";
import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

import Link from "next/link";

function Notable() {
    return (
        <div className="container max-w-screen-xl">
            <Text as="h2" className="warning">
                Notable Projects
            </Text>
            <Animator manager="sequence">
                <Card
                    date="Fall 2022"
                    link="https://github.com/ckoliber/nlpexercises"
                    title="Natural Language Processing"
                    subtitle="Prof. Bagher Babaali"
                    location=""
                >
                    <ul>
                        <li>
                            Training N-Gram Language Model on Hamshahri v2
                            dataset (Persian Newspaper) using NLTK
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/nlpexercises/blob/main/src/exercise1.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Implementation of Hidden-Markov-Model from scratch
                            in python (Baum Welch Algorithm, Viterbi Algorithm)
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/nlpexercises/blob/main/src/hmm/hmm.py"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Part-of-Speech Tagging using Hidden-Markov-Model
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/nlpexercises/blob/main/src/exercise3.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Applying TF-IDF and LSA for Text Classification on
                            Persica dataset
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/nlpexercises/blob/main/src/exercise4.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Text Classification on Persica dataset using
                            ParsBERT
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/nlpexercises/blob/main/src/exercise5.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Part-of-Speech Tagging on Persian dataset using
                            ParsBERT
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/nlpexercises/blob/main/src/exercise6.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Fall 2022"
                    link="https://github.com/ckoliber/dipexercises"
                    title="Digital Image Processing"
                    subtitle="Prof. Hedieh Sajedi"
                    location=""
                >
                    <ul>
                        <li>
                            Applying Geometrical Operation, Histogram
                            Equalization, Filtering in Spacial and Frequency
                            domain, and Morphological Operation using OpenCV
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/dipexercises/blob/main/src/exercise1.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Blast Cell Image Classification into Normal and
                            Abnormal using a CNN Model
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/dipexercises/blob/main/src/exercise2.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            CIFAR10 Classification using a Nested-Hierarchical
                            Transformer (NesT)
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/dipexercises/blob/main/src/project.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Fall 2022"
                    link="https://github.com/ckoliber/mlexercises"
                    title="Machine Learning"
                    subtitle="Prof. Bagher Babaali & Prof. Hedieh Sajedi"
                    location=""
                >
                    <ul>
                        <li>
                            Implementation of perceptron from scratch using
                            Python and NumPy and applying it on Polynomial
                            Regression problem
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/mlexercises/blob/master/src/exercise1.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Training perceptron for Money Classification into
                            Real and Fake classes
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/mlexercises/blob/master/src/exercise2.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Implementation of Linear-Discriminant-Analysis using
                            Python and NumPy and applying it to reducing
                            dimension and visualizing data
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/mlexercises/blob/master/src/exercise3.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Implementation of Principal-Component-Analysis using
                            Python and NumPy and applying it to Face Image
                            dataset compression and reconstruction
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/mlexercises/blob/master/src/exercise4.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Applying Logistic Regression for a binary
                            classification task on Income dataset
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/mlexercises/blob/master/src/exercise5.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Applying K-Means clustering method on dataset and
                            visualizing clusters
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/mlexercises/blob/master/src/exercise6.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Activity Recognition using Wearable Physiological
                            Signal Features using Decision Tree, Random Forest,
                            XGBoost, and SVM Classifiers
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/mlexercises/blob/master/src/exercise1_1.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Parkinson&apos;s Disease Detection using Speech
                            Signal Features using Decision Tree, Random Forest,
                            XGBoost, SVM, MLP, ELM, and Autoencoder
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/mlexercises/blob/master/src/exercise2_1.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Heart Disease Prediction from Health Indicators
                            using Decision Tree, Random Forest, XGBoost, SVM,
                            MLP, ELM, and Autoencoder
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/mlexercises/blob/master/src/project.ipynb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Fall 2022"
                    link="https://github.com/ckoliber/actexercises"
                    title="Advanced Computation Theory"
                    subtitle="Prof. Majid Alizadeh"
                    location=""
                >
                    <ul>
                        <li>
                            Implementation of Davis Language interpreter in
                            python
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/actexercises/blob/master/projects/interpreter.py"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Implementation of Davis Language encoder and decoder
                            for Universal Programs
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/actexercises/blob/master/projects/encoder.py"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Fall 2020"
                    title="Operation Systems"
                    subtitle="Prof. Saeed Reza Kheradpisheh"
                    location=""
                >
                    <ul>
                        <li>
                            Implementation of Cross Platform Async Socket Server
                            (TCP, UDP) in C
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/Knet"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Implementation of Thread Pool and Process Pool
                            design patterns in C using pthread library
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/Kprocessor"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Implementation of Cross Platform IPC Tools
                            (Semaphores, Shared Memories, Message Queues) in C
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/Kipc"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Fall 2020"
                    title="Compiler Design"
                    subtitle="Prof. Somaye Arabi"
                    location=""
                >
                    <ul>
                        <li>
                            C Language JSON parser and packer library
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/Kson"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Mini C Language compiler using Lex and Yacc
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/minicc"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Fall 2020"
                    title="Data Structures and Algorithms"
                    subtitle="Prof. Somaye Arabi"
                    location=""
                >
                    <ul>
                        <li>
                            Postfix and Prefix parser using Java
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/XFixToYFix"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            TypeScript Memoization library (NPM package)
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/memoizor"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Huffman Compressor desktop application using C++,
                            Qt, QML
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/kuffman"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Implementation of Basic Data Structures (ArrayList,
                            LinkedList, Stack, Queue, Deque) in C
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/kstd"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Fall 2020"
                    title="Advanced Programming"
                    subtitle="Prof. Keivan Borna"
                    location=""
                >
                    <ul>
                        <li>
                            Implementation of 2048 Game in Java
                            <Link
                                className="ml-2"
                                href=" https://github.com/ckoliber/2048 "
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Implementation of Maze Game in Java
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/Maze"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Implementation of Library Manager using Java, JavaFX
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/LibraryManager"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            Implementation of Govara Assets Manager using C++,
                            Qt, QML
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/govara"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                    </ul>
                </Card>
            </Animator>
        </div>
    );
}

function Published() {
    return (
        <div className="container max-w-screen-xl">
            <Text as="h2" className="warning">
                Published Projects
            </Text>
            <Animator manager="sequence">
                <Card
                    date=""
                    link="https://github.com/cktf"
                    title="Terraform Community Modules"
                    subtitle="Open Source"
                    location=""
                >
                    <ul>
                        <li>
                            <a
                                href="https://github.com/cktf/terraform-module-rke"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>terraform-module-rke</b>
                            </a>
                            : Terraform module for Provisioning HA Kubernetes
                            clusters using K3s and RKE2 on hosts using SSH,
                            WinRM
                            <Link
                                className="ml-2"
                                href="https://github.com/cktf/terraform-module-rke"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/cktf/terraform-aws-wireguard"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>terraform-aws-wireguard</b>
                            </a>
                            : Terraform module for Provisioning Wireguard VPN
                            instance and manage users on AWS cloud
                            <Link
                                className="ml-2"
                                href="https://github.com/cktf/terraform-aws-wireguard"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/cktf/terraform-hcloud-rke"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>terraform-hcloud-rke</b>
                            </a>
                            : Terraform module for Provisioning HA Kubernetes
                            clusters using K3s and RKE2 on Hetzner cloud
                            <Link
                                className="ml-2"
                                href="https://github.com/cktf/terraform-hcloud-rke"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/cktf/terraform-hcloud-network"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>terraform-hcloud-network</b>
                            </a>
                            : Terraform module for Creating and Managing
                            Network, Subnet on Hetzner cloud
                            <Link
                                className="ml-2"
                                href="https://github.com/cktf/terraform-hcloud-network"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/cktf/terraform-hcloud-wireguard"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>terraform-hcloud-wireguard</b>
                            </a>
                            : Terraform module for Provisioning Wireguard VPN
                            instance and manage Users on Hetzner cloud
                            <Link
                                className="ml-2"
                                href="https://github.com/cktf/terraform-hcloud-wireguard"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/cktf/terraform-openstack-rke"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>terraform-openstack-rke</b>
                            </a>
                            : Terraform module for Provisioning HA Kubernetes
                            clusters using K3s and RKE2 on OpenStack cloud
                            <Link
                                className="ml-2"
                                href="https://github.com/cktf/terraform-openstack-rke"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/cktf/terraform-openstack-network"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>terraform-openstack-network</b>
                            </a>
                            : Terraform module for Creating and Managing
                            Network, Subnet, Routes on OpenStack cloud
                            <Link
                                className="ml-2"
                                href="https://github.com/cktf/terraform-openstack-network"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/cktf/terraform-kubernetes-x509"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>terraform-kubernetes-x509</b>
                            </a>
                            : Terraform module for Creating and Managing X.509
                            Certificate and RoleBinding on Kubernetes
                            <Link
                                className="ml-2"
                                href="https://github.com/cktf/terraform-kubernetes-x509"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/cktf/terraform-kubernetes-environment"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>terraform-kubernetes-environment</b>
                            </a>
                            : Terraform module for Creating and Managing
                            isolated environments on Kubernetes
                            <Link
                                className="ml-2"
                                href="https://github.com/cktf/terraform-kubernetes-environment"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/cktf/terraform-gitlab-application"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>terraform-gitlab-application</b>
                            </a>
                            : Terraform module for Creating and Managing Groups,
                            Projects and default organization policies on Gitlab
                            <Link
                                className="ml-2"
                                href="https://github.com/cktf/terraform-gitlab-application"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/cktf/terraform-gitlab-environment"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>terraform-gitlab-environment</b>
                            </a>
                            : Terraform module for Creating and Managing
                            Environments for Projects on Gitlab
                            <Link
                                className="ml-2"
                                href="https://github.com/cktf/terraform-gitlab-environment"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/ckoliber/windows-cloud-image"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>windows-cloud-image</b>
                            </a>
                            : Packer configs to create Windows Cloud Image uisng
                            VirtualBox and QEMU
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/windows-cloud-image"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                    </ul>
                </Card>
                <Card
                    date=""
                    link="https://github.com/loopback4"
                    title="Loopback4 Community Components"
                    subtitle="Open Source"
                    location=""
                >
                    <ul>
                        <li>
                            <a
                                href="https://github.com/loopback4/loopback-component-crud"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>loopback-component-crud</b>
                            </a>
                            : Generating CRUD endpoints from Model supports
                            AuthZ, Nested-Create, Nested-Update
                            <Link
                                className="ml-2"
                                href="https://github.com/loopback4/loopback-component-crud"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/loopback4/loopback-component-filter"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>loopback-component-filter</b>
                            </a>
                            : Filtering Model records based on user permissions
                            in ORM Repository level
                            <Link
                                className="ml-2"
                                href="https://github.com/loopback4/loopback-component-filter"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/loopback4/loopback-component-history"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>loopback-component-history</b>
                            </a>
                            : Adding Soft-Delete and Soft-Update functionality
                            in ORM Repository level
                            <Link
                                className="ml-2"
                                href="https://github.com/loopback4/loopback-component-history"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/loopback4/loopback-component-cascade"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>loopback-component-cascade</b>
                            </a>
                            : Adding Cascade functionality to models in ORM
                            Repository level
                            <Link
                                className="ml-2"
                                href="https://github.com/loopback4/loopback-component-cascade"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/loopback4/loopback-component-authorization"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>loopback-component-authorization</b>
                            </a>
                            : Supporting HRBAC (Hierarchical Role Based Access
                            Control) authorization
                            <Link
                                className="ml-2"
                                href="https://github.com/loopback4/loopback-component-authorization"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                    </ul>
                </Card>
                <Card
                    date=""
                    title="ReactAdmin Data Providers"
                    subtitle="Open Source"
                    location=""
                >
                    <ul>
                        <li>
                            <a
                                href="https://github.com/loopback4/ra-data-lb4"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>ra-data-lb4</b>
                            </a>
                            : Loopback4 auto-generated CRUD endpoints
                            data-provider library
                            <Link
                                className="ml-2"
                                href="https://github.com/loopback4/ra-data-lb4"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/ckoliber/ra-data-mixer"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>ra-data-mixer</b>
                            </a>
                            : Mixing multiple data-providers into one
                            data-provider library
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/ra-data-mixer"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/ckoliber/ra-data-processmaker3"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>ra-data-processmaker3</b>
                            </a>
                            : ProcessMaker3 BPMS CRUD endpoints data-provider
                            library
                            <Link
                                className="ml-2"
                                href="https://github.com/ckoliber/ra-data-processmaker3"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faExternalLink} />
                            </Link>
                        </li>
                    </ul>
                </Card>
                <Card
                    date=""
                    link="https://github.com/ckoliber/cham"
                    title="Chapar Messenger (ChaM)"
                    subtitle="Open Source"
                    location=""
                >
                    <ul>
                        <li>
                            Implementation of a custom protocol over TCP, UDP
                            sockets for messaging using Erlang
                        </li>
                        <li>
                            Implementation of Hole Punching for P2P direct
                            connection on Audio and Video calls using Erlang
                        </li>
                        <li>
                            Implementation of Resumable Streaming protocol over
                            TCP for uploading and downloading files using C
                        </li>
                        <li>
                            Implementation of Audio & Video frame streaming
                            using android native API&apos;s and raw sockets
                            (FFMPEG, JNI)
                        </li>
                        <li>
                            Implementation of Android Messenger Application
                            using Java, C (JNI), AndroidStudio
                        </li>
                        <li>
                            Implementation of Desktop Messenger Application
                            using Qt, C++, QML
                        </li>
                    </ul>
                </Card>
            </Animator>
        </div>
    );
}

export default function Page() {
    return (
        <>
            <Hero image="/images/break_projects.jpg" height="70vh">
                <Text as="h1">Projects</Text>
            </Hero>
            <section className="flex flex-col items-center p-4 md:p-8">
                <Notable />
            </section>
            <Frame as="hr" />
            <section className="flex flex-col items-center p-4 md:p-8">
                <Published />
            </section>
        </>
    );
}
