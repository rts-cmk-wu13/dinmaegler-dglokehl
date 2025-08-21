"use client"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link"

import Button from "../Button"

import { formatPrice } from "@/utils/helpers"
import { HomeProps } from "@/types/homes"

type SearchProps = {
    children?: React.ReactNode
    className?: string;
    agentId?: string;
}


export default function Search({ children, className, agentId, ...rest}: SearchProps) {
    const router = useRouter()
    const searchParams = useSearchParams();

    const [homeArr, setHomeArr] = useState<HomeProps[]>([])

    const handleChange = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const searchQ = e.currentTarget.search.value.toLowerCase().trim()
        // console.log("searchQ:", searchQ)

        const res = await fetch("https://dinmaegler.onrender.com/homes")
        const homes: HomeProps[] = await res.json()

        const filtered = homes.filter((home) =>
            agentId ? home.agent.id === agentId &&
            [home.adress1, home.city, home.postalcode, home.type].some((key) =>
                key &&
                typeof key !== "object" &&
                searchQ !== "" &&
                String(key).toLowerCase().includes(searchQ)
            ) :
            [home.adress1, home.city, home.postalcode, home.type].some((key) =>
                key &&
                typeof key !== "object" &&
                searchQ !== "" &&
                String(key).toLowerCase().includes(searchQ)
            )
        );

        // console.log("filtered:", filtered)
        setHomeArr(filtered)
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const searchQ = e.currentTarget.search.value.toLowerCase().trim()
        // console.log("searchQ:", searchQ)

        if (searchQ === "") {
            return
        }
        const params = new URLSearchParams(searchParams);
        params.set('search', `${String(searchQ)}`);
        router.push(`/homes?${params}`)
    }


    return (
        <form
            action=""
            noValidate
            onChange={handleChange}
            onSubmit={handleSubmit}
            className={`h-12 flex gap-2.5 body-2 *:*:rounded-sm ${className ? className : ""}`}
            {...rest}
        >
            <div className="w-full relative flex items-center">

                {children}

                <div className="w-full max-h-128 overflow-scroll absolute top-12 z-999 bg-c-white shadow-default">
                    {homeArr.map((home, i) =>
                        <Link href={`/homes/${home.id}`} className="p-4 w-full flex justify-between items-center bg-c-white select-none hover:bg-black/10 duration-75 rounded-sm" key={i}>
                            <div className="flex items-center gap-4">
                                <img src={home.images[0].formats.thumbnail.url} alt="" className="w-20 h-14 object-cover rounded-sm" />

                                <p className="body-2">
                                    {home.adress1}
                                    {!agentId ? " · " : <br />}
                                    <span className="text-c-body-2">{home.postalcode} {home.city}</span>
                                </p>
                            </div>

                            {!agentId && (
                                <p className="body-2">
                                    Kr. {formatPrice(home.cost)}
                                </p>
                            )}
                        </Link>
                    )}
                </div>
            </div>

            {!agentId && (
                <Button className="!px-10 !py-0">
                    Søg
                </Button>
            )}
        </form>
    )
}