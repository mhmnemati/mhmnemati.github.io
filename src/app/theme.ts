import { createTheme } from "@arwes/design";

export default (isRTL: boolean) =>
    createTheme({
        palette: {
            primary: { main: "#1ca6a9" },
            secondary: { main: "#2c3531" },
            neutral: { main: "#151917" },
            text: {
                headings: "#22c7cb",
                root: "#d1e8e2",
                link: "#22c7cb",
                linkHover: "#d1e8e2",
            },
        },
        space: 4,
        outline: 2,
    });
