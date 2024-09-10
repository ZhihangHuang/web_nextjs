import React from 'react'
import Image from 'next/image'
import homeSrc from "../public/home.jpeg"

import { StaticImageData } from 'next/image'
interface IPProps {
    imgUrl: StaticImageData;
    textAlt: string;
    content: string;
}
export default function Hero(props: IPProps) {

  return (
    <div className="relative h-screen">
          <div className="absolute inset-0 -z-10">
            <Image src={props.imgUrl} alt={props.textAlt} fill style={{objectFit: "cover"}} />
            <div className=" absolute bg-gradient-to-r from-gray-500 inset-0 "></div>
          </div>
          <div className="flex justify-center pt-48">
              <h1 className="text-white text-5xl font-bold">{props.content}</h1>
          </div>
        </div>
  )
}
