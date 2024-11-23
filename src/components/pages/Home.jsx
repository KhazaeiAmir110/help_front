import MovieListSlider from "../movies/MoviesListSlider.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {CONFIG} from "../../config.js";
import * as path from "node:path";


function Home() {

    const [movies, setMovies] = useState({movie: [], onTv: [], person: []});

    const [moviesActiveTab, setMoviesActiveTab] = useState("now_playing");

    function handelChangeMoviesActiveTab(tab) {
        setMoviesActiveTab(tab)
    }

    function activeClass(tab) {
        return tab === moviesActiveTab && "text-yellow-500";
    }

    async function loadApi(type, path) {

        const url = `${CONFIG.baseURL}/${path}?api_key=${CONFIG.apiKey}`
        const {data} = await axios.get(url);

        setMovies(prevMovies => ({
            ...prevMovies,
            [type]: data.results
        }));
    }

    useEffect(() => {
        (async () => {
            const result = loadApi(type, path);
        })();
    }, [])

    useEffect(() => {
        loadApi("onTv", "tv/popular")
    }, [])

    useEffect(() => {
        loadApi("person", "person/popular");
    }, []);

    return (
        <div className={"container"}>

            {/*Movies*/}
            <div className={"mt-12 mb-12"}>
                <div className={"md:flex gap-16 mb-8 items-center"}>
                    <a href={"#"}><h2 className={"text-slate-100 hover:text-yellow-500 text-4xl"}>Movies</h2></a>

                    <ul className={"flex gap-4 uppercase text-xl [&>*]:cursor-pointer"}>
                        <li onClick={() => handelChangeMoviesActiveTab("now_playing")}
                            className={`hover:text-[#dcf836] ${activeClass('now_playing')}`}>Now Playing
                        </li>
                        <li onClick={() => handelChangeMoviesActiveTab("popular")}
                            className={`hover:text-[#dcf836] ${activeClass('popular')}`}>Popular
                        </li>
                        <li onClick={() => handelChangeMoviesActiveTab("top_rated")}
                            className={`hover:text-[#dcf836] ${activeClass('top_rated')}`}>Top Rated
                        </li>
                        <li onClick={() => handelChangeMoviesActiveTab("upcoming")}
                            className={`hover:text-[#dcf836] ${activeClass('upcoming')}`}>Upcoming
                        </li>
                    </ul>
                </div>
                <MovieListSlider moveis={movies.movie} type="movies" activeTab={moviesActiveTab}/>
            </div>

            {/*TV*/}
            <div className={"mt-12 mb-12"}>
                <div className={"md:flex gap-16 mb-8 items-center"}>
                    <a href={"#"}><h2 className={"text-slate-100 hover:text-yellow-500 text-4xl"}>On TV</h2></a>

                    <ul className={"flex gap-4 uppercase text-xl [&>*]:cursor-pointer"}>
                        <li className={"hover:text-[#dcf836]"}>Airing Today</li>
                        <li className={"hover:text-[#dcf836]"}>Coming soon</li>
                        <li className={"hover:text-[#dcf836]"}>Top rated</li>
                    </ul>
                </div>
                <MovieListSlider moveis={movies.onTv} type="tv"/>
            </div>

            {/*People*/}
            <div className={"mt-12 mb-12"}>
                <div className={"md:flex gap-16 mb-8 items-center"}>
                    <a href={"#"}><h2 className={"text-slate-100 hover:text-yellow-500 text-4xl"}>People</h2></a>

                    <ul className={"flex gap-4 uppercase text-xl [&>*]:cursor-pointer"}>
                        <li className={"hover:text-[#dcf836]"}>Popular</li>
                        <li className={"hover:text-[#dcf836]"}>Movies</li>
                        <li className={"hover:text-[#dcf836]"}>TV shows</li>
                    </ul>
                </div>
                <MovieListSlider moveis={movies.person} type="person"/>
            </div>
        </div>
    );
}

export default Home;