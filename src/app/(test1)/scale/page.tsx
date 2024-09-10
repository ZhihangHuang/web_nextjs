import React from 'react'
import Hero from '../../../componenet/hero'
import scaleSrc from '../../../public/scale.jpeg'
export default function Scale() {
  return (
    <Hero imgUrl={scaleSrc} textAlt="scale" content="scale" />
  )
}

export const metadata = {
  title: 'Scale',
  description: 'Scale page',
}

