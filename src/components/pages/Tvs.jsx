import {useEffect, useState} from "react";
import {fetchData} from "../../services/fetchData.js";
import {posterImage} from "../../config.js";
import CardListTv from "../slider&card/CardListTv.jsx";

function Tvs() {
    const [tvLatest, setTvLatest] = useState([]);
    const [tvList, setTvList] = useState([]);

    // latest tvLatest
    async function fetchMovieTV() {
        const {data} = await fetchData.get("tv/latest");
        setTvLatest(data)
    }
    useEffect(() => {
        fetchMovieTV()
    }, tvLatest.id)

    // list movie
    async function fetchListTv() {
        const {data} = await fetchData.get("tv/popular");
        setTvList(data)
    }

    useEffect(() => {
        fetchListTv()
    }, [])

    return (
        <div>
            <div className="ml-[50px] -mt-[80px]">
                <div className="container grid grid-cols-3 gap-10 -mt-96 ml-40">
                    <div className="col-span-1 w-1/2 h-1/2 ml-32">
                        <img src={posterImage(tvLatest.poster_path)} alt={tvLatest.title}/>
                    </div>
                    <div className="col-span-2">
                        {/*title*/}
                        <div className="flex flex-col gap-8">
                            <h1 className="text-slate-100 hover:text-yellow-500 text-4xl font-semibold">
                                {tvLatest.name}
                            </h1>
                            <h1 className="text-slate-500 text-xl">
                                First Air Date : {tvLatest.first_air_date}
                            </h1>
                            <h1 className="text-cyan-800 text-xl font-semibold">Overview</h1>
                            <p className="text-slate-400 w-5/6">{tvLatest.overview}</p>
                        </div>
                        {/*overview*/}
                        <div className="mt-24 flex flex-col gap-4">

                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-32 ml-28 m-10 flex flex-wrap gap-8">
                {
                    tvList?.results?.map(tv => (
                        <CardListTv tv={tv} type="tv" key={tv.id}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Tvs;