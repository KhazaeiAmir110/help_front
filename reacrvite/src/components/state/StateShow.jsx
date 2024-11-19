import {useState} from "react";


export default function StateShow() {
    const [show, setShow] = useState(true);

    return (
        <>
            <button className="button" onClick={() => (setShow(!show))}>Show/hide</button>
            {
                show && <h2>Behaving me to</h2>
            }
        </>
    )
}