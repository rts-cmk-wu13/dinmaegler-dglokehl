import "./globals.css";
import { Roboto } from 'next/font/google'

import { ToastContainer } from 'react-toastify';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: {
        template: '%s | Din Mægler',
        default: 'Din Mægler',
    },
}

const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={roboto.className}>
            <body className="min-h-dvh flex flex-col bg-app-white text-app-black">
                <ToastContainer hideProgressBar={true} pauseOnHover={false} autoClose={2500} style={{top: "10rem", zIndex: "99999999"}}/>

                <Header />

                <main className="flex-1 pt-header-default">
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    );
}
