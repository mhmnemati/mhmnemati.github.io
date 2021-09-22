import React from "react";

import { graphql, useStaticQuery } from "gatsby";

import { Row, Col } from "react-grid-system";

import { Text, Figure } from "@arwes/core";

const Component = (props) => {
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
                }
            }
        }
    `);

    return (
        <>
            <Row
                style={{
                    margin: 32,
                }}
            >
                <Text>
                    <h2>{props.title}</h2>
                </Text>
            </Row>
            {data.allMdx.nodes
                .filter((item) =>
                    (item.frontmatter.categories || []).includes(props.category)
                )
                .map((item) => (
                    <Row key={item.id} style={{ margin: 8 }}>
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
                                <p
                                    style={{
                                        marginTop: 8,
                                        color: "#ffcb9a",
                                    }}
                                >
                                    {item.frontmatter.description}
                                </p>
                            </Text>
                        </Col>
                    </Row>
                ))}
        </>
    );
};

export default Component;
