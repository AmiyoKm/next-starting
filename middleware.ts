import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

const middleware = (request : NextRequest) => {

  console.log(request.nextUrl.pathname)
  console.log('Request method: ' + request.method)
  if(request.nextUrl.pathname.startsWith('/userlist/')){
    return NextResponse.redirect(new URL('/login',request.url))
  }
  
    
}

export default middleware
export const config ={
  matcher : ['/userlist/:users*']
}