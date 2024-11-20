import {useState} from "react";
import axios from "axios";


export default function FetchTest() {
    const [dataFetch, setDataFetch] = useState({});
    const [dataAxios, setDataAxios] = useState({});

    // fetch
    fetch("https://catfact.ninja/fact/").then(
        res => res.json()
    ).then(
        (data) => setDataFetch(data),
    )

    // axios
    axios.get("https://catfact.ninja/fact/").then(
        res => {
            setDataAxios(res.data)
        }
    )

    return (
        <>
            <h4>Fetch :</h4>
            <p>{dataFetch.fact}</p>
            <hr/>
            <h4>Axios :</h4>
            <p>{dataAxios.fact}</p>
        </>
    )
}