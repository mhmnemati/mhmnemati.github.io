import React from "react";

import { useI18next } from "gatsby-plugin-react-i18next";

import { graphql, useStaticQuery } from "gatsby";

import { Row, Col } from "react-grid-system";

import { Text, Figure } from "@arwes/core";

import { MDXRenderer } from "gatsby-plugin-mdx";

const Component = (props) => {
    const { language } = useI18next();

    const data = useStaticQuery(graphql`
        query {
            allMdx(
                sort: { fields: frontmatter___endDate, order: DESC }
                filter: { slug: { regex: "/educations.*/" } }
            ) {
                nodes {
                    id
                    slug
                    body
                    frontmatter {
                        image
                        title
                        beginDate
                        endDate
                    }
                }
            }
        }
    `);
    data.allMdx.nodes = data.allMdx.nodes.filter((item) =>
        new RegExp(`.*${language}$`).test(item.slug)
    );

    return (
        <section>
            <Row style={{ margin: 32 }}>
                <Text>
                    <h2>Educations</h2>
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
