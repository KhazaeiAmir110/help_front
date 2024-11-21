import {QueryClient, QueryClientProvider} from "react-query";

import RoutesBase from "./RoutesBase.jsx";
import './App.css'


export default function App() {
    const client = new QueryClient()

    return (
        <QueryClientProvider client={client}>
            <RoutesBase/>
        </QueryClientProvider>
    )
}
