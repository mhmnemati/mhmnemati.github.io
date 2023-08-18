"use client";

import { Animator } from "@arwes/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";

import Frame from "./Frame";
import Text from "./Text";

export interface CardProps {
    logo?: string;
    link?: string;
    title: string;
    subtitle: string;
    location: string;
    date: string;
    items?: [{ text: string; link?: string }];
}

export default function Component(props: CardProps) {
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
                <div className="flex flex-col md:flex-row justify-between align-middle">
                    {props.link ? (
                        <Link href={props.link}>
                            <Text as="h3">{props.title}</Text>
                        </Link>
                    ) : (
                        <Text as="h3">{props.title}</Text>
                    )}
                    <Text as="h6">{props.date}</Text>
                </div>
                <div className="flex flex-col md:flex-row justify-between align-middle">
                    <Text as="h5" className="secondary">
                        {props.subtitle}
                    </Text>
                    {props.location && (
                        <Text as="h6" className="secondary">
                            {props.location}
                        </Text>
                    )}
                </div>
                {props.items && <Frame as="hr" className="my-2" />}
                <ul>
                    <Animator manager="stagger">
                        {props.items?.map((item_: any, item_idx: number) => (
                            <Text key={item_idx} as="li">
                                {item_.text}{" "}
                                {item_.link && (
                                    <Link
                                        href={item_.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faExternalLink}
                                        />
                                    </Link>
                                )}
                            </Text>
                        ))}
                    </Animator>
                </ul>
            </div>
        </Frame>
    );
}
