'use client'

import React, { useState, useEffect } from 'react'
import Image from './Image'
import { useTheme } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'

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
    <div
      className={`mb-8 overflow-hidden rounded-lg ${
        isDark
          ? 'bg-gradient-to-r from-purple-900 via-pink-900 to-red-900'
          : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
      }`}
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center justify-center p-6 md:w-1/3">
          <div className="h-48 w-48 overflow-hidden rounded-full bg-white/10 p-1">
            <Image
              src="/static/images/ajitesh.png"
              alt="Avatar"
              width={192}
              height={192}
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4 p-6 md:w-2/3">
          <h2 className="text-2xl font-bold text-white">Hi, I'm Ajitesh</h2>
          <p className="text-lg text-white/90">Developer and Product Manager</p>
          <p className="prose text-white/80">
            <TypewriterText
              text="I'm currently cofounder and CEO of Archie AI. Most recently I worked as Product Manager in Google Cloud."
              delay={40}
            />
          </p>
        </div>
      </div>
    </div>
  )
}
