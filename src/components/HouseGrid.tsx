import HouseCard from "@/components/HouseCard";

import type { HomeProps } from "@/types/homes";

type HouseGridProps = {
    children?: React.ReactNode
    className?: string;
    amount?: number;
}


export default async function HouseGrid({ children, className, amount, ...rest}: HouseGridProps) {
    const data = await fetch('https://dinmaegler.onrender.com/homes')
    let homes = await data.json()

    if (amount) {
        if (amount > homes.length) {
            amount = homes.length | 0
        }
        homes = homes.slice(0, amount)
    }
    console.log(homes)

    return (
        <div className={`w-full grid grid-cols-2 gap-7 ${className ? className : ""}`} {...rest}>
            {
                homes.map((home: HomeProps, i: number) => {
                    return <HouseCard obj={home} key={i} />
                }
            )}
        </div>
    )
}