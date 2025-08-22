import Link from "next/link"
import { FaPaperPlane, FaPhone, FaUser, FaRegUser } from "react-icons/fa6";

import LogoutButton from "./LogoutButton";
import BurgerMenu from "./BurgerMenu";

import { hasCookie } from "@/utils/cookies";

type HeaderProps = {
    className?: string;
}


export default async function Header({ className, ...rest}: HeaderProps) {
    return (
        <header className="h-header-default" {...rest}>
            <div className="h-header-default fixed inset-0 z-9999 flex flex-col body-1 bg-c-white *:px-padding-default">
                <ul className="h-14 flex items-center gap-4 bg-c-primary-1 text-c-white *:*:flex *:*:items-center *:*:gap-2 *:*:hover:underline">
                    <li>
                        <Link href="mailto:4000@dinmaegler.com">
                            <FaPaperPlane /> <span className="hidden sm:block">4000@dinmaegler.com</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="tel:+4570704000">
                            <FaPhone /> <span className="hidden sm:block">+45 7070 4000</span>
                        </Link>
                    </li>

                    <li className="ml-auto">
                        {!await hasCookie("loginToken") ? (
                            <Link href="/login">
                                <FaUser /> Log ind
                            </Link>
                        ) : (
                            <LogoutButton>
                                <FaRegUser /> Log ud
                            </LogoutButton>
                        )}
                    </li>
                </ul>


                <nav className="flex-1 flex items-center justify-between">
                    <Link href="/">
                        <img src="/dmlogo_text_dark.svg" alt="Din Mægler logo" className="h-12" />
                    </Link>

                    <BurgerMenu className="lg:flex lg:items-center gap-10 bg-c-white whitespace-nowrap *:*:hover:underline">
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

                        {await hasCookie("loginToken") && (
                            <li>
                                <Link href="/favorites">
                                    Mine favoritter
                                </Link>
                            </li>
                        )}

                        <li>
                            <Link href="/contact">
                                Kontakt os
                            </Link>
                        </li>
                    </BurgerMenu>
                </nav>
            </div>
        </header>
    )
}