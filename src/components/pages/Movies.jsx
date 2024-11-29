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
            <div className="ml-[50px] -mt-[80px]">
                <div className="container grid grid-cols-3 gap-10 -mt-96 ml-40">
                    <div className="col-span-1 w-1/2 h-1/2 ml-32">
                        <img src={posterImage(movie.poster_path)} alt={movie.title}/>
                    </div>
                    <div className="col-span-2">
                        {/*title*/}
                        <div className="flex flex-col gap-8">
                            <h1 className="text-slate-100 hover:text-yellow-500 text-4xl font-semibold">
                                {movie.title}
                            </h1>
                            <h1 className="text-slate-500 text-xl">
                                First Air Date : {movie.release_date}
                            </h1>
                            <h1 className="text-cyan-800 text-xl font-semibold">Overview</h1>
                            <p className="text-slate-400 w-5/6">{movie.overview}</p>
                        </div>
                        {/*overview*/}
                        <div className="mt-24 flex flex-col gap-4">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movies;