import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-dvh flex flex-col bg-app-white text-app-black">
                <Header />

                <main className="flex-1">
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    );
}
