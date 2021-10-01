import React from "react";

import { useI18next } from "gatsby-plugin-react-i18next";

import { graphql, useStaticQuery } from "gatsby";

import { Row, Col } from "react-grid-system";

import { Text, Figure } from "@arwes/core";

const Component = (props) => {
    const { language } = useI18next();

    const data = useStaticQuery(graphql`
        query {
            allMdx(
                sort: { fields: frontmatter___date, order: DESC }
                filter: { slug: { regex: "/courses.*/" } }
            ) {
                nodes {
                    id
                    slug
                    frontmatter {
                        image
                        title
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
                    <h2>Courses</h2>
                </Text>
            </Row>
            <Row style={{ margin: "8px 8px 32px 8px" }}>
                {data.allMdx.nodes.map((item) => (
                    <Col key={item.id} sm={12} md={6}>
                        <Figure
                            src={item.frontmatter.image}
                            alt={item.frontmatter.title}
                            preload
                            fluid
                        />
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default Component;
