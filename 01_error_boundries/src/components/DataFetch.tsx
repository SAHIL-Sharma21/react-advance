import { useEffect, useState } from "react"


interface Posts {
    userId: number
    id: number
    title: string
    body: string
}

const DataFetch = () => {

    const [data, setData] = useState<Posts[] | null>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    useEffect(() => {
        const fetcData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const parsedData = await response.json();
                
                if(!parsedData){
                    throw new Error("Error while fetching data")
                }
                setData(parsedData);
            } catch (error: any) {
                console.log("Error", error?.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetcData();
    }, []);

    if(isLoading){
        return <h1>Loading...</h1>
    }

  return (
    <>
        <div>
            <h2>Fetched Data</h2>
        </div>
        <div>
            {data && data.slice(0, 10).map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default DataFetch