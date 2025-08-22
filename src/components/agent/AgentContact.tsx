import Link from "next/link"
import Image from "next/image";
import { FaPhone, FaPaperPlane, FaInstagram, FaLinkedinIn, FaSkype } from "react-icons/fa6";

import type { AgentProps } from "@/types/agents";

type AgentContactProps = {
    className?: string;
    agent: AgentProps;
    outline?: boolean;
}

export default function AgentContact({ className, agent, outline, ...rest}: AgentContactProps) {
    return (
        <article className={`lg:w-fit flex max-lg:flex-col max-lg:items-center gap-8 ${outline ? "inset-shadow-[0_0_0_1px] inset-shadow-c-shape-1" : ""} ${className ? className : ""}`} {...rest}>
            <figure className="relative">
                <Image
                    src={agent.image.url}
                    alt={agent.name}
                    width={agent.image.width}
                    height={agent.image.height}
                    className="size-70 object-cover rounded-sm"
                />
                <ul className="px-6 py-3 flex gap-5 absolute bottom-8 left-0 bg-c-primary-1 text-c-white">
                    <Link href="https://www.instagram.com" target="_blank">
                        <FaInstagram className="size-5 hover-75" />
                    </Link>

                    <Link href="https://www.linkedin.com" target="_blank">
                        <FaLinkedinIn className="size-5 hover-75" />
                    </Link>

                    <Link href="https://teams.live.com" target="_blank">
                        <FaSkype className="size-5 hover-75" />
                    </Link>
                </ul>
            </figure>

            <div className="py-2.5">
                <h3 className="heading-3">
                    {agent.name}
                </h3>
                <p className="mt-1 body-1 text-c-body-2">
                    {agent.title}
                </p>

                <hr className="mt-4 mb-5" />

                <div className="flex flex-col gap-3 body-1 *:flex *:items-center *:gap-4 *:hover:underline">
                    <Link href={`tel:${agent.phone}`}>
                        <FaPhone className="size-5" /> {agent.phone}
                    </Link>

                    <Link href={`mailto:${agent.email}`}>
                        <FaPaperPlane className="size-5" /> {agent.email}
                    </Link>
                </div>
            </div>
        </article>
    )
}