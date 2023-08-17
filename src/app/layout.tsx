import "./globals.css";
import type { Metadata } from "next";

import Theme from "@/components/Theme";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
    title: "KoLiBer",
    description: "KoLiBer personal website",
    icons: {
        icon: "/images/favicon.ico",
    },
    keywords: [
        "KoLiBer",
        "koliber",
        "ckoliber",
        "blog",
        "personal",
        "portfolio",
        "Mohammad Hosein Nemati",
        "computer science",
        "biology",
        "cloud",
    ],
    openGraph: {
        type: "website",
        title: "KoLiBer",
        description: "KoLiBer personal website",
    },
    twitter: {
        card: "summary",
        title: "KoLiBer",
        creator: "@ckoliber",
        description: "KoLiBer personal website",
    },
};

export default function Layout(props: {
    children: React.ReactNode;
    header: React.ReactNode;
    footer: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body dir="ltr">
                <Theme>
                    {props.header}
                    {props.children}
                    {props.footer}
                    <div id="modal" />
                </Theme>
            </body>
        </html>
    );
}
