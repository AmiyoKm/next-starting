import axios from "axios"

async function fetchData(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return response.data
} 

const page = async () => {
    const data = await fetchData()
    console.log(data)
  return (
    <div>
        {
            data ? data.map((content : any, index : number)=>(
                <li key={index}> {content.title}</li>
            )) :  null
        }
    </div>
  )
}

export default page