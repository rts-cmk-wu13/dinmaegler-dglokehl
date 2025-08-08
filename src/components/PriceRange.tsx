"use client"

type PriceRangeProps = {
    className?: string;
}


export default function PriceRange({ className, ...rest}: PriceRangeProps) {
    const priceDrag = () => {
        const priceElm = document.querySelector("#price")
        // console.log(priceElm.value)
    }

    return (
        <input type="range" name="price" id="price" className={`w-full ${className ? className : ""}`} min={0} max={7999000} onChange={priceDrag} />
    )
}