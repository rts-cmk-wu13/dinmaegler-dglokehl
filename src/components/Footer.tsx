import Link from "next/link";
import { FaPhone, FaPaperPlane, FaLocationDot } from "react-icons/fa6";

type FooterProps = {
    className?: string;
}

export default function Footer({ className, ...rest}: FooterProps) {
    return (
        <footer className={`py-20 flex justify-center items-center bg-c-bg-1 ${className ? className : ""}`} {...rest}>
            <div className="max-w-maxw-default w-full">
                <div className="max-w-4xl w-full">
                    <div>
                        <img src="/dmlogo_text_dark.svg" alt="" className="w-74 h-auto" />
                        <p className="mt-6 body-1">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
                        </p>
                    </div>

                    <div className="mt-16 flex justify-between gap-8">
                        <div className="p-12 bg-c-white rounded-sm shadow-[0_10px_30px] shadow-black/6">
                            <ul className="flex flex-col gap-8">
                                <li className="flex items-center gap-3">
                                    <figure className="size-15 grid place-items-center bg-c-primary-1 rounded-full">
                                        <FaPhone className="size-6 text-c-white" />
                                    </figure>

                                    <div className="flex flex-col gap-1">
                                        <p className="body-4 text-c-body-2">
                                            Ring til os
                                        </p>
                                        <Link href="tel:+4570704000" className="text-button hover:underline">
                                            +45 7070 4000
                                        </Link>
                                    </div>
                                </li>

                                <li className="flex items-center gap-3">
                                    <figure className="size-15 grid place-items-center bg-c-primary-1 rounded-full">
                                        <FaPaperPlane className="size-6 text-c-white" />
                                    </figure>

                                    <div className="flex flex-col gap-1">
                                        <p className="body-4 text-c-body-2">
                                            Send en mail
                                        </p>
                                        <Link href="mailto:4000@dinmaegler.com" className="text-button hover:underline">
                                            4000@dinmaegler.com
                                        </Link>
                                    </div>
                                </li>

                                <li className="flex items-center gap-3">
                                    <figure className="size-15 grid place-items-center bg-c-primary-1 rounded-full">
                                        <FaLocationDot className="size-6 text-c-white" />
                                    </figure>

                                    <div className="flex flex-col gap-1">
                                        <p className="body-4 text-c-body-2">
                                            Butik
                                        </p>
                                        <Link href="https://maps.app.goo.gl/fcRgnySdCMnvbxix7" target="_blank" className="text-button hover:underline">
                                            Stændertorvet 78, 4000 Roskilde
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                            <p className="mt-8 body-1">
                                Din Mægler Roskilde, er din boligibutik i lokalområdet.
                            </p>
                        </div>

                        <div className="flex flex-col justify-between">
                            <div>
                                <h3 className="heading-3">
                                    Quick Links
                                </h3>
                                <ul className="mt-5 flex flex-col gap-3 body-1 *:*:hover:underline">
                                    <li>
                                        <Link href="">
                                            Boliger til salg
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            Mæglere
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            Kontakt os
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
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
            </div>
        </footer>
    )
}