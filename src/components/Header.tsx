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
        <header className="h-header-default max-sm:h-header-mobile fixed inset-0 z-9999 flex flex-col items-center body-1 bg-c-white" {...rest}>
            <div className="w-full bg-c-primary-1 flex flex-col items-center max-sm:hidden">
                <ul className="centered-default w-full h-14 flex items-center gap-4 bg-c-primary-1 text-c-white *:*:flex *:*:items-center *:*:gap-2 *:*:hover:underline">
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
            </div>


            <nav className="centered-default w-full flex-1 flex items-center justify-between">
                <Link href="/" className="hover-75">
                    <img src="/dmlogo_text_dark.svg" alt="Din Mægler logo" className="h-12 max-sm:h-8" />
                </Link>

                <BurgerMenu className="lg:flex lg:items-center lg:gap-10 whitespace-nowrap *:*:hover:underline">
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

                    <li className="sm:hidden max-w-48 w-full">
                        <hr className="w-full h-[1px] border-0 bg-c-white" />
                    </li>

                    <li className="sm:hidden *:flex *:items-center *:gap-2">
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
                </BurgerMenu>
            </nav>
        </header>
    )
}