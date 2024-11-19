import {useState} from "react";

export default function StateInput() {
    const [Input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    return (
        <>
            <input onChange={handleChange} value={Input} type="text"/>
            <h1>{Input}</h1>
            <hr/>
        </>
    )
}