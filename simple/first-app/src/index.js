import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from "./component/TestComponent";

const name = "Amir"
const element = (
    <div>
        <h1>
            first one
        </h1>
        <h2 className="test">
            Hellow {name}
        </h2>
    </div>
);

class TestClass extends React.Component{
    render() {
        return (
            <>
                <h1>Hellow Component Class</h1>
                {element}
                <Test />
            </>
        )
    }
}

function TestFunction() {
    return <h1>Hellow Component Function</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  //   element,
    <>
        <TestClass />
        <TestFunction />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
