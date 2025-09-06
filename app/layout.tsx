import type {Metadata} from "next";
import {Inter, IBM_Plex_Serif} from "next/font/google";
import "./globals.css"
import React from "react";


const inter = Inter({subsets: ["latin"], variable: "--font-inter"})
const ibmPlexSerif = IBM_Plex_Serif({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-ibm-plex-serif"


})
export const metadata: Metadata = {
    title: "Mia Bhai",
    description: "Mia Bhai Bank is a modern banking app for everyone with islamic rules ",
    icons:"./icons/logo.svg"
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
