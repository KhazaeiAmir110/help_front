import {createBrowserRouter} from "react-router-dom";

import App from "./App.jsx";
import Home from "./components/pages/Home.jsx";
import MovieTV from "./components/pages/single/MovieTV.jsx";
import Person from "./components/pages/single/Person.jsx";
import People from "./components/pages/People.jsx";
import Login from "./components/authentication/login/Login.jsx";
import Register from "./components/authentication/register/Register.jsx";
import UserProvider from "./context/UserContext.jsx";
import Profile from "./components/pages/profile/Profile.jsx";
import Dashboard from "./components/pages/profile/Dashboard.jsx";


export const routers = createBrowserRouter(
    [
        {
            element: (
                <UserProvider>
                    <App />
                </UserProvider>
            ),
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
                    path: "/movie/:id",
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
                    path: "/register",
                    element: <Register />
                },
            ]
        },
        {
          element: (
              <UserProvider>
                  <Profile />
              </UserProvider>
          ),
            children: [
                {
                    path: "/profile",
                    element: <Profile />
                }
            ]
        }
    ]
)