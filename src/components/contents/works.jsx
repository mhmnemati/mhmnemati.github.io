import React from "react";

import { graphql, useStaticQuery } from "gatsby";

import { Row, Col } from "react-grid-system";

import { Text } from "@arwes/core";

import { MDXRenderer } from "gatsby-plugin-mdx";

const Component = (props) => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                sort: { fields: frontmatter___endDate, order: DESC }
                filter: { slug: { regex: "/works.*/" } }
            ) {
                nodes {
                    id
                    slug
                    body
                    frontmatter {
                        title
                        beginDate
                        endDate
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
                    <h2>Works</h2>
                </Text>
            </Row>
            {data.allMdx.nodes.map((item) => (
                <Row key={item.id} style={{ margin: "8px 8px 32px 8px" }}>
                    <Col md={12} lg={12}>
                        <Text>
                            <h3 style={{ marginBottom: 8 }}>
                                {item.frontmatter.title}
                            </h3>
                            <b>
                                {item.frontmatter.beginDate} -{" "}
                                {item.frontmatter.endDate}
                            </b>
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
