import React from "react";

import { LoadingBars, FrameLines, Text } from "@arwes/core";
import { Animator } from "@arwes/animation";

import Layout from "../components/layout";
import Content from "../components/content";

const Component = (props) => {
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);

    return (
        <Layout>
            <Content>
                <Text
                    animator={{ activate: true }}
                    as="h1"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    KoLiBer
                </Text>
                <hr />
                <Text animator={{ activate: true }} as="p">
                    <b>
                        A computer science student and full stack developer who
                        is mainly interested in modeling nature rules with
                        computers
                    </b>
                </Text>
                <hr />
                <Text animator={{ activate: true }}>
                    <a
                        href="https://github.com/hasura/graphql-engine"
                        rel="noopener noreferrer"
                        aria-label="Github"
                    >
                        <img
                            loading="lazy"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyNCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDBDMTAuNDI0MSAwIDguODYzNzEgMC4zMDQ4NDEgNy40MDc4IDAuODk3MTE5QzUuOTUxODkgMS40ODk0IDQuNjI5MDIgMi4zNTc1MSAzLjUxNDcyIDMuNDUxOUMxLjI2NDI4IDUuNjYyMTEgMCA4LjY1OTggMCAxMS43ODU1QzAgMTYuOTk0NyAzLjQ0NCAyMS40MTQzIDguMjA4IDIyLjk4MTdDOC44MDggMjMuMDc2IDkgMjIuNzEwNyA5IDIyLjM5MjVDOSAyMi4xMjE0IDkgMjEuMzc4OSA5IDIwLjQwMDdDNS42NzYgMjEuMTA3OCA0Ljk2OCAxOC44MjE1IDQuOTY4IDE4LjgyMTVDNC40MTYgMTcuNDU0MyAzLjYzNiAxNy4wODkgMy42MzYgMTcuMDg5QzIuNTQ0IDE2LjM1ODMgMy43MiAxNi4zODE5IDMuNzIgMTYuMzgxOUM0LjkyIDE2LjQ2NDQgNS41NTYgMTcuNTk1OCA1LjU1NiAxNy41OTU4QzYuNiAxOS4zODcyIDguMzY0IDE4Ljg1NjggOS4wNDggMTguNTc0QzkuMTU2IDE3LjgwNzkgOS40NjggMTcuMjg5MyA5LjgwNCAxNi45OTQ3QzcuMTQgMTYuNzAwMSA0LjM0NCAxNS42ODY1IDQuMzQ0IDExLjE5NjJDNC4zNDQgOS44ODgwNCA0LjggOC44MzkxMyA1LjU4IDguMDAyMzZDNS40NiA3LjcwNzcyIDUuMDQgNi40ODIwMyA1LjcgNC44OTA5OUM1LjcgNC44OTA5OSA2LjcwOCA0LjU3Mjc4IDkgNi4wOTMxMUM5Ljk0OCA1LjgzMzgzIDEwLjk4IDUuNzA0MTkgMTIgNS43MDQxOUMxMy4wMiA1LjcwNDE5IDE0LjA1MiA1LjgzMzgzIDE1IDYuMDkzMTFDMTcuMjkyIDQuNTcyNzggMTguMyA0Ljg5MDk5IDE4LjMgNC44OTA5OUMxOC45NiA2LjQ4MjAzIDE4LjU0IDcuNzA3NzIgMTguNDIgOC4wMDIzNkMxOS4yIDguODM5MTMgMTkuNjU2IDkuODg4MDQgMTkuNjU2IDExLjE5NjJDMTkuNjU2IDE1LjY5ODMgMTYuODQ4IDE2LjY4ODMgMTQuMTcyIDE2Ljk4MjlDMTQuNjA0IDE3LjM0ODMgMTUgMTguMDY3MiAxNSAxOS4xNjMyQzE1IDIwLjc0MjUgMTUgMjIuMDE1MyAxNSAyMi4zOTI1QzE1IDIyLjcxMDcgMTUuMTkyIDIzLjA4NzggMTUuODA0IDIyLjk4MTdDMjAuNTY4IDIxLjQwMjUgMjQgMTYuOTk0NyAyNCAxMS43ODU1QzI0IDEwLjIzNzggMjMuNjg5NiA4LjcwNTI3IDIzLjA4NjYgNy4yNzUzOUMyMi40ODM1IDUuODQ1NTEgMjEuNTk5NiA0LjU0NjI4IDIwLjQ4NTMgMy40NTE5QzE5LjM3MSAyLjM1NzUxIDE4LjA0ODEgMS40ODk0IDE2LjU5MjIgMC44OTcxMTlDMTUuMTM2MyAwLjMwNDg0MSAxMy41NzU5IDAgMTIgMFoiIGZpbGw9IiM3MTc3ODAiLz4KPC9zdmc+Cg=="
                            alt="Github"
                        />
                    </a>
                </Text>
            </Content>
        </Layout>
    );
};

export default Component;
