import Link from "next/link";

import { footerCards } from "@/data/footerCards";

type FooterProps = {
    className?: string;
}


export default function Footer({ className, ...rest}: FooterProps) {
    return (
        <footer className={`py-20 flex justify-center items-center bg-c-bg-1 ${className ? className : ""}`} {...rest}>
            <div className="centered-default w-full">
                <div>
                    <img src="/dmlogo_text_dark.svg" alt="Din Mægler logo" className="w-74 h-auto" />
                    <p className="mt-6 body-1">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="p-12 bg-c-white rounded-sm shadow-[0_10px_30px] shadow-black/6">
                        <ul className="flex flex-col gap-8">
                            {footerCards.map((card, i) => (
                                <li className="flex items-center gap-3" key={i}>
                                    <figure className="size-15 grid place-items-center bg-c-primary-1 text-c-white rounded-full *:size-6">
                                        {card.icon}
                                    </figure>

                                    <div className="flex flex-col gap-1 flex-1">
                                        <p className="body-4 text-c-body-2">
                                            {card.heading}
                                        </p>
                                        <Link href={card.href} className="text-button hover:underline wrap-anywhere">
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

                    <div className="flex flex-col justify-between gap-10 max-lg:items-center lg:px-12">
                        <div>
                            <h3 className="heading-3">
                                Quick Links
                            </h3>
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
        </footer>
    )
}