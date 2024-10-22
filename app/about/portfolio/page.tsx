import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const PortFolio = () => {
  return (
    <Link href='/about'>
      <Button>Go to About</Button>
    </Link>
  )
}

export default PortFolio