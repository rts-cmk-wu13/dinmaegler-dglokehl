"use client"
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation'

import EnergyLabel from "@/components/house/EnergyLabel";
import Button from "@/components/Button";

import { formatPrice, formatRemoveDecimals } from "@/utils/helpers";
import { addToFavorites } from "@/api/fetches";

import type { HomeProps } from "@/types/homes";
import type { UserDataProps } from "@/types/users";

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
                <Image
                    src={home.images[0].formats.thumbnail.url}
                    alt={home.adress1}
                    width={home.images[0].formats.thumbnail.width}
                    height={home.images[0].formats.thumbnail.height}
                    className="w-70 h-35 rounded-sm"
                />

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

                    <Button className="!py-4" onClick={handleRemove}>
                        Fjern fra favoritter
                    </Button>
                </div>
            </article>
        </Link>
    )
}