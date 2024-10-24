"use client"

import { useToast } from '@/hooks/use-toast'
import React, { useState } from 'react'

const AddNewUser = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [age , setAge] = useState(0)

    const { toast } = useToast()
    const newAdd = async (e : React.FormEvent) => {
        e.preventDefault();
       
        const data = await  fetch('/api/user', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'},
            body : JSON.stringify({name , email, age})
        })

        const res = await data.json()
        toast({
            title : `${name} User Added`,
            description : res.message
        })

    }
  return (
    <div>
    <form action="" onSubmit={newAdd}>
        <input className='border' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input className='border' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='border' type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
        <button className='border' type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default AddNewUser