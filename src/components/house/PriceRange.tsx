"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { formatPrice } from "@/utils/helpers";

type PriceRangeProps = {
    className?: string;
};


export default function PriceRange({ className, ...rest }: PriceRangeProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(7999000);


    function handleChange(e: any) {
        const num = Number(e.currentTarget.value)
        if (e.currentTarget.id === "min") {
            setMinPrice(num)
        }
        if (e.currentTarget.id === "max") {
            setMaxPrice(num)
        }
    }

    function handleMouseUp(e: any) {
        const num = Number(e.currentTarget.value)
        const params = new URLSearchParams(searchParams);

        if (e.currentTarget.id === "min") {
            params.set('price_gte', `${String(num)}`);
            params.set('price_lte', `${String(maxPrice)}`);
        }
        if (e.currentTarget.id === "max") {
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
        <div className={`w-full flex flex-col ${className ? className : ""}`}>
            <h3 className="mb-1">Pris-interval</h3>

            <div className="w-full *:w-full flex items-center *:appearance-none *:[&::-moz-range-track]:h-1 *:[&::-moz-range-thumb]:size-5 *:[&::-moz-range-thumb]:border-0 *:[&::-moz-range-thumb]:bg-c-body-3 *:[&::-moz-range-thumb]:hover:bg-c-body-2 *:[&::-moz-range-thumb]:cursor-pointer *:[&::-moz-range-thumb]:duration-75 *:[&::-moz-range-progress]:h-1">
                <input
                    type="range"
                    name="min"
                    id="min"
                    className="[&::-moz-range-progress]:bg-c-body-3 [&::-moz-range-track]:bg-c-body-2 [&::-moz-range-track]:rounded-l-full [&::-moz-range-progress]:rounded-l-full"
                    min={0}
                    max={maxPrice}
                    step={31996}
                    onChange={handleChange}
                    onMouseUp={handleMouseUp}
                />
                <input
                    type="range"
                    name="max"
                    id="max"
                    className="[&::-moz-range-track]:bg-c-body-3 [&::-moz-range-progress]:bg-c-body-2 [&::-moz-range-track]:rounded-r-full [&::-moz-range-progress]:rounded-r-full"
                    min={minPrice}
                    max={7999000}
                    step={31996}
                    onChange={handleChange}
                    onMouseUp={handleMouseUp}
                />
            </div>

            <div className="w-full flex justify-between">
                <p className="body-2 text-c-body-2">
                    {formatPrice(minPrice)}kr.
                </p>
                <p className="body-2 text-c-body-2">
                    {formatPrice(maxPrice)}kr.
                </p>
            </div>
        </div>
    );
}
