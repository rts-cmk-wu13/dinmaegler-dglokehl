import AgentCard from "./AgentCard";

import type { AgentProps } from "@/types/agents"

type AgentGridProps = {
    children?: React.ReactNode
    className?: string;
    amount?: number;
}

export default async function AgentGrid({ children, className, amount, ...rest}: AgentGridProps) {
    const data = await fetch('https://dinmaegler.onrender.com/agents')
    let agents = await data.json()

    if (amount) {
        if (amount > agents.length) {
            amount = agents.length | 0
        }
        agents = agents.slice(0, amount)
    }
    console.log(agents)

    return (
        <div className={`w-full grid grid-cols-3 gap-7 ${className ? className : ""}`} {...rest}>
            {
                agents.map((home: AgentProps, i: number) => {
                    return <AgentCard obj={home} key={i} />
                }
            )}
        </div>
    )
}