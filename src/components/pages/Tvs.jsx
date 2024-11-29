import {useEffect, useState} from "react";
import {fetchData} from "../../services/fetchData.js";
import {posterImage} from "../../config.js";

function Tvs() {
    const [tv, setTv] = useState([]);


    async function fetchMovieTV() {
        const {data} = await fetchData.get("tv/latest");
        setTv(data)
    }

    useEffect(() => {
        fetchMovieTV()
    }, tv.id)

    return (
        <div>
            <div className="ml-[50px] -mt-[0px]">
                <div className="container grid grid-cols-4 gap-10 -mt-80">
                            <div className="col-span-1">
                                <img src={posterImage(tv.poster_path)} alt={tv.title}/>
                            </div>
                            <div className="col-span-3">
                                {/*title*/}
                                <div className="flex gap-1 items-center">
                                    <h1 className="text-slate-100 hover:text-yellow-500 text-4xl font-semibold">
                                        {tv.name}
                                    </h1>
                                    <time className="text-slate-500">
                                        {tv.first_air_date?.split("-")[0]}
                                    </time>
                                </div>
                                {/*overview*/}
                                <div className="mt-24 flex flex-col gap-4">
                                    <h1 className="text-slate-50 hover:text-cyan-800 text-xl font-semibold">Overview</h1>
                                    <p className="text-slate-400 w-2/3">{tv.overview}</p>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    );
}

export default Tvs;