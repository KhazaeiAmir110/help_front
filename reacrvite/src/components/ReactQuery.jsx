import {useQuery} from "react-query";
import axios from "axios";


export default function ReactQuery() {
    const {data, isLoading, isError, error, refetch} = useQuery(["data"], () => {
        return axios.get("https://catfact.ninja/fact/").then((response) => response.data)
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>Error: {error}</h2>
    }

    return (
        <>
            <h1>{data?.fact}</h1>
            <button onClick={refetch}>Refetch</button>
        </>
    )
}