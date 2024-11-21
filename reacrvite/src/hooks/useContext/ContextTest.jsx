import {createContext, useContext} from "react";

export const ContextTest = createContext({})

export function UseContextTest() {
    const {key} = useContext(ContextTest);
    return (
        <h1>{key}</h1>
    )
}