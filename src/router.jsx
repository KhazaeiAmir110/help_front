import {createBrowserRouter} from "react-router-dom";

import App from "./App.jsx";
import Home from "./components/pages/Home.jsx";
import MovieTV from "./components/pages/single/MovieTV.jsx";
import Person from "./components/pages/single/Person.jsx";
import People from "./components/pages/People.jsx";


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
                    element: <MovieTV />
                },
                {
                    path: "/movies/:id",
                    element: <MovieTV />
                },
                {
                    path: "/tv",
                    element: <MovieTV />
                },
                {
                    path: "/tv/:id",
                    element: <MovieTV />
                },
                {
                    path: "people",
                    element: <People />
                },
                {
                    path: "people/:id",
                    element: <Person />
                }
            ]
        }
    ]
)