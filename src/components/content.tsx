import React from "react";

import { Container, Row, Col } from "react-grid-system";

import { Text, Figure } from "@arwes/core";

import { MDXRenderer } from "gatsby-plugin-mdx";

const Component: React.FC<{
    title: string;
    items: {
        id: string;
        body: string;
        rawBody: string;
        frontmatter: { image_src?: string; image_alt?: string };
    }[];
}> = (props) => {
    return (
        <Container>
            <Row style={{ margin: 32 }}>
                <Text>
                    <h2>{props.title}</h2>
                </Text>
            </Row>
            {props.items.map((item) => (
                <Row key={item.id} style={{ margin: "8px 8px 32px 8px" }}>
                    {item.frontmatter.image_src && (
                        <Col
                            md={12}
                            lg={item.rawBody.includes("\n---\n\n") ? 4 : 6}
                        >
                            <Figure
                                src={item.frontmatter.image_src}
                                alt={item.frontmatter.image_alt}
                                preload
                                fluid
                            />
                        </Col>
                    )}
                    {item.rawBody.includes("\n---\n\n") && (
                        <Col
                            md={12}
                            lg={item.frontmatter.image_src ? 8 : 12}
                            style={{ marginBottom: 8 }}
                        >
                            <MDXRenderer>{item.body}</MDXRenderer>
                        </Col>
                    )}
                </Row>
            ))}
        </Container>
    );
};

export default Component;
