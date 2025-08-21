import HouseCard from "./HouseCard";

import type { HomeProps } from "@/types/homes";
import type { UserDataProps } from "@/types/users";

type CardGridProps = {
    className?: string;
    data: HomeProps[];
    userObj?: UserDataProps;
}


export default async function HouseGrid({ className, data, userObj, ...rest}: CardGridProps) {
    return (
        <div className={`w-full grid grid-cols-2 gap-7 ${className ? className : ""}`} {...rest}>
            {data.map((home, i: number) => <HouseCard home={home} key={home.id} userObj={userObj} />)}
        </div>
    )
}