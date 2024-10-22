import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <Link href='/about/portfolio'>
    <Button>Go to portfolio</Button>
    </Link>
    
  )
}

export default About