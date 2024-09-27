import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import MoviesList from "./components/movies/MoviesList.jsx";


export const routers = createBrowserRouter(
    [
        {
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <MoviesList />
                },
                {
                    path: "/movies",
                    element: <MoviesList />
                }
            ]
        }
    ]
)