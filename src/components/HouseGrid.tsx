import HouseCard from "@/components/HouseCard";

import type { HomeProps } from "@/types/homes";

type HouseGridProps = {
    children?: React.ReactNode
    className?: string;
    amount?: number;
}

export default async function HouseGrid({ children, className, amount, ...rest}: HouseGridProps) {
    let link = "https://dinmaegler.onrender.com/homes"
    if (amount) {
        link = `https://dinmaegler.onrender.com/homes?_limit=${amount}`
    }

    const data = await fetch(link)
    let homes = await data.json()
    console.log(homes)

    return (
        <div className={`w-full grid grid-cols-2 gap-7 ${className ? className : ""}`} {...rest}>
            {homes.map((home: HomeProps, i: number) => <HouseCard obj={home} key={i} />)}
        </div>
    )
}