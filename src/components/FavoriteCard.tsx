"use client"

import Link from "next/link";
import { useRouter } from 'next/navigation'

import type { HomeProps, UserDataProps } from "@/types/homes";
import { addToFavorites } from "@/utils/fetches";
import { formatPrice, formatRemoveDecimals } from "@/utils/helpers";

import EnergyLabel from "@/components/EnergyLabel";

type FavoriteCardProps = {
    className?: string;
    home: HomeProps;
    userObj: UserDataProps;
}


export default function FavoriteCard({ className, home, userObj, ...rest}: FavoriteCardProps) {
    const router = useRouter()
    const userHomeArray = userObj.userData.homes

    const handleRemove = (e: any) => {
        e.preventDefault()
        
        userHomeArray.splice(userHomeArray.indexOf(home.id), 1)
        addToFavorites(userHomeArray, userObj.loginToken, userObj.userData.id)

        router.refresh()
    }

    return (
        <Link href={`/homes/${home.id}`}>
            <article className={`p-9 flex gap-12 inset-shadow-default rounded-sm hover-scale-lg ${className ? className : ""}`} {...rest}>
                <img src={home.images[0].formats.thumbnail.url} alt="" className="w-70 h-35 rounded-sm" />

                <div className="flex flex-col gap-2.5">
                    <h2 className="heading-4">
                        {home.adress1}
                    </h2>
                    <h3 className="body-2">
                        {home.postalcode} {home.city}
                    </h3>
                    <p className="body-2">
                        <span className="body-6">{home.type}</span> · Ejerudgift: {formatPrice(home.cost)} kr.
                    </p>
                </div>

                <div className="ml-auto flex flex-col justify-between items-end">
                    <div className="flex gap-20">
                        <div className="flex gap-7">
                            <EnergyLabel label="A" />
                            <p className="body-2">
                                {home.rooms.slice(0, 1)} værelser · {formatRemoveDecimals(home.floorplan.size)} m²
                            </p>
                        </div>

                        <p className="body-6">
                            Kr. {formatPrice(home.price)}
                        </p>
                    </div>

                    <button className="button py-4 hover-75" onClick={handleRemove}>
                        Fjern fra favoritter
                    </button>
                </div>
            </article>
        </Link>
    )
}