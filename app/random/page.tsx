import React from 'react'

const random = () => {
 console.log(process.env.NODE_ENV)
 console.log(process.env.MONGO_URI)
 console.log(process.env.JWT_SECRET)

return <div>
    {process.env.NODE_ENV ? 
        <div>MONGO DB CONNECTED  
             {process.env.MONGO_URI}
        </div> : null    
}
</div>
}

export default random