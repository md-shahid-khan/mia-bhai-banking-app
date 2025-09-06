"use client";

import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface MobileNavProps {
    user?: any; // Replace `any` with your actual user type
}

const MobileNav: React.FC<MobileNavProps> = ({ user }) => {
    const pathname = usePathname();

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                {/* Trigger button */}
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                        alt="hamburger"
                    />
                </SheetTrigger>

                {/* Drawer content */}
                <SheetContent className="border-none bg-white" side="left">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="mb-12 cursor-pointer gap-1 px-4 items-center flex"
                    >
                        <Image
                            src="/icons/logo.svg"
                            width={34}
                            height={43}
                            alt="logo icon"
                        />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                            Mia Bhai Bank
                        </h1>
                    </Link>

                    {/* Nav Links */}
                    <nav className="flex h-full flex-col pt-16 gap-6">
                        {sidebarLinks.map((item) => {
                            const isActive =
                                pathname === item.route || pathname.startsWith(`${item.route}/`);

                            return (
                                <SheetClose asChild key={item.route}>
                                    <Link
                                        href={item.route}
                                        className={cn(
                                            "mobilenav-sheet-close w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors",
                                            {
                                                "bg-bank-gradient text-white": isActive,
                                                "text-black-2 hover:bg-gray-100": !isActive,
                                            }
                                        )}
                                    >
                                        <Image
                                            src={item.imgURL}
                                            alt={`${item.label} icon`}
                                            width={20}
                                            height={20}
                                            className={cn({
                                                "brightness-[3] invert-0": isActive,
                                            })}
                                        />
                                        <p
                                            className={cn("text-16 font-semibold", {
                                                "text-white": isActive,
                                            })}
                                        >
                                            {item.label}
                                        </p>
                                    </Link>
                                </SheetClose>

                            );
                        })}
                        Footer
                    </nav>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNav;
