import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {title , email , password} = await req.json();
  if(!email && !password ){
    return NextResponse.json({ error : 'email and password required'},{status :400})
  }
  console.log(title , email , password);
  return NextResponse.json({ title: 'this is response' });
}
