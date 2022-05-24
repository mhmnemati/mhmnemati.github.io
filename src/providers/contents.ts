import fs from "fs";
import matter from "gray-matter";

export default function getContents(flat: boolean, name: string, lang: string) {
    const path = `content/${name}`;
    const items = fs.readdirSync(path);

    if (flat) {
        const file = fs.readFileSync(`${path}/${lang}.mdx`, "utf-8");
        const { data, content } = matter(file);

        return [{ slug: name, data, content }];
    }

    return items
        .map((slug) => {
            const file = fs.readFileSync(
                `${path}/${slug}/${lang}.mdx`,
                "utf-8"
            );
            const { data, content } = matter(file);

            return { slug, data, content };
        })
        .sort((a, b) => b.data.index - a.data.index);
}
