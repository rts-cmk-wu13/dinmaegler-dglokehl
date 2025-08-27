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
        <article className={`lg:w-fit flex max-lg:flex-col max-lg:items-center gap-8 max-sm:gap-4 rounded-sm ${outline ? "inset-shadow-default" : ""} ${className ? className : ""}`} {...rest}>
            <figure className="relative overflow-hidden rounded-sm">
                <Image
                    src={agent.image.url}
                    alt={agent.name}
                    width={agent.image.width}
                    height={agent.image.height}
                    className="size-70 max-sm:w-full object-cover"
                />
                <ul className="px-6 py-3 flex sm:gap-5 absolute bottom-8 left-0 bg-c-primary-1 text-c-white *:*:size-5 max-sm:*:*:size-7 max-sm:w-full max-sm:justify-around max-sm:inset-x-0 max-sm:bottom-0">
                    <Link href="https://www.instagram.com" target="_blank">
                        <FaInstagram className="hover-75" />
                    </Link>

                    <Link href="https://www.linkedin.com" target="_blank">
                        <FaLinkedinIn className="hover-75" />
                    </Link>

                    <Link href="https://teams.live.com" target="_blank">
                        <FaSkype className="hover-75" />
                    </Link>
                </ul>
            </figure>

            <div className="py-2.5 wrap-anywhere">
                <h3 className="heading-3">
                    {agent.name}
                </h3>
                <p className="mt-1 body-1 text-c-body-2">
                    {agent.title}
                </p>

                <hr className="mt-4 mb-5 w-full h-[1px] bg-c-shape-1 border-0" />

                <div className="flex flex-col gap-3 body-1 *:flex *:items-center *:gap-4 *:hover:underline *:*:size-5">
                    <Link href={`tel:${agent.phone}`}>
                        <FaPhone /> {agent.phone}
                    </Link>

                    <Link href={`mailto:${agent.email}`}>
                        <FaPaperPlane /> {agent.email}
                    </Link>
                </div>
            </div>
        </article>
    )
}