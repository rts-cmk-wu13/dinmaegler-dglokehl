"use client"

import Form from "next/form";
import Link from "next/link"
import { useState } from "react"

import Button from "../Button"

import { formatPrice } from "@/utils/helpers"
import { HomeProps } from "@/types/homes"
import Image from "next/image";

type SearchProps = {
    children?: React.ReactNode
    className?: string;
    agentId?: string;
}


export default function Search({ children, className, agentId, ...rest}: SearchProps) {
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
        if (e.currentTarget.search.value === "") {
            e.preventDefault()
        }
    }


    return (
        <Form
            action="/homes/"
            noValidate
            onChange={handleChange}
            onSubmit={handleSubmit}
            className={`h-12 flex gap-2.5 body-2 *:*:rounded-sm ${className ? className : ""}`}
            {...rest}
        >
            <div className="w-full relative flex items-center">

                {children}

                <div className="w-full max-h-128 overflow-scroll absolute top-12 z-99 bg-c-white shadow-default">
                    {homeArr.map((home, i) =>
                        <Link href={`/homes/${home.id}`} className="p-4 w-full flex justify-between items-center bg-c-white select-none hover:bg-black/10 duration-75 rounded-sm" key={i}>
                            <div className="flex items-center gap-4">
                                <Image
                                    src={home.images[0].formats.thumbnail.url}
                                    alt={home.adress1}
                                    width={home.images[0].formats.thumbnail.width}
                                    height={home.images[0].formats.thumbnail.height}
                                    className="w-20 h-14 object-cover rounded-sm"
                                />

                                <div className="body-2 flex gap-1 max-lg:flex-col">
                                    <p>
                                        {home.adress1}
                                    </p>
                                    {!agentId ? (
                                        <p className="max-lg:hidden">·</p>
                                    ) : (
                                        <br />
                                    )}
                                    <p className="text-c-body-2">
                                        {home.postalcode} {home.city}
                                    </p>
                                </div>
                            </div>

                            {!agentId && (
                                <p className="body-2 max-sm:hidden">
                                    Kr. {formatPrice(home.cost)}
                                </p>
                            )}
                        </Link>
                    )}
                </div>
            </div>

            {!agentId && (
                <Button className="!px-10 !py-0 max-sm:hidden">
                    Søg
                </Button>
            )}
        </Form>
    )
}