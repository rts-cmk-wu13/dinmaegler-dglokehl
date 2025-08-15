import HouseCard from "./HouseCard";
import AgentCard from "./AgentCard";

import type { HomeProps, UserDataProps } from "@/types/homes";
import type { AgentProps } from "@/types/agents";

type CardGridProps = {
    children?: React.ReactNode
    className?: string;
    data: HomeProps[] & AgentProps[];
    dataType: string;
    userObj?: UserDataProps;
}

export default async function CardGrid({ children, className, data, dataType, userObj, ...rest}: CardGridProps) {
    if (dataType === "homes") {
        return (
            <div className={`w-full grid grid-cols-2 gap-7 *:hover:scale-101 *:duration-200 ${className ? className : ""}`} {...rest}>
                {data.map((home, i: number) => <HouseCard home={home} key={home.id} userObj={userObj} />)}
            </div>
        )
    } else {
        return (
            <div className={`w-full grid grid-cols-3 gap-7 ${className ? className : ""}`} {...rest}>
                {data.map((agent: AgentProps, i: number) => <AgentCard obj={agent} key={agent.id} />)}
            </div>
        )
    }
}