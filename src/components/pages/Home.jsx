import MovieListSlider from "../movies/MoviesListSlider.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {CONFIG} from "../../config.js";


function Home() {

    const [movies, setMovies] = useState({trending: [], onTv: []});

    async function loadMovies(type, path) {

        const url = `${CONFIG.baseURL}/${path}?api_key=${CONFIG.apiKey}`
        const {data} = await axios.get(url);

        setMovies(prevMovies => ({
            ...prevMovies,
            [type]: data.results
        }));
    }

    useEffect(() => {
        loadMovies("trending", "trending/movie/day");
    }, [])

    useEffect(() => {
        loadMovies("onTv", "tv/popular")
    }, [])

    return (
        <div className={"container"}>
            <div className={"mt-12 mb-12"}>
                <div className={"md:flex gap-16 mb-8 items-center"}>
                    <a href={"#"}><h2 className={"text-slate-100 hover:text-yellow-500 text-4xl"}>Trending</h2></a>

                    <ul className={"flex gap-4 uppercase text-xl"}>
                        <li className={"hover:text-[#dcf836]"}>Today</li>
                        <li className={"hover:text-[#dcf836]"}>This Week</li>
                        <li className={"hover:text-[#dcf836]"}>This Month</li>
                        <li className={"hover:text-[#dcf836]"}>This Year</li>
                    </ul>
                </div>
                <MovieListSlider moveis={movies.trending} type="movies"/>
            </div>

            <div className={"mt-12 mb-12"}>
                <div className={"md:flex gap-16 mb-8 items-center"}>
                    <a href={"#"}><h2 className={"text-slate-100 hover:text-yellow-500 text-4xl"}>On TV</h2></a>

                    <ul className={"flex gap-4 uppercase text-xl"}>
                        <li className={"hover:text-[#dcf836]"}>Popular</li>
                        <li className={"hover:text-[#dcf836]"}>Coming soon</li>
                        <li className={"hover:text-[#dcf836]"}>Top rated</li>
                    </ul>
                </div>
                <MovieListSlider moveis={movies.onTv} type="tv"/>
            </div>
        </div>
    );
}

export default Home;