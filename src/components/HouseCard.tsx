import Link from "next/link";

import type { HomeProps, UserDataProps } from "@/types/homes"

import EnergyLabel from "./EnergyLabel"
import FavoriteButton from "./FavoriteButton";

type HouseCardProps = {
    children?: React.ReactNode
    className?: string;
    home: HomeProps;
    userObj?: UserDataProps;
}


export default async function HouseCard({ children, className, home, userObj, ...rest}: HouseCardProps) {
    return (
        <Link href={`/homes/${home.id}`} className="z-1">
            <article className={`relative rounded-sm shadow-[0_10px_30px] shadow-black/6 ${className ? className : ""}`} {...rest}>
                {userObj && <FavoriteButton homeId={home.id} userObj={userObj} />}

                <img src={home.images[0].formats.thumbnail.url} alt="" className="w-full h-56 object-cover rounded-t-sm" />

                <div className="p-6 flex flex-col gap-4">
                    <div className="flex flex-col gap-2.5">
                        <h4 className="heading-4">
                            {home.adress1}
                        </h4>
                        <p className="body-2">
                            {String(home.postalcode)} {home.city}
                        </p>
                        <p className="body-2">
                            <span className="body-6">{home.type}</span> · Ejerudgift: {home.cost} kr.
                        </p>
                    </div>

                    <hr />

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-7">
                            <EnergyLabel label={home.energylabel} />

                            <p className="body-2">
                                {home.rooms.slice(0,1)} værelser · {String(home.lotsize)} m²
                            </p>
                        </div>

                        <p className="body-6">
                            Kr. {String(home.price)}
                        </p>
                    </div>
                </div>
            </article>
        </Link>
    )
}