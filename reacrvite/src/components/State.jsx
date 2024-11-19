import {useState} from "react";


export default function StateCount() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Change +</button>
            <button onClick={() => setCount(count - 1)}>Change -</button>
            <hr/>

        </>
    )
}