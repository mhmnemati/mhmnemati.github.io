import React from "react";

import Layout from "../components/layout";

import { LoadingBars, FrameLines, Text } from "@arwes/core";
import { Animator } from "@arwes/animation";

const Component: React.FC<{}> = (props) => {
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);

    return (
        <Layout>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1447433819943-74a20887a81e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=775&q=80)",
                    backgroundSize: "cover",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <FrameLines
                    style={{
                        minWidth: 200,
                        minHeight: 50,
                    }}
                    animator={{ activate: !loading }}
                    palette="error"
                    largeLineWidth={2}
                    smallLineWidth={4}
                    smallLineLength={20}
                    hover
                >
                    <LoadingBars
                        animator={{
                            activate: loading,
                        }}
                        size={2}
                        speed={4}
                        full
                    />
                </FrameLines>
            </div>
        </Layout>
    );
};

export default Component;
