"use client"

import { useState } from "react";
import type { UserDataProps } from "@/types/homes";

import { addToFavorites } from "@/utils/fetches";

type FavoriteButtonProps = {
    className?: string;
    homeId: string;
    userObj: UserDataProps;
    icons: {
        outline: React.ReactNode;
        fill: React.ReactNode;
    }
}


export default function FavoriteButton({ icons, className, homeId, userObj, ...rest}: FavoriteButtonProps) {
    // console.log(userObj)
    const userHomeArray = userObj.userData.homes
    // console.log(userHomeArray)

    const [favorite, setFavorite] = useState(userHomeArray.includes(homeId));

    
    const handleFavorite = (e: any) => {
        e.preventDefault()

        if (!userHomeArray.includes(homeId)) {
            userHomeArray.push(homeId)
        } else {
            userHomeArray.splice(userHomeArray.indexOf(homeId), 1)
        }

        addToFavorites(userHomeArray, userObj.loginToken, userObj.userData.id)

        setFavorite(!favorite)

        // console.log("homeId: ", homeId, "userHomeArray: ", userHomeArray)
    }

    return (
        <figure
            className={`grid place-items-center bg-c-white rounded-full cursor-pointer hover-scale-sm ${className ? className : ""}`}
            onClick={handleFavorite}
            {...rest}>

            {favorite ? icons.fill : icons.outline}

        </figure>
    )
}