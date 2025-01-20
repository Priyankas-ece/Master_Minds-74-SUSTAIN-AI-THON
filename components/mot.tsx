import { useEffect, useState } from "react"

const quotes = [
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
]

export default function MotivationalQuote() {
  const [quote, setQuote] = useState("")

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <p className="text-2xl font-bold text-green-500 mb-4">Welcome, Student!</p>
        <p className="text-xl text-white italic">{quote}</p>
      </div>
    </div>
  )
}
