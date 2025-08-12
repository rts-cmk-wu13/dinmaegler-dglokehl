import HouseCard from "./HouseCard";
import AgentCard from "./AgentCard";

import type { HomeProps } from "@/types/homes";
import type { AgentProps } from "@/types/agents";

type CardGridProps = {
    children?: React.ReactNode
    className?: string;
    data: HomeProps[] & AgentProps[];
    type: string;
}

export default async function CardGrid({ children, className, data, type, ...rest}: CardGridProps) {
    if (type === "homes") {
        return (
            <div className={`w-full grid grid-cols-2 gap-7 ${className ? className : ""}`} {...rest}>
                {data.map((home, i: number) => <HouseCard obj={home} key={home.id} />)}
            </div>
        )
    }
    if (type === "agents") {
        return (
            <div className={`w-full grid grid-cols-3 gap-7 ${className ? className : ""}`} {...rest}>
                {data.map((agent: AgentProps, i: number) => <AgentCard obj={agent} key={agent.id} />)}
            </div>
        )
    }
}