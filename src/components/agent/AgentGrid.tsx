import AgentCard from "./AgentCard";

import type { AgentProps } from "@/types/agents";

type AgentGridProps = {
    className?: string;
    data: AgentProps[];
}

export default async function AgentGrid({ className, data, ...rest}: AgentGridProps) {
    return (
        <div className={`w-full grid grid-cols-3 gap-7 ${className ? className : ""}`} {...rest}>
            {data.map((agent: AgentProps, i: number) => <AgentCard agent={agent} key={agent.id} />)}
        </div>
    )
}