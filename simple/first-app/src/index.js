import React from "react";
import ReactDOM from "react-dom/client"
import Test from "./component/TestComponent";
import Api_Test from "./component/APIComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Test />

        <hr /><br />
        <Api_Test />
    </>
);
