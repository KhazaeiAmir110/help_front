import {createBrowserRouter} from "react-router-dom";

import App from "./App.jsx";
import Home from "./components/pages/Home.jsx";
import MovieTV from "./components/pages/single/MovieTV.jsx";
import Person from "./components/pages/single/Person.jsx";
import People from "./components/pages/People.jsx";
import Login from "./components/pages/Login.jsx";
import SignUp from "./components/pages/SignUp.jsx";


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
                    element: <MovieTV type={"movie"}/>
                },
                {
                    path: "/tv",
                    element: <MovieTV />
                },
                {
                    path: "/tv/:id",
                    element: <MovieTV type="tv" />
                },
                {
                    path: "people",
                    element: <People />
                },
                {
                    path: "person/:id",
                    element: <Person />
                },
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/signup",
                    element: <SignUp />
                },
            ]
        }
    ]
)