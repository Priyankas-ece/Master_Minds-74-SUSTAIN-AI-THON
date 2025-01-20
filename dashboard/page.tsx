"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Logo from "../components/Logo"
import Menu from "../components/Menu"
import MotivationalQuote from "../components/MotivationalQuote"

export default function Dashboard() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const role = searchParams.get("role")
  const id = searchParams.get("id")
  const [currentDate, setCurrentDate] = useState("")
  const [showQuote, setShowQuote] = useState(role === "student")

  useEffect(() => {
    const date = new Date()
    setCurrentDate(
      date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }),
    )

    if (role === "student") {
      const timer = setTimeout(() => {
        setShowQuote(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [role])

  if (showQuote) {
    return <MotivationalQuote />
  }

  return (
    <main className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-4">
        <Logo />
        <div className="text-right">
          <p className="text-green-500 font-bold">{role?.charAt(0).toUpperCase() + role?.slice(1)}</p>
          <p>Welcome, {id}!</p>
          <p>{currentDate}</p>
        </div>
      </div>
      <hr className="border-green-500 mb-4" />
      <div className="flex">
        <Menu role={role || ""} />
        <div className="ml-8">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p>Welcome to your EduConnect dashboard. Use the menu to navigate.</p>
        </div>
      </div>
    </main>
  )
}

