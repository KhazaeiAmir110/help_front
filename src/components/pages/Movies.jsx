import {useEffect, useState} from "react";
import {fetchData} from "../../services/fetchData.js";
import {posterImage} from "../../config.js";
import CardListMovie from "../slider&card/CardListMovie.jsx";
import {list} from "postcss";

function Movies() {

    const [movieLatest, setMovieLatest] = useState([]);
    const [listMovies, setListMovies] = useState([]);


    // latest
    async function fetchMovieTV() {
        const {data} = await fetchData.get("movie/latest");
        setMovieLatest(data)
    }
    useEffect(() => {
        fetchMovieTV()
    }, movieLatest.id)

    // list movie
    async function fetchListMovie() {
        const {data} = await fetchData.get("movie/popular");
        setListMovies(data)
    }

    useEffect(() => {
        fetchListMovie()
    }, [])

    return (
        <div>
            <div className="ml-[50px] -mt-[80px]">
                <div className="container grid grid-cols-3 gap-10 -mt-96 ml-40">
                    <div className="col-span-1 w-1/2 h-1/2 ml-32">
                        <img src={posterImage(movieLatest.poster_path)} alt={movieLatest.title}/>
                    </div>
                    <div className="col-span-2">
                        {/*title*/}
                        <div className="flex flex-col gap-8">
                            <h1 className="text-slate-100 hover:text-yellow-500 text-4xl font-semibold">
                                {movieLatest.title}
                            </h1>
                            <h1 className="text-slate-500 text-xl">
                                First Air Date : {movieLatest.release_date}
                            </h1>
                            <h1 className="text-cyan-800 text-xl font-semibold">Overview</h1>
                            <p className="text-slate-400 w-5/6">{movieLatest.overview}</p>
                        </div>
                        {/*overview*/}
                        <div className="mt-24 flex flex-col gap-4">

                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-32 ml-28 m-10 flex flex-wrap gap-8">
                {
                    listMovies?.results?.map(movie => (
                        <CardListMovie movie={movie} type="movie" key={movie.id}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Movies;