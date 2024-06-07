import { compileMDX } from "next-mdx-remote/rsc";

import Animator from "@/components/Animator";
import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

import fs from "fs";

export async function generateStaticParams() {
    const posts = fs.readdirSync("./src/posts").sort().reverse();

    let result = [];
    for (const post of posts) {
        const { frontmatter } = await compileMDX({
            source: fs.readFileSync(`./src/posts/${post}`),
            options: {
                parseFrontmatter: true,
            },
        });
        result.push({
            id: post.replace(".mdx", ""),
            frontmatter: frontmatter,
        });
    }

    return result;
}

export default async function Page(props: any) {
    const { content, frontmatter } = await compileMDX({
        source: fs.readFileSync(`./src/posts/${props.params.id}.mdx`),
        options: {
            parseFrontmatter: true,
        },
        components: {
            ...Object.assign(
                {},
                ...["h1", "h2", "h3", "h4", "h5", "h6", "p"].map((hx) => ({
                    [hx]: (props: any) => <Text {...props} as={hx} />,
                }))
            ),
            button: (props: any) => <Frame {...props} as="button" />,
            figure: (props: any) => <Frame {...props} as="button" />,
            img: (props: any) => <Image alt="" {...props} />,
            a: (props: any) => <Link {...props} />,
        },
    });

    return (
        <>
            <Hero image={frontmatter.logo as string} height="70vh">
                <Text as="h1">{frontmatter.title as string}</Text>
            </Hero>
            <section className="flex flex-col items-center p-4 md:p-8">
                <div className="container max-w-screen-xl">
                    <Animator manager="sequence">{content}</Animator>
                </div>
            </section>
        </>
    );
}
