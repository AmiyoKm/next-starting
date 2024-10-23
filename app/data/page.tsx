
async function fetchData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await data.json()
    return json;
}

const Data = async () => {
    let data = await fetchData()
    console.log(data)
  return (
    <div>
        {data.map((data : any) => <p key={data.id}>{data.title}</p>)}
    </div>
  )
}

export default Data