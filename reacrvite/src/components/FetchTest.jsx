import {useState} from "react";


export default function FetchTest() {
    const [data, setData] = useState({});

    fetch("https://catfact.ninja/fact/").then(
        res => res.json()
    ).then(
        (data) => setData(data),
    )

    return (
        <>
            <p>{data.fact}</p>
            <hr/>

        </>
    )
}