"use client"
import React from 'react'

const User = ({params}: any) => {
    console.log(params)
  return (
    <h1>Hi this is {params.users}</h1>
  )
}

export default User