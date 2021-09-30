import React from "react";

import { graphql, useStaticQuery } from "gatsby";

import { Row, Col } from "react-grid-system";

import { Text, Figure } from "@arwes/core";

import { MDXRenderer } from "gatsby-plugin-mdx";

const Component = (props) => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                sort: { fields: frontmatter___date, order: DESC }
                filter: { slug: { regex: "/books.*/" } }
            ) {
                nodes {
                    id
                    slug
                    body
                    frontmatter {
                        image
                        title
                        date
                    }
                }
            }
        }
    `);
    data.allMdx.nodes = data.allMdx.nodes.filter((item) =>
        new RegExp(".*en$").test(item.slug)
    );

    return (
        <section>
            <Row style={{ margin: 32 }}>
                <Text>
                    <h2>Books</h2>
                </Text>
            </Row>
            {data.allMdx.nodes.map((item) => (
                <Row key={item.id} style={{ margin: "8px 8px 32px 8px" }}>
                    <Col md={12} lg={4}>
                        <Figure
                            src={item.frontmatter.image}
                            alt={item.frontmatter.title}
                            preload
                            fluid
                        />
                    </Col>
                    <Col md={12} lg={8}>
                        <Text>
                            <h3 style={{ marginBottom: 8 }}>
                                {item.frontmatter.title}
                            </h3>
                            <b>{item.frontmatter.date}</b>
                            <article style={{ marginTop: 8 }}>
                                <MDXRenderer>{item.body}</MDXRenderer>
                            </article>
                        </Text>
                    </Col>
                </Row>
            ))}
        </section>
    );
};

export default Component;
