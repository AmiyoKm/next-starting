import { NextResponse } from "next/server";
 import {data} from '../../users/db/data'
export async function GET(_ : any, response : any){
    console.log(response.params.somedata)
    const {somedata} = await response.params
    const dataId = Number(somedata) -1 
     const product = NextResponse.json({ somedata : data.products[dataId]})

    return product
}