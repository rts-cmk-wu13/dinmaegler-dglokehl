"use client"

import Image from "next/image";
import { useState } from "react";
import { IoImageOutline, IoLayersOutline, IoLocationOutline, IoHeartOutline, IoHeartSharp, IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

import FavoriteButton from "./FavoriteButton";

import { formatPrice } from "@/utils/helpers";
import type { HomeProps } from "@/types/homes";
import type { UserDataProps } from "@/types/users";

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
            <div className={isOpen ? "w-screen h-screen fixed inset-0 z-999999 bg-black/75 flex justify-center items-center" : ""}>
                {isOpen && <IoClose className="size-14 absolute top-8 right-8 text-c-white hover-scale-sm" onClick={() => setIsOpen(false)} />}

                {isOpen && lightboxType === "map" ? (
                    <iframe src={`https://www.openstreetmap.org/export/embed.html?bbox=${home.long}%2C${home.lat}%2C${home.long}%2C${home.lat}&amp;layer=mapnik&amp;marker=${home.lat}%2C${home.long}`} className="size-full p-24 pb-36"></iframe>
                ) : (
                    <Image
                        src={
                            isOpen && lightboxType === "gallery" ? home.images[galleryIndex].url :
                            isOpen && lightboxType === "plan" ? home.floorplan.url : 
                            home.images[0].url
                        }
                        alt={home.adress1}
                        width={
                            isOpen && lightboxType === "gallery" ? home.images[galleryIndex].width :
                            isOpen && lightboxType === "plan" ? home.floorplan.width : 
                            home.images[0].width
                        }
                        height={
                            isOpen && lightboxType === "gallery" ? home.images[galleryIndex].height :
                            isOpen && lightboxType === "plan" ? home.floorplan.height : 
                            home.images[0].height
                        }
                        className={`${isOpen ? "" : "w-full h-195 object-cover"}`}
                    />
                )}

                {isOpen && lightboxType === "gallery" &&
                    <>
                        <IoChevronBack id="galleryL" className="size-12 absolute left-4 text-c-white hover-scale-sm" onClick={handleGallery} />
                        <IoChevronForward id="galleryR" className="size-12 absolute right-4 text-c-white hover-scale-sm" onClick={handleGallery} />
                    </>
                }
            </div>


            <div className="centered-default pt-10">
                <div className="flex max-lg:flex-col justify-between max-lg:items-center max-lg:text-center max-lg:gap-4">
                    <div className="heading-4 max-lg:order-2 max-lg:mt-10">
                        <h1>
                            {home.adress1}
                        </h1>
                        <h2>
                            {home.postalcode} {home.city} {home.adress2 && `· ${home.adress2}`}
                        </h2>
                    </div>

                    <ul
                        className={`flex justify-center items-center gap-12 *:*:size-12 max-sm:*:*:size-10 max-sm:gap-6 *:*:cursor-pointer
                        ${isOpen ? "w-fit fixed inset-x-1/2 translate-x-[-50%] bottom-12 z-9999999 text-c-white *:*:bg-transparent max-lg:order-1" : ""}`}
                    >
                        <li>
                            <IoImageOutline
                                id="galleryBtn"
                                className={`hover-scale-sm ${isOpen && lightboxType === "gallery" ? "opacity-50" : ""}`}
                                onClick={handleLightboxButton}
                            />
                        </li>
                        <li>
                            <IoLayersOutline
                                id="planBtn"
                                className={`hover-scale-sm ${isOpen && lightboxType === "plan" ? "opacity-50" : ""}`}
                                onClick={handleLightboxButton}
                            />
                        </li>
                        <li>
                            <IoLocationOutline
                                id="mapBtn"
                                className={`hover-scale-sm ${isOpen && lightboxType === "map" ? "opacity-50" : ""}`}
                                onClick={handleLightboxButton}
                            />
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

                    <h2 className="heading-2 max-lg:order-3">
                        Kr. {formatPrice(home.price)}
                    </h2>
                </div>
            </div>
        </>
    )
}