import React from 'react'
import Link from "next/link";
import {formatAmount} from "@/lib/utils";
import Image from "next/image";

const BankCard = ({key, account, username, showBalance = true}): CreditCardProps => {
    return (
        <div className="flex flex-col">
            <Link href={"/"} className="bank-card">
                <div className="bank-card_content">
                   <div className="">
                       <h1 className="text-16 font-semibold text-white">
                           {
                               account.name || username
                           }
                       </h1>
                       <p className="font-ibm-plex-serif font-black text-white">
                           {formatAmount(account.currentBalance)}
                       </p>
                   </div>
                    <article className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h1 className="text-12 font-semibold text-white">{username}</h1>
                            <h2 className="text-12 font-semibold text-white">● ●  / ● ● </h2>
                        </div>
                        <p className="text-14 font-semibold tracking-[1.1px] text-white">
                            ●●●● ●●●● ●●●●
                            <span className="text-16">
                                1234
                            </span>
                        </p>
                    </article>
                </div>
                <div className="bank-card_icon">
                    <Image src={"/icons/Paypass.svg"} width={20} height={24} alt={"icon"}/>
                    <Image src={"/icons/mastercard.svg"}
                           className="ml-5"
                           width={45}
                           height={32}
                           alt={"master card"}/>
                </div>
                <Image src={"/icons/lines.png"}
                       className="absolute top-0 left-0"
                       width={316}
                       height={190}
                       alt={"icons"}/>
            </Link>
        </div>
    )
}
export default BankCard


