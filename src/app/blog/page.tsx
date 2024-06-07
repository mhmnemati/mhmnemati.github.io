import Animator from "@/components/Animator";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Link from "next/link";

import { generateStaticParams } from "./[id]/page";

export default async function Page() {
    const posts = await generateStaticParams();

    return (
        <>
            <Hero image="/images/break_projects.jpg" height="70vh">
                <Text as="h1">Blog</Text>
            </Hero>
            <section className="flex flex-col items-center p-4 md:p-8">
                <div className="container max-w-screen-xl">
                    <Animator manager="sequence">
                        {posts.map(({ id, frontmatter }, idx) => (
                            <Link key={idx} href={`/blog/${id}`}>
                                <Card
                                    logo={frontmatter.logo as string}
                                    date={frontmatter.date as string}
                                    title={frontmatter.title as string}
                                >
                                    <Text as="p">
                                        {frontmatter.description as string}
                                    </Text>
                                </Card>
                            </Link>
                        ))}
                    </Animator>
                </div>
            </section>
        </>
    );
}
