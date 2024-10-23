import { NextResponse } from "next/server"

export function GET(_ : any,response : any){
    console.log(response.params.id)
    const { id } = response.params
   return  NextResponse.json({ id : id}, {status : 200})
}