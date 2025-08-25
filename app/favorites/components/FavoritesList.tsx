"use client"
import { useState } from "react";
import { LuSearch } from "react-icons/lu";

import FavoriteCard from "./FavoriteCard";

import type { HomeProps } from "@/types/homes";
import type { UserDataProps } from "@/types/users";


type FavoritesListProps = {
    className?: string;
    homes: HomeProps[];
    userObj: UserDataProps;
}


export default function FavoritesList({ className, homes, userObj, ...rest}: FavoritesListProps) {
    const [homeArr, setHomeArr] = useState(homes)

    const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const searchQ = e.currentTarget.search.value.toLowerCase().trim()
        // console.log("searchQ:", searchQ)

        const filtered = homes.filter((home) =>
            [home.adress1, home.city, home.postalcode, home.type].some((key) =>
                key &&
                typeof key !== "object" &&
                String(key).toLowerCase().includes(searchQ)
            )
        );

        // console.log("filtered:", filtered)
        setHomeArr(filtered)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div className={`centered-default py-24 ${className ? className : ""}`} {...rest}>
            <form
                action=""
                noValidate
                onChange={handleChange}
                onSubmit={handleSubmit}
                className="w-full h-12 flex items-center gap-2.5 relative body-2"
            >
                <LuSearch className="size-5 absolute left-3 text-c-body-2 pointer-events-none" />
                <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Søg i favoritter"
                    className="px-2.5 pl-10 size-full w-96 bg-c-white inset-shadow-default rounded-sm placeholder:text-c-body-2 focus:outline-0" />
            </form>

            <hr className="mt-4 mb-10" />

            <div className="flex flex-col gap-10">
                {homeArr.map((home, i) => <FavoriteCard home={home} userObj={userObj} key={i} />)}
            </div>
        </div>
    )
}