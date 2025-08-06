import Link from "next/link"

import { FaPaperPlane, FaPhoneAlt, FaUser } from "react-icons/fa";

type HeaderProps = {
    className?: string;
}

export default function Header({ className, ...rest}: HeaderProps) {
    return (
        <header className="h-header-default flex flex-col body-1 *:px-padding-default" {...rest}>
            <ul className="h-14 flex items-center gap-4 bg-c-primary-1 text-c-white *:*:flex *:*:items-center *:*:gap-2 *:*:hover:underline">
                <li>
                    <Link href="mailto:4000@dinmaegler.com">
                        <FaPaperPlane /> 4000@dinmaegler.com
                    </Link>
                </li>

                <li>
                    <Link href="tel:+4570704000">
                        <FaPhoneAlt /> +45 7070 4000
                    </Link>
                </li>

                <li className="ml-auto">
                    <Link href="/login">
                        <FaUser /> Log ind
                    </Link>
                </li>
            </ul>


            <nav className="flex-1 flex items-center justify-between">
                <Link href="/">
                    <img src="/dmlogo_text_dark.svg" alt="" className="h-12" />
                </Link>

                <ul className="flex items-center gap-10 *:*:hover:underline">
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
                        <Link href="/favorites">
                            Mine favoritter
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact">
                            Kontakt os
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}