import type { DataImagesProps } from "./images";

export type AgentProps = {
    name: string;
    title: string;
    phone: string;
    email: string;
    image: DataImagesProps;
    description: string;
    id: string;
}