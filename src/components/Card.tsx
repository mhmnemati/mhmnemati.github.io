import Image from "next/image";
import Link from "next/link";

import Animator from "./Animator";
import Frame from "./Frame";
import Text from "./Text";

export interface CardProps {
    logo?: string;
    link?: string;
    date: string;
    title: string;
    subtitle: string;
    location?: string;
    children?: React.ReactNode;
}

export default async function Component(props: CardProps) {
    return (
        <Frame
            className="my-4 grid grid-cols-3"
            illuminator={500}
            type="hftagon"
            size="small"
        >
            {props.logo && (
                <div className="col-span-3 md:col-span-1">
                    <Image
                        alt="Personal"
                        src={props.logo}
                        width={1000}
                        height={1000}
                    />
                </div>
            )}
            <div className={`p-4 col-span-3 ${props.logo && "md:col-span-2"}`}>
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                    {props.link ? (
                        <Link
                            href={props.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Text as="h3">{props.title}</Text>
                        </Link>
                    ) : (
                        <Text as="h3">{props.title}</Text>
                    )}
                    {props.date && <Text as="h6">{props.date}</Text>}
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <Text as="h5" className="secondary">
                        {props.subtitle}
                    </Text>
                    {props.location && (
                        <Text as="h6" className="secondary">
                            {props.location}
                        </Text>
                    )}
                </div>
                {props.children && (
                    <Animator manager="stagger">
                        <Frame as="hr" className="my-2" />
                        {props.children}
                    </Animator>
                )}
            </div>
        </Frame>
    );
}
