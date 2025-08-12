"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type PriceRangeProps = {
    className?: string;
};


export default function PriceRange({ className, ...rest }: PriceRangeProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(7999000);


    function handleText(num: number, type: string) {
        if (type === "min") {
            setMinPrice(num)
        }
        if (type === "max") {
            setMaxPrice(num)
        }
    }

    function handleSearch(num: number, type: string) {
        const params = new URLSearchParams(searchParams);

        if (type === "min") {
            params.set('price_gte', `${String(num)}`);
            params.set('price_lte', `${String(maxPrice)}`);
        }
        if (type === "max") {
            params.set('price_gte', `${String(minPrice)}`);
            params.set('price_lte', `${String(num)}`);
        }

        if (minPrice === 0 && maxPrice === 7999000) {
            params.delete('price_gte');
            params.delete('price_lte');
        }

        console.log(params)
        replace(`${pathname}?${params}`);
        // window.history.pushState(null, '', `${pathname}?${params}`)
    }


    return (
        <div className={`w-135 flex flex-col ${className ? className : ""}`}>
            <h3 className="mb-1">Pris-interval</h3>

            <div className="w-full *:w-full">
                <input
                    type="range"
                    name="price"
                    id="price"
                    min={0}
                    max={7999000}
                    step={31996}
                    onChange={(e) => handleText(Number(e.target.value), "min")}
                    onMouseUp={(e) => handleSearch(Number(e.currentTarget.value), "min")}
                />
                <input
                    type="range"
                    name="price"
                    id="price"
                    min={0}
                    max={7999000}
                    step={31996}
                    onChange={(e) => handleText(Number(e.target.value), "max")}
                    onMouseUp={(e) => handleSearch(Number(e.currentTarget.value), "max")}
                />
            </div>

            <div className="w-full flex justify-between">
                <p className="body-2 text-c-body-2">
                    {minPrice}kr.
                </p>
                <p className="body-2 text-c-body-2">
                    {maxPrice}kr.
                </p>
            </div>
        </div>
    );
}
