import React from 'react'
import Hero from '../../../componenet/hero'
import performanceSrc from '../../../public/performance.jpeg'
export default function Performance() {
  return (
    <Hero imgUrl={performanceSrc} textAlt="performance" content="performance" />
  )
}

export const metadata = {
  title: 'Performance',
  description: 'Performance page',
}
