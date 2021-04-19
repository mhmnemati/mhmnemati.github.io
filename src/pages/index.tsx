import * as React from "react";
import { ArwesThemeProvider, StylesBaseline, LoadingBars } from "@arwes/core";

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
const FONT_FAMILY_CODE = '"Source Code Pro", monospace';

export default () => {
    return (
        <ArwesThemeProvider themeSettings={{}}>
            <StylesBaseline
                styles={{
                    "html, body": { fontFamily: FONT_FAMILY_ROOT },
                    "code, pre": { fontFamily: FONT_FAMILY_CODE },
                }}
            />

            <LoadingBars
                animator={{
                    activate: true,
                }}
                size={2}
                speed={4}
                full
            />
        </ArwesThemeProvider>
    );
};
