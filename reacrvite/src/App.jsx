import './App.css'
import StateCount from "./hooks/useState/StateCount.jsx";
import StateInput from "./hooks/useState/StateInput.jsx";
import StateShow from "./hooks/useState/StateShow.jsx";
import EffectTest from "./hooks/useEffect/useEffect.jsx";

export default function App() {
    return (
        <>
            <StateCount/>
            <StateInput/>
            <StateShow />
            <EffectTest />
        </>
    )
}
