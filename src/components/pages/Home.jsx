import MovieListSlider from "../movies/MoviesListSlider.jsx";
import {useState} from "react";


function Home() {

    const [movies, setMovies] = useState({movie: [], onTv: [], person: []});

    const [moviesActiveTab, setMoviesActiveTab] = useState("now_playing");
    const [tvActiveTab, setTVActiveTab] = useState("airing_today");
    
    // movies
    function handelChangeMoviesActiveTab(tab) {
        setMoviesActiveTab(tab)
    }

    function activeClassMovies(tab) {
        return tab === moviesActiveTab && "text-yellow-500";
    }
    
    // tv
    function handelChangeTVActiveTab(tab) {
        setTVActiveTab(tab)
    }

    function activeClassTV(tab) {
        return tab === tvActiveTab && "text-yellow-500";
    }

    return (
        <div className={"container"}>

            {/*Movies*/}
            <div className={"mt-12 mb-12"}>
                <div className={"md:flex gap-16 mb-8 items-center"}>
                    <a href={"#"}><h2 className={"text-slate-100 hover:text-yellow-500 text-4xl"}>Movies</h2></a>

                    <ul className={"flex gap-4 uppercase text-xl [&>*]:cursor-pointer"}>
                        <li onClick={() => handelChangeMoviesActiveTab("now_playing")}
                            className={`hover:text-[#dcf836] ${activeClassMovies('now_playing')}`}>Now Playing
                        </li>
                        <li onClick={() => handelChangeMoviesActiveTab("popular")}
                            className={`hover:text-[#dcf836] ${activeClassMovies('popular')}`}>Popular
                        </li>
                        <li onClick={() => handelChangeMoviesActiveTab("top_rated")}
                            className={`hover:text-[#dcf836] ${activeClassMovies('top_rated')}`}>Top Rated
                        </li>
                        <li onClick={() => handelChangeMoviesActiveTab("upcoming")}
                            className={`hover:text-[#dcf836] ${activeClassMovies('upcoming')}`}>Upcoming
                        </li>
                    </ul>
                </div>
                <MovieListSlider type="movie" activeTab={moviesActiveTab}/>
            </div>

            {/*TV*/}
            <div className={"mt-12 mb-12"}>
                <div className={"md:flex gap-16 mb-8 items-center"}>
                    <a href={"#"}><h2 className={"text-slate-100 hover:text-yellow-500 text-4xl"}>On TV</h2></a>

                    <ul className={"flex gap-4 uppercase text-xl [&>*]:cursor-pointer"}>
                        <li onClick={() => handelChangeTVActiveTab("airing_today")}
                            className={`hover:text-[#dcf836] ${activeClassTV('airing_today')}`}>
                            Airing Today
                        </li>

                        <li onClick={() => handelChangeTVActiveTab("popular")}
                            className={`hover:text-[#dcf836] ${activeClassTV('popular')}`}>
                            Popular
                        </li>
                        <li onClick={() => handelChangeTVActiveTab("top_rated")}
                            className={`hover:text-[#dcf836] ${activeClassTV('top_rated')}`}>
                            Top rated
                        </li>
                    </ul>
                </div>
                <MovieListSlider type="tv" activeTab={tvActiveTab}/>
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
                <MovieListSlider moveis={movies.person} type="person" activeTab={moviesActiveTab}/>
            </div>
        </div>
    );
}

export default Home;