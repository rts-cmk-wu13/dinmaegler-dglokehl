import type { ImageProps } from "next/image";

export type AgentProps = {
    name: string;
    title: string;
    phone: string;
    email: string;
    image: ImageProps;
    description: string;
    id: string;
}