import {ContextTest, UseContextTest} from "../hooks/useContext/ContextTest.jsx";
import {useContext, useReducer} from "react";
import ReactQuery from "./ReactQuery.jsx";
import {FormTest} from "./FormTest.jsx";
import {useToggle} from "../hooks/customHook/useToggle.jsx";
import {initialState, reducerState} from "../hooks/useReducer/ReducerTest.js";
import axios from "axios";


export default function AllTest() {
    const {key} = useContext(ContextTest);

    // custom hook
    const [isVisible, toggle] = useToggle(true)

    // Reducer
    const [state, dispatch] = useReducer(reducerState, initialState)
    const handel = () => {
        dispatch({type: "FETCH_START"})
        axios.get("https://catfact.ninja/fact/").then(
            (res) => {
                dispatch({type: "FETCH_SUCCESS", data: res.data.fact})
                console.log(res.data)
            }
        ).catch(
            (err) => {
                dispatch({type: "FETCH_FAIL"})
                console.log(err)
            }
        )
    }


    return (
        <>
            <h2>{key}</h2>
            <UseContextTest />
            <hr/>
            <ReactQuery/>
            <hr/>
            <FormTest/>
            <hr/>
            <div id={"customHook"}>
                <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
                {isVisible && <h1>This is Text!!!</h1>}
            </div>
            <hr/>
            <div id={"Reducer"}>
                <button onClick={handel}>
                    {state.loading ? "is loading..." : "fetch Cat Fact"}
                </button>
                {state.error && <p>Error, some thing is wrong</p>}
                <h3>{state.fact}</h3>
            </div>
        </>
    )
}