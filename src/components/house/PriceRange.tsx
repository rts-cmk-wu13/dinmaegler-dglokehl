"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Range, getTrackBackground } from "react-range";

import { formatPrice } from "@/utils/helpers";

type PriceRangeProps = {
    className?: string;
};


export default function PriceRange({ className, ...rest }: PriceRangeProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();


    const STEP = 31996;
    const MIN = 0;
    const MAX = 7999000;

    const [values, setValues] = useState([MIN, MAX]);


    const handleMouseUp = () => {
        const params = new URLSearchParams(searchParams);

        params.set('price_gte', `${String(values[0])}`);
        params.set('price_lte', `${String(values[1])}`);

        if (values[0] === MIN && values[1] === MAX) {
            params.delete('price_gte');
            params.delete('price_lte');
        }

        console.log(params)
        replace(`${pathname}?${params}`)
    }


    return (
        <div className={`w-full flex flex-col ${className ? className : ""}`}>
            <h3 className="mb-1 body-2 text-c-body-1">Pris-interval</h3>

            <div className="w-full *:w-full">
                <Range
                    values={values}
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    onChange={(values) => setValues(values)}
                    renderTrack={({ props, children }) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            className="w-full h-5 flex"
                        >
                            <div
                                ref={props.ref}
                                className="h-1 w-full rounded-full bg-c-body-3 self-center"
                                style={{
                                    height: "5px",
                                    width: "100%",
                                    borderRadius: "4px",
                                    background: getTrackBackground({
                                    values,
                                    colors: ["#D5E0EA", "#7B7B7B", "#D5E0EA"],
                                    min: MIN,
                                    max: MAX
                                }),
                                alignSelf: "center",
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ props, isDragged }) => (
                        <div
                            className="size-5 bg-c-body-3 rounded-full focus:outline-0 duration-75"
                            {...props}
                            key={props.key}
                            onMouseUp={handleMouseUp}
                            style={{
                                ...props.style,
                                backgroundColor: isDragged ? "#7B7B7B" : "#D5E0EA"
                            }}
                        >
                        </div>
                    )}
                />
            </div>

            <div className="mt-1 w-full flex justify-between">
                <p className="body-2 text-c-body-2">
                    {formatPrice(values[0])} kr.
                </p>
                <p className="body-2 text-c-body-2">
                    {formatPrice(values[1])} kr.
                </p>
            </div>
        </div>
    );
}
