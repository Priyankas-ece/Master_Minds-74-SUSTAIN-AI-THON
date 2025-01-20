"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Logo from "../components/Logo"
import Menu from "../components/Menu"

export default function Suggestions() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const role = searchParams.get("role")
  const id = searchParams.get("id")
  const [suggestion, setSuggestion] = useState("")
  const [isTeacher, setIsTeacher] = useState(role === "teacher")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we'd save the suggestion to a backend here
    alert("Suggestion submitted successfully")
    router.push("/dashboard")
  }

  return (
    <main className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-4">
        <Logo />
        <div className="text-right">
          <p className="text-green-500 font-bold">{role?.charAt(0).toUpperCase() + role?.slice(1)}</p>
          <p>Welcome, {id}!</p>
        </div>
      </div>
      <hr className="border-green-500 mb-4" />
      <div className="flex">
        <Menu role={role || ""} />
        <div className="ml-8 flex-grow">
          <h1 className="text-2xl font-bold mb-4">Suggestions</h1>
          {isTeacher ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                className="w-full h-40 p-2 rounded bg-black border border-green-500"
                placeholder="Enter suggestions or upload reference materials"
              />
              <button type="submit" className="px-4 py-2 bg-green-500 rounded hover:bg-green-600">
                Submit Suggestion
              </button>
            </form>
          ) : (
            <div className="bg-green-900 p-4 rounded">
              <p>Suggestions and reference materials from teachers will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

