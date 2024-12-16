'use client'

import { motion } from 'framer-motion'

export function AnimatedHeroText() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h2 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg"
        variants={item}
      >
        Transforming waste into<br />Sustainable Building Solutions
      </motion.h2>
      <motion.p 
        className="text-xl md:text-2xl mb-8 drop-shadow-md"
        variants={item}
      >
        Join us in building a greener future
      </motion.p>
    </motion.div>
  )
}

