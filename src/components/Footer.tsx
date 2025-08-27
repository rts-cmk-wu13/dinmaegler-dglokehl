import Link from "next/link";

import { footerCards } from "@/data/footerCards";

type FooterProps = {
    className?: string;
}


export default function Footer({ className, ...rest}: FooterProps) {
    return (
        <footer className={`flex flex-col justify-center items-center bg-c-bg-1 ${className ? className : ""}`} {...rest}>
            <div className="centered-default py-20 max-sm:py-12 w-full">
                <div>
                    <img src="/dmlogo_text_dark.svg" alt="Din Mægler logo" className="w-74 max-sm:w-48 h-auto" />
                    <p className="mt-6 body-1">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
                    </p>
                </div>

                <div className="mt-16 max-sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-20 max-sm:gap-10">
                    <div className="p-12 max-sm:p-7 bg-c-white rounded-sm shadow-[0_10px_30px] shadow-black/6">
                        <ul className="flex flex-col gap-8">
                            {footerCards.map((card, i) => (
                                <li className="flex items-center gap-3" key={i}>
                                    <figure className="size-15 max-sm:size-10 grid place-items-center bg-c-primary-1 text-c-white rounded-full *:size-6 max-sm:*:size-4">
                                        {card.icon}
                                    </figure>

                                    <div className="flex flex-col gap-1 max-sm:gap-0 flex-1">
                                        <p className="body-4 text-c-body-2">
                                            {card.heading}
                                        </p>
                                        <Link href={card.href} className="body-button hover:underline wrap-anywhere">
                                            {card.body}
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 body-1">
                            Din Mægler Roskilde, er din boligibutik i lokalområdet.
                        </p>
                    </div>

                    <div className="flex flex-col justify-between gap-10 max-lg:items-center lg:px-12 max-lg:text-center">
                        <div>
                            <h3 className="heading-3">
                                Quick Links
                            </h3>
                            <nav>
                                <ul className="mt-5 flex flex-col gap-3 body-1 *:*:hover:underline">
                                    <li>
                                        <Link href="/homes">
                                            Boliger til salg
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/agents">
                                            Mæglere
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            Kontakt os
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/login">
                                            Log ind / bliv bruger
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <p className="body-4 text-c-body-2">
                                Medlem af
                            </p>
                            <p className="heading-1 text-c-body-2">
                                DMS
                            </p>
                            <p className="body-2 text-c-body-2">
                                Dansk Mægler Sammenslutning
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <small className="py-6 max-sm:py-3.5 w-full bg-c-primary-1 body-1 text-c-white text-center">
                Layout By Jit Banik 2020
            </small>
        </footer>
    )
}