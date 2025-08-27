"use client"
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation'

import EnergyLabel from "./EnergyLabel";
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
            <article className={`p-9 max-sm:p-4 flex max-lg:flex-col max-lg:items-center justify-between gap-12 max-lg:gap-5 inset-shadow-default rounded-sm hover-scale-lg ${className ? className : ""}`} {...rest}>
                <Image
                    src={home.images[0].formats.thumbnail.url}
                    alt={home.adress1}
                    width={home.images[0].formats.thumbnail.width}
                    height={home.images[0].formats.thumbnail.height}
                    className="max-w-70 w-full h-36 rounded-sm object-cover"
                />

                <div className="flex-1 max-md:w-full flex max-sm:flex-col justify-between gap-6 xl:gap-28 max-sm:text-center">
                    <div className="flex flex-col gap-2.5">
                        <h2 className="heading-4">
                            {home.adress1}
                        </h2>
                        <h3 className="body-2">
                            {home.postalcode} {home.city} {home.adress2 && `· ${home.adress2}`}
                        </h3>
                        <p className="body-2">
                            <span className="body-6">{home.type}</span> · Ejerudgift: {formatPrice(home.cost)} kr.
                        </p>
                    </div>

                    <div className="flex-1 flex flex-col justify-between items-end max-sm:items-center max-lg:gap-5 ">
                        <div className="w-full flex max-lg:flex-col max-sm:items-center max-lg:items-end max-lg:gap-5 justify-between">
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
                </div>
            </article>
        </Link>
    )
}