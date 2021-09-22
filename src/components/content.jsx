import React from "react";

import Modal from "react-modal";

import { graphql, useStaticQuery } from "gatsby";

import { Row, Col } from "react-grid-system";

import { Text, Figure, Button, FrameHexagon } from "@arwes/core";

import { MDXRenderer } from "gatsby-plugin-mdx";

Modal.setAppElement("#___gatsby");

const Component = (props) => {
    const [modal, setModal] = React.useState({
        open: false,
        data: undefined,
    });

    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: { fields: frontmatter___date, order: DESC }) {
                nodes {
                    id
                    frontmatter {
                        image
                        title
                        date
                        categories
                        description
                    }
                    excerpt
                    body
                }
            }
        }
    `);

    return (
        <section>
            <Row style={{ margin: 32 }}>
                <Text>
                    <h2>{props.title}</h2>
                </Text>
            </Row>
            {data.allMdx.nodes
                .filter((item) =>
                    (item.frontmatter.categories || []).includes(props.category)
                )
                .map((item) => (
                    <Row key={item.id} style={{ margin: "8px 8px 32px 8px" }}>
                        <Col md={12} lg={4}>
                            {item.frontmatter.image && (
                                <Figure
                                    src={item.frontmatter.image}
                                    alt={item.frontmatter.title}
                                    preload
                                    fluid
                                />
                            )}
                        </Col>
                        <Col md={12} lg={8}>
                            <Text>
                                <h3 style={{ marginBottom: 8 }}>
                                    {item.frontmatter.title}
                                </h3>
                                <b>{item.frontmatter.date}</b>
                                <p style={{ marginTop: 8 }}>
                                    {item.frontmatter.description}
                                </p>
                            </Text>
                            {item.excerpt && (
                                <Button
                                    FrameComponent={FrameHexagon}
                                    onClick={() =>
                                        setModal({
                                            open: true,
                                            data: item,
                                        })
                                    }
                                >
                                    Show More
                                </Button>
                            )}
                        </Col>
                    </Row>
                ))}
            <Modal
                closeTimeoutMS={500}
                isOpen={modal.open}
                onRequestClose={() =>
                    setModal({
                        open: false,
                        data: modal.data,
                    })
                }
                style={{
                    overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                    },
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",

                        border: "none",
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch",
                        background: "#151917",
                    },
                }}
                contentLabel="Example Modal"
            >
                {modal.data && <MDXRenderer>{modal.data.body}</MDXRenderer>}
            </Modal>
        </section>
    );
};

export default Component;
