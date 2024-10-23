import { NextResponse } from "next/server";

export function GET(){
   const res =  NextResponse.json({ title : 'doing stuff'}) 
    return res
}