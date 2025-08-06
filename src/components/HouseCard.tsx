import type { HomeProps } from "@/types/homes"

import { FaRegHeart, FaHeart } from "react-icons/fa6";

import EnergyLabel from "./EnergyLabel"


type HouseCardProps = {
    children?: React.ReactNode
    className?: string;
    obj: HomeProps;
}


export default function HouseCard({ children, className, obj, ...rest}: HouseCardProps) {
    return (
        <article className={`relative rounded-sm shadow-[0_10px_30px] shadow-black/6 ${className ? className : ""}`} {...rest}>
            <figure className="size-9 grid place-items-center absolute top-6 right-6 bg-c-white rounded-full cursor-pointer">
                <FaRegHeart className="size-5" />
            </figure>

            <img src={obj.images[0].formats.thumbnail.url} alt="" className="w-full h-56 object-cover rounded-t-sm" />

            <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2.5">
                    <h4 className="heading-4">
                        {obj.adress1}
                    </h4>
                    <p className="body-2">
                        {String(obj.postalcode)} {obj.city}
                    </p>
                    <p className="body-2">
                        <span className="body-6">{obj.type}</span> · Ejerudgift: {obj.cost} kr.
                    </p>
                </div>

                <hr />

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-7">
                        <EnergyLabel label={obj.energylabel} />

                        <p className="body-2">
                            {obj.rooms} værelser · {String(obj.lotsize)} m²
                        </p>
                    </div>

                    <p className="body-6">
                        Kr. {String(obj.price)}
                    </p>
                </div>
            </div>
        </article>
    )
}