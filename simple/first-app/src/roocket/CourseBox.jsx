import {useState} from "react";

export default function CourseBox (props) {

    let [clickCount, setClickCount] = useState(0)

    const clickHandler = () => {
        setClickCount(clickCount + 1)
        if (clickCount >= 1000){
            setClickCount(clickCount=0)
        }
    }

    const DoubleClick = () => {
        setClickCount(clickCount + 100)
    }

    return (
        <>
            {/*props*/}
            <div>
                <h1>{props?.title}</h1>
                <p>{props?.description}</p>
                <span>time : {props?.time}</span>
            </div>

            <hr /><br />
            {/*  useState  */}
            <div>
                <h1>useState</h1>
                <button onClick={clickHandler} onDoubleClick={DoubleClick}>Click Me !</button>
                <p>{clickCount}</p>
            </div>
        </>
    )
}