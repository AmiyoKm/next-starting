"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
                  
const Products = () => {
   const router = useRouter()
    const navigate =(page : string) =>{
        router.push('/'+page)
    }

  return (
    <div>
        <Link href='/'><Button>Home</Button></Link>
        <Button onClick={() => navigate('about')}>Go to About</Button>
        <Button onClick={() => navigate('about/portfolio')}>Go to Portfolio</Button>
    </div>
  )
}

export default Products