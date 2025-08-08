import AgentCard from "./AgentCard";

import type { AgentProps } from "@/types/agents"

type AgentGridProps = {
    children?: React.ReactNode
    className?: string;
    amount?: number;
}

export default async function AgentGrid({ children, className, amount, ...rest}: AgentGridProps) {
    let link = "https://dinmaegler.onrender.com/agents"
    if (amount) {
        link = `https://dinmaegler.onrender.com/agents?_limit=${amount}`
    }

    const data = await fetch(link)
    let agents = await data.json()
    console.log(agents)

    return (
        <div className={`w-full grid grid-cols-3 gap-7 ${className ? className : ""}`} {...rest}>
            {agents.map((home: AgentProps, i: number) => <AgentCard obj={home} key={i} />)}
        </div>
    )
}