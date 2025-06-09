"use client"

import { useState, useEffect } from "react"
import type { Testimonial } from "@/lib/types"
import { fetcher } from "@/lib/utils"

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true)
        const data = await fetcher("/api/testimonials")
        setTestimonials(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch testimonials")
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  return { testimonials, loading, error }
}
