import Link from "next/link";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

import EnergyLabel from "./EnergyLabel";
import FavoriteButton from "./FavoriteButton";

import { formatPrice, formatRemoveDecimals } from "@/utils/helpers";
import type { HomeProps } from "@/types/homes"
import type { UserDataProps } from "@/types/users";

type HouseCardProps = {
    className?: string;
    home: HomeProps;
    userObj?: UserDataProps;
}


export default async function HouseCard({ className, home, userObj, ...rest}: HouseCardProps) {
    return (
        <Link href={`/homes/${home.id}`}>
            <article className={`relative rounded-sm shadow-default hover-scale-lg ${className ? className : ""}`} {...rest}>
                {userObj && <FavoriteButton
                    className="size-9 absolute top-6 right-6 z-99 *:size-5"
                    homeId={home.id}
                    userObj={userObj}
                    icons={{ outline: <FaRegHeart />, fill: <FaHeart />}}
                />}

                <img src={home.images[0].formats.thumbnail.url} alt="" className="w-full h-56 object-cover rounded-t-sm" />

                <div className="p-6 flex flex-col gap-4">
                    <div className="flex flex-col gap-2.5">
                        <h4 className="heading-4">
                            {home.adress1}
                        </h4>
                        <p className="body-2">
                            {String(home.postalcode)} {home.city} {home.adress2 && `· ${home.adress2}`}
                        </p>
                        <p className="body-2">
                            <span className="body-6">{home.type}</span> · Ejerudgift: {formatPrice(home.cost)} kr.
                        </p>
                    </div>

                    <hr />

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-7">
                            <EnergyLabel label={home.energylabel} />

                            <p className="body-2">
                                {home.rooms.slice(0,1)} værelser · {formatRemoveDecimals(home.floorplan.size)} m²
                            </p>
                        </div>

                        <p className="body-6">
                            Kr. {formatPrice(home.price)}
                        </p>
                    </div>
                </div>
            </article>
        </Link>
    )
}