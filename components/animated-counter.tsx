'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedCounterProps {
  end: number;
  duration?: number;
}

export function AnimatedCounter({ end, duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = end / (duration / 16) // 60 FPS

      const timer = setInterval(() => {
        start += increment
        setCount(Math.floor(start))

        if (start >= end) {
          clearInterval(timer)
          setCount(end)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [end, duration, isInView])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

