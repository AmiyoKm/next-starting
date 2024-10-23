"use client"

import React from 'react'
import Image from 'next/image'
import cosmic from '../../public/cosmic.jpg'
const Images = () => {
  return (
    <div>
        <Image src={cosmic} alt="Next.js Logo" width={500} height={500} priority />
        <Image src='https://images.unsplash.com/photo-1729512680463-bc583c395b61?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Next.js Logo" width={500} height={500} priority />

    </div>
  )
}

export default Images