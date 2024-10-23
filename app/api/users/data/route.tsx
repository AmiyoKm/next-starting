import { NextResponse } from "next/server"
import {data} from '../db/data'
export function GET(){
   return NextResponse.json({data})
}