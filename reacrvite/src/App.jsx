import './App.css'
import StateCount from "./assets/hooks/useState/StateCount.jsx";
import StateInput from "./assets/hooks/useState/StateInput.jsx";
import StateShow from "./assets/hooks/useState/StateShow.jsx";

export default function App() {
    return (
        <>
            <StateCount/>
            <StateInput/>
            <StateShow />
        </>
    )
}
