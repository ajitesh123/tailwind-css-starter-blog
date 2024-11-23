'use client'

import React, { useState, useEffect } from 'react'
import Image from './Image'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

const TypewriterText = ({ text, delay = 50 }) => {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(timer)
      }
    }, delay)

    return () => clearInterval(timer)
  }, [text, delay])

  return <span>{displayText}</span>
}

export default function WelcomeCard() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-animate mb-8 overflow-hidden rounded-lg backdrop-blur-sm ${
        isDark
          ? 'from-purple-900/90 via-pink-900/90 to-red-900/90'
          : 'from-purple-400/90 via-pink-500/90 to-red-500/90'
      } transition-all duration-300 hover:shadow-xl`}
    >
      <div className="flex flex-col md:flex-row">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center p-6 md:w-1/3"
        >
          <div className="h-48 w-48 overflow-hidden rounded-full bg-gray-900/20 p-2 shadow-lg ring-4 ring-white/10">
            <Image
              src="/static/images/ajitesh.png"
              alt="Avatar"
              width={192}
              height={192}
              className="rounded-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-center space-y-4 p-6 md:w-2/3"
        >
          <h2
            className={`text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-black'}`}
          >
            Hi, I'm Ajitesh
          </h2>
          <p className={`text-xl font-medium ${isDark ? 'text-white/90' : 'text-black/90'}`}>
            Welcome to my blog!
          </p>
          <p className={`prose leading-relaxed ${isDark ? 'text-white/80' : 'text-black/80'}`}>
            <TypewriterText
              text="I've been a developer and product manager for the last 10 years. I'm currently cofounder and CEO of Archie AI. Most recently I worked as Product Manager in Google Cloud."
              delay={40}
            />
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
