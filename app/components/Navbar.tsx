import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-evenly w-screen'>
        <div><Link href='/login'>Regular User</Link></div>
        <div><Link href='/login/user'> User</Link></div>
        <div><Link href='/login/admin'>Admin</Link></div>
    </div>
    </div>
  )
}

export default Navbar