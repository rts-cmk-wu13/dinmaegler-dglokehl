import Link from "next/link";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

import type { AgentProps } from "@/types/agents"


type AgentCardProps = {
    children?: React.ReactNode
    className?: string;
    obj: AgentProps;
}

export default function AgentCard({ children, className, obj, ...rest}: AgentCardProps) {
    return (
        <article className={`rounded-sm shadow-[0_10px_30px] shadow-black/6 border-1 border-c-shape-1 ${className ? className : ""}`} {...rest}>
            <img src={obj.image.formats.thumbnail.url} alt="" className="w-full h-56 object-cover rounded-t-sm" />

            <div className="p-7 text-center">
                <h3 className="mb-1 heading-3">
                    {obj.name}
                </h3>
                <p className="body-1 text-c-body-2">
                    {obj.title}
                </p>

                <div className="mt-4 flex justify-center items-center gap-4 *:size-6 *:*:size-full">
                    <Link href={`tel:${obj.phone}`}>
                        <FaPhone />
                    </Link>

                    <Link href={`mailto:${obj.email}`}>
                        <FaEnvelope />
                    </Link>
                </div>
            </div>
        </article>
    )
}