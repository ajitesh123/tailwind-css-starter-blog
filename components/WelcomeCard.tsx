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
      className={`mb-8 overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 dark:border-gray-700 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center justify-center p-6 md:w-1/3">
          <div className="h-48 w-48 overflow-hidden rounded-full">
            <Image
              src="/static/images/avatar.png"
              alt="Avatar"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4 p-6 md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Hi, I'm {siteMetadata.author}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">Developer and Product Manager</p>
          <p className="prose text-gray-500 dark:text-gray-400">
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
