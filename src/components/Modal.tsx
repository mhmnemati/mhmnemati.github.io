"use client";

import {
    CSSProperties,
    MouseEventHandler,
    useCallback,
    useEffect,
    useRef,
} from "react";
import { useRouter, usePathname } from "next/navigation";

import Frame from "./Frame";

interface Props {
    children: React.ReactNode;
    style?: CSSProperties;
    path: string;
}

export default function Component(props: Props) {
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();
    const path = usePathname();

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick: MouseEventHandler = useCallback(
        (e) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper]
    );

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);

    if (path != props.path) {
        return null;
    }

    return (
        <div
            ref={overlay}
            className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
            onClick={onClick}
        >
            <div
                ref={wrapper}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
            >
                <Frame {...props} frame="kronox" />
            </div>
        </div>
    );
}
