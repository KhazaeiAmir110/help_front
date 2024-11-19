import './App.css'
import StateCount from "./components/state/StateCount.jsx";
import StateInput from "./components/state/StateInput.jsx";
import StateShow from "./components/state/StateShow.jsx";

export default function App() {
    return (
        <>
            <StateCount/>
            <StateInput/>
            <StateShow />
        </>
    )
}
