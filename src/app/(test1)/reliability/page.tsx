import React from 'react'
import Hero from '../../../componenet/hero'
import reliabilitySrc from '../../../public/reliability.jpeg'
export default function Reliability() {
  return (
    <Hero imgUrl={reliabilitySrc} textAlt="reliability" content="reliability" />
  )
}

export const metadata = {
  title: 'Reliability',
  description: 'Reliability page',
}
  