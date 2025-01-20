"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const [clickedOption, setClickedOption] = useState<string | null>(null)

  const handleClick = (option: string) => {
    setClickedOption(option)
    setTimeout(() => {
      router.push(`/login?role=${option.toLowerCase()}`)
    }, 300)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8">Welcome to EduConnect</h1>
      <div className="flex flex-col space-y-4 w-64">
        {["Student", "Teacher", "Parent"].map((option) => (
          <button
            key={option}
            className={`w-full p-4 text-xl font-bold rounded transition-all ${
              clickedOption === option ? "bg-green-600 scale-95" : "bg-green-500 hover:bg-green-600"
            }`}
            onClick={() => handleClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </main>
  )
}

