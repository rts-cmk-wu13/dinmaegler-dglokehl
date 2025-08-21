import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

import type { AgentProps } from "@/types/agents"


type AgentCardProps = {
    className?: string;
    agent: AgentProps;
}

export default function AgentCard({ className, agent, ...rest}: AgentCardProps) {
    return (
        <Link href={`/agents/${agent.id}`}>
            <article className={`rounded-sm shadow-default hover-scale-lg ${className ? className : ""}`} {...rest}>
                    <Image
                        src={agent.image.formats.thumbnail.url}
                        alt={agent.name}
                        width={agent.image.formats.thumbnail.width}
                        height={agent.image.formats.thumbnail.height}
                        className="w-full h-56 object-cover rounded-t-sm"
                    />

                <div className="p-7 text-center">
                    <h3 className="mb-1 heading-3">
                        {agent.name}
                    </h3>
                    <p className="body-1 text-c-body-2">
                        {agent.title}
                    </p>

                    {/* <div className="mt-4 flex justify-center items-center gap-4 *:size-6 *:*:size-full">
                        <Link href={`tel:${agent.phone}`} className="hover-scale-sm">
                            <FaPhone />
                        </Link>

                        <Link href={`mailto:${agent.email}`} className="hover-scale-sm">
                            <FaEnvelope />
                        </Link>
                    </div> */}
                </div>
            </article>
        </Link>
    )
}