import type { MDXComponents } from "mdx/types";

import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Image from "next/image";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        ...Object.assign(
            {},
            ...["h1", "h2", "h3", "h4", "h5", "h6"].map((hx) => ({
                [hx]: (props: any) => <Text {...props} as={hx} />,
            }))
        ),
        button: (props: any) => <Frame {...props} as="button" />,
        figure: (props: any) => <Frame {...props} as="button" />,
        img: (props: any) => <Image alt="" {...props} />,
        a: (props: any) => <Link {...props} />,
    };
}
