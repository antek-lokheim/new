"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time or wait for resources to load
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500">
      <div className="relative">
        {/* Logo container */}
        <div className="w-16 h-16 relative">
          {/* Animated circle */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="283"
              strokeDashoffset="283"
              className="animate-circle-draw"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EC4899" /> {/* brand-pink */}
                <stop offset="100%" stopColor="#4F46E5" /> {/* brand-indigo */}
              </linearGradient>
            </defs>
          </svg>

          {/* K letter in the middle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-pink to-brand-indigo bg-clip-text text-transparent animate-pulse">
              K
            </span>
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    </div>
  )
}
