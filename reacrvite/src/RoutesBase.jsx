import {BrowserRouter, Route, Routes} from "react-router-dom";

import HelloWord from "./components/HelloWord.jsx";
import StateCount from "./hooks/useState/StateCount.jsx";
import StateShow from "./hooks/useState/StateShow.jsx";
import StateInput from "./hooks/useState/StateInput.jsx";
import EffectTest from "./hooks/useEffect/EffectTest.jsx";
import FetchTest from "./components/FetchTest.jsx";
import AllTest from "./components/AllTest.jsx";
import {ContextTest} from "./hooks/useContext/ContextTest.jsx";


export default function RoutesBase() {
    return (
        <ContextTest.Provider value={{key:"value"}}>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HelloWord/>}/>
                <Route path="/state"
                       element={(
                           <>
                               <StateCount/>
                               <StateShow/>
                               <StateInput/>
                           </>
                       )}
                />
                <Route path="/effect" element={<EffectTest/>}/>
                <Route path="/fetch" element={<FetchTest/>}/>
                <Route path="/all" element={<AllTest/>}/>
            </Routes>
            </BrowserRouter>
        </ContextTest.Provider>
    )
}