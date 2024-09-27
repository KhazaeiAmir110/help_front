import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/pages/Home.jsx";


export const routers = createBrowserRouter(
    [
        {
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/movies",
                    element: "Movies Page"
                }
            ]
        }
    ]
)