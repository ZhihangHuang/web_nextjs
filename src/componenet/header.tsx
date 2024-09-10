"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Header() {
    const pathname = usePathname();
  return (
    <div className="absolute inset-0 z-10">
        <div className="flex justify-between items-center p-8 text-white  ml-10  mx-auto">
          <Link className="text-3xl font-bold" href="/">Home</Link>
          <div className="flex space-x-4">
            <Link className={`text-xl ${pathname === '/performance' ? 'text-purple-500' : 'text-white'}`} href="/performance">Performance</Link>
            <Link className={`text-xl ${pathname === '/reliability' ? 'text-purple-500' : 'text-white'}`} href="/reliability">Reliability</Link>
            <Link className={`text-xl ${pathname === '/scale' ? 'text-purple-500' : 'text-white'}`} href="/scale">Scale</Link>
          </div>
        </div>
        </div>
  )
}
