"use client"

import { useEffect } from "react"

export default function AosInit() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default
      await import("aos/dist/aos.css")

      AOS.init({
        duration: 800,
        once: false,
        easing: "ease-in-out",
        delay: 100,
      })
    }

    initAOS()
  }, [])

  return null
}
