'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LampContainer } from '@/components/ui/lamp'
import Image from 'next/image'
import { Twitter } from 'lucide-react'

export default function UserProfile() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.7,
          ease: 'easeInOut',
        }}
        className="mt-8"
      >
        {/* Profile Image */}
        <Image
          src="https://github.com/eriquyjhordan.png" // Replace with dynamic image path
          alt="Profile"
          className="mx-auto w-32 h-32 rounded-full border-4 border-slate-300 shadow-md"
          width={128}
          height={128}
        />

        {/* Full Name */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Full Name
        </motion.h2>

        {/* Email */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-gray-600"
        >
          user@example.com
        </motion.p>

        {/* Badges Section */}
        <div className="mt-6 flex justify-center space-x-6">
          {/* Google Badge */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center space-x-2 rounded-full border border-red-500 px-4 py-2 text-red-500 shadow-sm hover:bg-red-500 hover:text-white"
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span>Vinculated with Google</span>
          </motion.button>

          {/* Twitter Badge */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center space-x-2 rounded-full border border-blue-500 px-4 py-2 text-blue-500 shadow-sm hover:bg-blue-500 hover:text-white"
          >
            <Twitter className="mr-2 h-4 w-4" />
            <span>Vinculated with Twitter</span>
          </motion.button>
        </div>
      </motion.div>
    </LampContainer>
  )
}
