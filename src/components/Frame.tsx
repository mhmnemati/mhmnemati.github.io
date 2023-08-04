"use client";

import {
    Animator,
    Animated,
    Illuminator,
    FrameSVGNefrex,
    FrameSVGKranox,
    FrameSVGOctagon,
    createFrameKranoxClip,
    createFrameOctagonClip,
    aaVisibility,
} from "@arwes/react";

import { CSSProperties } from "react";

interface Props {
    children: React.ReactNode;
    style?: CSSProperties;
    frame: "kronox" | "octagon";
}

export default function Component(props: Props) {
    return (
        <Animator>
            <Animated className="frame" animated={aaVisibility()}>
                <Animator>
                    <Illuminator color="hsl(60 50% 90% / 8%)" size={400} />
                    <FrameSVGNefrex
                        className="nefrex"
                        style={{
                            left: 8,
                            right: 8,
                            width: "calc(100% - 16px)",
                        }}
                        strokeWidth={3}
                        squareSize={12}
                        smallLineLength={12}
                        largeLineLength={48}
                    />
                    {props.frame == "kronox" && (
                        <FrameSVGKranox
                            style={{
                                top: 4,
                                bottom: 4,
                                height: "calc(100% - 8px)",
                            }}
                            className="kranox"
                            strokeWidth={1}
                            squareSize={12}
                            smallLineLength={12}
                            largeLineLength={48}
                        />
                    )}
                    {props.frame == "octagon" && (
                        <FrameSVGOctagon className="octagon" squareSize={12} />
                    )}
                </Animator>

                <div style={{ ...props.style, position: "relative" }}>
                    {props.children}
                </div>
            </Animated>

            <style jsx global>{`
                .frame {
                    position: relative;
                    padding: 8px 16px;
                    background: transparent;
                }
                .kronox,
                . [data-name="bg"] {
                    color: hsla(180, 100%, 10%, 0.5);
                }
                .frame [data-name="line"] {
                    color: hsla(180, 100%, 10%, 0.9);
                }
                .nefrex {
                    padding: 8;
                    // width: calc(100% - 14px);
                }
                .nefrex [data-name="bg"] {
                    display: none;
                }
                .nefrex [data-name="line"] {
                    color: hsla(180, 100%, 50%, 0.5);
                }
                .kronox {
                    clip-path: ${createFrameKranoxClip({
                        squareSize: 12,
                        padding: -16,
                    })};
                }
                .octagon {
                    clip-path: ${createFrameOctagonClip({
                        squareSize: 12,
                    })};
                }
            `}</style>
        </Animator>
    );
}
