import {ContextTest, UseContextTest} from "../hooks/useContext/ContextTest.jsx";
import {useContext} from "react";
import ReactQuery from "./ReactQuery.jsx";
import {FormTest} from "./FormTest.jsx";
import {useToggle} from "../hooks/customHook/useToggle.jsx";


export default function AllTest() {
    const {key} = useContext(ContextTest);

    // custom hook
    const [isVisible, toggle] = useToggle(true)

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
        </>
    )
}