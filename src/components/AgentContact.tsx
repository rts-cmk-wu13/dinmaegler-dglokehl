import Link from "next/link"
import { FaPhone, FaPaperPlane } from "react-icons/fa6";

import type { AgentProps } from "@/types/agents";

type AgentContactProps = {
    className?: string;
    agent: AgentProps;
    outline?: boolean;
}

export default function AgentContact({ className, agent, outline, ...rest}: AgentContactProps) {
    return (
        <article className={`w-fit flex gap-8 ${outline ? "inset-shadow-[0_0_0_1px] inset-shadow-c-shape-1" : ""} ${className ? className : ""}`} {...rest}>
            <figure className="relative">
                <img src={agent.image.url} alt="" className="size-70 object-cover" />
            </figure>

            <div className="py-2.5">
                <h3 className="heading-3">
                    {agent.name}
                </h3>
                <p className="mt-1 body-1 text-c-body-2">
                    {agent.title}
                </p>

                <hr className="mt-4 mb-5" />

                <Link href={`tel:${agent.phone}`} className="mb-3 flex items-center gap-4 body-1">
                    <FaPhone className="size-5" /> {agent.phone}
                </Link>

                <Link href={`mailto:${agent.email}`} className="flex items-center gap-4 body-1">
                    <FaPaperPlane className="size-5" /> {agent.email}
                </Link>
            </div>
        </article>
    )
}