import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest,res : NextResponse){

    const  {name , email, age} =  await req.json();
    if(!name || !email || !age){
        return NextResponse.json({ message : "All fields are required" })
    }
    console.log(name , email, age)
    return NextResponse.json({ infos : name , email, age })
}