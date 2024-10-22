"use client"

                  
const Products = ({params} : any) => {
   

  return (
    <div>
       <h1>this is all the routes : {params.all}</h1>
       {
         params.all.map((p : any) => <h1 key={p}>{p}</h1>)
       }
    </div>
  )
}

export default Products