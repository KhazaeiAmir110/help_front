import {useEffect, useState} from "react";


export default function EffectTest() {
    const [state, setState] = useState("Hello World")
    const [show, setShow] = useState(false)

    // mounting
    useEffect(() => {
        setShow(true)
        setState("Mounting Component")
        console.log("Mounting Component")

        // un mounting
        return (
            setState("UnMounting Component")
        )
    }, []);

    // updating
    useEffect(() => {
        setState("Update Component")
        console.log("Update Component")
    }, [state])

    function Click() {
        setShow(!show)
    }


    return (
        <>
            <hr/>
            <h1>{show && state}</h1>
            <button onClick={Click}>show/hide
            </button>
            <hr/>
        </>
    )
}