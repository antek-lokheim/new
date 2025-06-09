"use client"

import type React from "react"

import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up"
  delay?: number
}

export default function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const animationClasses = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-down": "-translate-y-8 opacity-0",
    "fade-left": "translate-x-8 opacity-0",
    "fade-right": "-translate-x-8 opacity-0",
    "scale-up": "scale-95 opacity-0",
  }

  const activeClasses = "translate-y-0 translate-x-0 scale-100 opacity-100"

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isInView ? activeClasses : animationClasses[animation],
        className,
      )}
      style={{
        transitionDelay: isInView ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  )
}
