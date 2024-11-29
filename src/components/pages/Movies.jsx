import {useEffect, useState} from "react";
import {fetchData} from "../../services/fetchData.js";
import {posterImage} from "../../config.js";

function Movies() {

    const [movie, setMovie] = useState([]);


    async function fetchMovieTV() {
        const {data} = await fetchData.get("movie/latest");
        setMovie(data)
    }

    useEffect(() => {
        fetchMovieTV()
    }, movie.id)

    return (
        <div>
            <div className="ml-[50px] -mt-[0px]">
                {
                    movie ? (
                        <div className="container grid grid-cols-4 gap-10 -mt-80">
                            <div className="col-span-1">
                                <img src={posterImage(movie.poster_path)} alt={movie.title}/>
                            </div>
                            <div className="col-span-3">
                                {/*title*/}
                                <div className="flex gap-1 items-center">
                                    <h1 className="text-slate-100 hover:text-yellow-500 text-4xl font-semibold">
                                        {movie.title}
                                    </h1>
                                    <time className="text-slate-500">
                                        {movie.release_date?.split("-")[0]}
                                    </time>
                                </div>
                                {/*overview*/}
                                <div className="mt-24 flex flex-col gap-4">
                                    <h1 className="text-slate-50 hover:text-cyan-800 text-xl font-semibold">Overview</h1>
                                    <p className="text-slate-400 w-2/3">{movie.overview}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <h1>Loading ....</h1>
                    )
                }
            </div>
        </div>
    );
}

export default Movies;