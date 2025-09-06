"use client"
import React from 'react'
import CountUp from "react-countup";

const AnimatedCounter = ({amount}: {amount:number}) => {
    return (

            <CountUp className="w-full"
                     end={amount}
                     prefix={"$"}
                     decimal={","} duration={2.74}/>

    )
}
export default AnimatedCounter
