"use client"
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {sidebarLinks} from "@/constants";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

const Sidebar = ({user}: User) => {
    const pathname = usePathname();
    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href={"/"} className="mb-12 cursor-pointer gap-2 items-center flex">
                    <Image src={"/icons/logo.svg"}
                           width={34}
                           height={43}
                           className="size-[24px] max-xl:size-14"
                           alt={"logo icon"}/>
                    <h1 className="sidebar-logo">Mia Bhai Bank</h1>
                </Link>
                {
                    sidebarLinks.map((item, index) => {
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                        return (

                            <Link

                                className={cn("sidebar-link", {
                                    'bg-bank-gradient': isActive
                                })}
                                href={item.route} key={item.label}>
                                <div className="size-6 relative">
                                    <Image
                                        className={cn({
                                            "brightness-[3] invert-0": isActive
                                        })}
                                        src={item.imgURL} alt={"icons logo"} fill/>
                                </div>
                                <p className={cn("sidebar-label", {
                                    "!text-white": isActive
                                })}>{item.label}</p>
                            </Link>
                        )
                    })
                }
                USER
            </nav>
            USER
        </section>
    )
}
export default Sidebar
