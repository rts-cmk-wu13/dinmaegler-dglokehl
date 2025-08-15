"use client"

import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import type { UserDataProps } from "@/types/homes";

import { addToFavorites } from "@/utils/fetches";

type FavoriteButtonProps = {
    children?: React.ReactNode
    className?: string;
    homeId: string;
    userObj: UserDataProps;
}


export default function FavoriteButton({ children, className, homeId, userObj, ...rest}: FavoriteButtonProps) {
    // console.log(userObj)
    const userHomeArray = userObj.userData.homes
    console.log(userHomeArray)

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
            className={`size-9 grid place-items-center absolute top-6 right-6 z-99 bg-c-white rounded-full cursor-pointer *:size-5 ${className ? className : ""}`}
            {...rest}
            onClick={handleFavorite}>

            {favorite ? <FaHeart /> : <FaRegHeart />}

        </figure>
    )
}