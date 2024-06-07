import type { GetStaticProps } from "next";

import Animator from "@/components/Animator";
import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Link from "next/link";

import { generateStaticParams } from "./[id]/page";

export default async function Page(props: any) {
    const posts = await generateStaticParams();

    return (
        <>
            <Hero image="/images/break_projects.jpg" height="70vh">
                <Text as="h1">Blog</Text>
            </Hero>
            {posts.map((post, idx) => (
                <Link key={idx} href={`/blog/${post.id}`}>
                    {post.id}
                </Link>
            ))}

            {/* <section className="flex flex-col items-center p-4 md:p-8">
                <div className="container max-w-screen-xl">
                    <Text as="h2" className="warning">
                        Research Experiences
                    </Text>
                    <Animator manager="sequence">
                        {research.map((item: any, idx: number) => (
                            <Card key={idx} {...item} />
                        ))}
                    </Animator>
                </div>
            </section> */}
        </>
    );
}
