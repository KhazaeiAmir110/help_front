import {ContextTest, UseContextTest} from "../hooks/useContext/ContextTest.jsx";
import {useContext} from "react";
import ReactQuery from "./ReactQuery.jsx";


export default function AllTest() {
    const {key} = useContext(ContextTest);

    return (
        <>
            <h2>{key}</h2>
            <UseContextTest />
            <hr/>
            <ReactQuery/>
            <hr/>
        </>
    )
}