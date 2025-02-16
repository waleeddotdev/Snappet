import localFont from "next/font/local";
import { Manrope } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";

const manrope = Manrope({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800"], variable: "--font-manrope" });


export const metadata = {
    title: "Snappet",
    description: "Turn your code into stunning screenshots",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">

            <body
                className={`${manrope.variable} ${manrope.className} h-screen antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
