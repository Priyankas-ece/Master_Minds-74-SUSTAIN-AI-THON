"use client"

import { useState } from "react"
import Link from "next/link"

export default function Menu({ role }: { role: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 border rounded text-green-200 border-green-400 hover:text-white hover:border-white"
      >
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-green-800 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link
              href={`/dashboard?role=${role}`}
              className="block px-4 py-2 text-sm text-white hover:bg-green-700"
              role="menuitem"
            >
              Home
            </Link>
            <Link href="#" className="block px-4 py-2 text-sm text-white hover:bg-green-700" role="menuitem">
              Chat with hope
            </Link>
            <Link href="#" className="block px-4 py-2 text-sm text-white hover:bg-green-700" role="menuitem">
              Anonymous counselling
            </Link>
            <Link
              href={`/suggestions?role=${role}`}
              className="block px-4 py-2 text-sm text-white hover:bg-green-700"
              role="menuitem"
            >
              Suggestions
            </Link>
            <Link
              href={`/topics-covered?role=${role}`}
              className="block px-4 py-2 text-sm text-white hover:bg-green-700"
              role="menuitem"
            >
              Topics covered
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
