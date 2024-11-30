import {useEffect, useState} from 'react';

import {fetchData} from "../../../services/fetchData.js";
import Card from "../../slider&card/Card.jsx";


function Dashboard({user}) {
    const [watchListTv, setWatchListTv] = useState({});
    const [watchListMovie, setWatchListMovie] = useState({});

    const [ratedListTv, setRatedListTv] = useState({});
    const [ratedListMovie, setRatedListMovie] = useState({});


    async function fetchListMovie() {
        const dataTv = await fetchData.get(`account/${user.id}/watchlist/tv`);
        const dataMovie = await fetchData.get(`account/${user.id}/watchlist/movies`);

        const ratedTv = await fetchData.get(`account/${user.id}/rated/tv`);
        const ratedMovie = await fetchData.get(`account/${user.id}/rated/movies`);

        setWatchListTv(dataTv?.data)
        setWatchListMovie(dataMovie?.data)

        setRatedListMovie(ratedMovie?.data)
        setRatedListTv(ratedTv?.data)
    }

    useEffect(() => {
        fetchListMovie()
    }, [])

    return (
        <>
            <div className="m-10">
                <h1 className="font-medium text-2xl">Watch List Movie / Tv</h1>
                <div className="mt-8 m-10 gap-8">
                    <div className="flex gap-8">
                        {
                            watchListMovie?.results?.map(
                                movie => (
                                    <div className="w-48 h-96">
                                        <Card movie={movie} type="movie" key={movie.id}/>
                                    </div>
                                )
                            )
                        }
                    </div>
                    <div className="flex gap-8">
                        {
                            watchListTv?.results?.map(
                                movie => (
                                    <div className="w-48 h-96">
                                        <Card movie={movie} type="movie" key={movie.id}/>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>

            <div className="m-10">
                <h1 className="font-medium text-2xl">Rated List Movie / Tv</h1>
                <div className="mt-8 m-10 gap-8">
                    <div className="flex gap-8">
                        {
                            ratedListMovie?.results?.map(
                                movie => (
                                    <div className="w-48 h-96">
                                        <Card movie={movie} type="movie" key={movie.id}/>
                                    </div>
                                )
                            )
                        }
                    </div>
                    <div className="flex gap-8">
                        {
                            ratedListTv?.results?.map(
                                movie => (
                                    <div className="w-48 h-96">
                                        <Card movie={movie} type="movie" key={movie.id}/>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )

}

export default Dashboard;