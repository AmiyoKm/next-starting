"use client"

import { redirect } from 'next/navigation'
import React from 'react'

const User = ({params}: any) => {
  if(params.id === '1'){
    redirect('/login')
  }
    console.log(params)
  return (
    <h1>Hi this is {params.id}</h1>
  )
}

export default User