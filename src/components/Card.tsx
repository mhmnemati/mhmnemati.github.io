"use client";

import { Animator } from "@arwes/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

import Frame from "./Frame";
import Text from "./Text";

export interface CardProps {
    link?: string;
    title: string;
    subtitle: string;
    location: string;
    date: string;
    tasks: [{ text: string; link?: string }];
}

export default function Component(props: CardProps) {
    return (
        <Frame
            className="p-4 my-4"
            illuminator={500}
            type="hftagon"
            size="small"
        >
            <div className="flex justify-between align-middle">
                {props.link ? (
                    <Link href={props.link}>
                        <Text as="h3">{props.title}</Text>
                    </Link>
                ) : (
                    <Text as="h3">{props.title}</Text>
                )}
                <Text as="h6">{props.date}</Text>
            </div>
            <div className="flex justify-between align-middle">
                <Text as="h5" className="secondary">
                    {props.subtitle}
                </Text>
                <Text as="h6" className="secondary">
                    {props.location}
                </Text>
            </div>
            <Frame as="hr" className="my-2" />
            <ul>
                <Animator manager="stagger">
                    {props.tasks.map((task: any, task_idx: number) => (
                        <Text key={task_idx} as="li">
                            {task.text}{" "}
                            {task.link && (
                                <Link href={task.link}>
                                    <FontAwesomeIcon icon={faExternalLink} />
                                </Link>
                            )}
                        </Text>
                    ))}
                </Animator>
            </ul>
        </Frame>
    );
}
