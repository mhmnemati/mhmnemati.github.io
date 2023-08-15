"use client";

export interface HeroProps {
    children?: React.ReactNode;
    height?: string;
    image: string;
}

export default function Component(props: HeroProps) {
    return (
        <section
            className="w-full flex flex-col justify-center text-center align-middle gap-8"
            style={{
                backgroundImage: `url(${props.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: props.height || "100vh",
            }}
        >
            {props.children}
        </section>
    );
}
