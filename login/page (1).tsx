"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function Login() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const role = searchParams.get("role")
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "1234") {
      router.push(`/dashboard?role=${role}&id=${id}`)
    } else {
      alert("Invalid password")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-green-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Login as {role}</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="id" className="block mb-1">
              {role}&apos;s ID:
            </label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              className="w-full p-2 rounded bg-black border border-green-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 rounded bg-black border border-green-500"
            />
          </div>
          <button type="submit" className="w-full p-2 bg-green-500 rounded hover:bg-green-600">
            Login
          </button>
        </form>
      </div>
    </main>
  )
}
