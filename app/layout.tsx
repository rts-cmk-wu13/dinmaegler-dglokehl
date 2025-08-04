import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-dvh flex flex-col bg-app-white text-app-black">
                <header></header>

                <main className="flex-1">
                    {children}
                </main>

                <footer></footer>
            </body>
        </html>
    );
}
