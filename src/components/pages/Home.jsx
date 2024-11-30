import FetchDataSlider from "../slider&card/FetchDataSlider.jsx";
import {useState} from "react";


function Home() {
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
                    <a href={"/movies"}><h2 className={"text-slate-100 hover:text-yellow-500 text-4xl"}>Movies</h2></a>

                    <ul className={"flex gap-4 text-xl [&>*]:cursor-pointer"}>
                        <li onClick={() => handelChangeMoviesActiveTab("now_playing")}
                            className={`hover:text-[#dcf836] ${activeClassMovies('now_playing')}`}>Now Playing
                        </li>
                        <li onClick={() => handelChangeMoviesActiveTab("top_rated")}
                            className={`hover:text-[#dcf836] ${activeClassMovies('top_rated')}`}>Top Rated
                        </li>
                        <li onClick={() => handelChangeMoviesActiveTab("upcoming")}
                            className={`hover:text-[#dcf836] ${activeClassMovies('upcoming')}`}>Upcoming
                        </li>
                    </ul>
                </div>
                <FetchDataSlider type="movie" activeTab={moviesActiveTab}/>
            </div>

            {/*TV*/}
            <div className={"mt-12 mb-12"}>
                <div className={"md:flex gap-16 mb-8 items-center"}>
                    <a href={"/tv"}><h2 className={"text-slate-100 hover:text-yellow-500 text-4xl"}>On TV</h2></a>

                    <ul className={"flex gap-4 text-xl [&>*]:cursor-pointer"}>
                        <li onClick={() => handelChangeTVActiveTab("airing_today")}
                            className={`hover:text-[#dcf836] ${activeClassTV('airing_today')}`}>
                            Airing Today
                        </li>
                        <li onClick={() => handelChangeTVActiveTab("top_rated")}
                            className={`hover:text-[#dcf836] ${activeClassTV('top_rated')}`}>
                            Top Rated
                        </li>
                    </ul>
                </div>
                <FetchDataSlider type="tv" activeTab={tvActiveTab}/>
            </div>

            {/*People*/}
            <div className={"mt-12 mb-12"}>
                <div className={"md:flex gap-16 mb-8 items-center"}>
                    <a href={"/people"}><h2 className={"text-slate-100 hover:text-yellow-500 text-4xl"}>People</h2></a>
                </div>
                <FetchDataSlider type="person" activeTab="popular"/>
            </div>
        </div>
    );
}

export default Home;