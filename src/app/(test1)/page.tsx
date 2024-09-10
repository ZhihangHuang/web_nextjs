import React from 'react'
import Hero from "../../componenet/hero";
import homeSrc from "../../public/home.jpeg"

export const metadata = {
  title: 'Home',
  description: 'Home page',
}

export default function hello() {
  return (
    
      <Hero imgUrl={homeSrc} textAlt="home" content="homepage" />
    
  )
}
