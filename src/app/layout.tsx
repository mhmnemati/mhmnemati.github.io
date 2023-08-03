import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Theme from "@/components/Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "KoLiBer",
    description: "KoLiBer personal website",
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
        <html lang="en">
            <body dir="ltr" className={inter.className}>
                <Theme>
                    {props.header}
                    {props.children}
                    {props.footer}
                </Theme>
            </body>
        </html>
    );
}
