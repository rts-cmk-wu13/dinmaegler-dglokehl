"use client"

import { useState } from "react";
import { IoImageOutline, IoLayersOutline, IoLocationOutline, IoHeartOutline, IoHeartSharp, IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

import type { HomeProps, UserDataProps } from "@/types/homes";
import { formatPrice } from "@/utils/helpers";

import FavoriteButton from "./FavoriteButton";

type HouseLightboxProps = {
    className?: string;
    userObj?: UserDataProps;
    home: HomeProps;
}

export default function HouseLightbox({ className, userObj, home, ...rest}: HouseLightboxProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [lightboxType, setLightboxType] = useState("");
    const [galleryIndex, setgalleryIndex] = useState(0);

    console.log("isOpen load:", isOpen)
    console.log(home.images)

    const handleLightboxButton = (e: any) => {
        if (!isOpen) {
            setIsOpen(true)
        }
        console.log("isOpen update:", isOpen)
        
        console.log(e.currentTarget.id)
        if (e.currentTarget.id === "galleryBtn") {
            setLightboxType("gallery")
        }
        if (e.currentTarget.id === "planBtn") {
            setLightboxType("plan")
        }
        if (e.currentTarget.id === "mapBtn") {
            setLightboxType("map")
        }
    }

    const handleGallery = (e: any) => {
        console.log(galleryIndex)

        if (e.currentTarget.id === "galleryL") {
            if (galleryIndex > 0) {
                setgalleryIndex(galleryIndex - 1)
            } else {
                setgalleryIndex(home.images.length - 1)
            }
        }

        if (e.currentTarget.id === "galleryR") {
            if (galleryIndex < home.images.length - 1) {
                setgalleryIndex(galleryIndex + 1)
            } else {
                setgalleryIndex(0)
            }
        }
    }

    return (
        <>
            <div className={isOpen ? "w-screen h-screen p-16 fixed inset-0 z-999999 bg-black/75 flex justify-center items-center" : ""}>
                {isOpen && <IoClose className="size-14 absolute top-8 right-8 text-c-white hover-scale-sm" onClick={() => setIsOpen(false)} />}

                {isOpen && lightboxType === "map" ? (
                    <iframe src={`https://www.openstreetmap.org/export/embed.html?bbox=${home.long}%2C${home.lat}%2C${home.long}%2C${home.lat}&amp;layer=mapnik&amp;marker=${home.lat}%2C${home.long}`} className="size-full"></iframe>
                ) : (
                    <img
                        src={
                            isOpen && lightboxType === "gallery" ? home.images[galleryIndex].url :
                            isOpen && lightboxType === "plan" ? home.floorplan.url : 
                            home.images[0].url
                        }
                        alt=""
                        className={`object-cover ${isOpen ? "size-fit" :"w-full h-195"}`}
                    />
                )}

                {isOpen && lightboxType === "gallery" &&
                    <>
                        <IoChevronBack id="galleryL" className="size-12 absolute left-4 text-c-white hover-scale-sm" onClick={handleGallery} />
                        <IoChevronForward id="galleryR" className="size-12 absolute right-4 text-c-white hover-scale-sm" onClick={handleGallery} />
                    </>
                }
            </div>


            <div className="pt-10 max-w-maxw-default">
                <div className="flex justify-between">
                    <div className="heading-4">
                        <h1>
                            {home.adress1}
                        </h1>
                        <h2>
                            {home.postalcode} {home.city}
                        </h2>
                    </div>

                    <ul className={`flex justify-center items-center gap-12 *:*:size-12 *:*:cursor-pointer ${isOpen ? "w-fit fixed inset-x-1/2 translate-x-[-50%] bottom-12 z-9999999 text-c-white *:*:bg-transparent" : ""}`} {...rest}>
                        <li>
                            <IoImageOutline id="galleryBtn" className="hover-scale-sm" onClick={handleLightboxButton}/>
                        </li>
                        <li>
                            <IoLayersOutline id="planBtn" className="hover-scale-sm" onClick={handleLightboxButton}/>
                        </li>
                        <li>
                            <IoLocationOutline id="mapBtn" className="hover-scale-sm" onClick={handleLightboxButton}/>
                        </li>
            
                        {userObj && (
                            <li>
                                <FavoriteButton
                                    className="*:size-full"
                                    homeId={home.id}
                                    userObj={userObj}
                                    icons={{ outline: <IoHeartOutline />, fill: <IoHeartSharp />}}
                                />
                            </li>
                        )}
                    </ul>

                    <h2 className="heading-2">
                        Kr. {formatPrice(home.price)}
                    </h2>
                </div>
            </div>
        </>
    )
}