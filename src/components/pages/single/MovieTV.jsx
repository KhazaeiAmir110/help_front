import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";

import {CONFIG, posterImage} from "../../../config.js";
import {UserContext} from "../../../context/UserContext.jsx";
import toast from "react-hot-toast";
import {fetchData} from "../../../services/fetchData.js";

function MovieTV(props) {

    const [movieTv, setMovieTv] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [isWatch, setIsWatch] = useState(false)
    const {id} = useParams();
    const {user, session} = useContext(UserContext);


    async function fetchMovieTV() {
        const {data} = await fetchData.get(`${props.type}/${id}`);
        setMovieTv(data)

        if (props.type === "tv") {
            const data = await fetchData.get(`account/${id}/watchlist/${props.type}`)
            setWatchList(data)
        } else {
            const data = await fetchData.get(`account/${id}/watchlist/movies`)
            setWatchList(data)
        }
    }

    useEffect(() => {
        fetchMovieTV().catch(
            error => {
                toast.error(error);
            }
        )
    }, [id])

    useEffect(() => {
        const isFind = watchList.data?.results.find((f) => f.id === movieTv.id);
        setIsWatch(Boolean(isFind));
    }, [movieTv, watchList])


    // Add to watch MovieTV
    function handelWatchList() {
        if (user) {
            fetchData.post(
                `account/${user.id}/watchlist`,
                {
                    media_type: props.type,
                    media_id: movieTv.id,
                    watchlist: !isWatch
                }
            ).then(() => {
                    toast.success("Movie changes from watch list!");
                })
        }
    }

    return (
        <div>
            <div className="ml-[50px] -mt-[0px]">
                {
                    movieTv ? (
                        <div className="container grid grid-cols-4 gap-10 -mt-80">
                            <div className="col-span-1">
                                <img src={posterImage(movieTv.poster_path)} alt="{movieTv.title}"/>
                            </div>
                            <div className="col-span-3">

                                {/*title*/}
                                <div className="flex gap-1 items-center">
                                    <h1 className="text-slate-100 hover:text-yellow-500 text-4xl font-semibold">
                                        {
                                            props.type === "movie" ? (
                                                movieTv.title
                                            ) : (
                                                movieTv.name
                                            )
                                        }
                                    </h1>
                                    <time className="text-slate-500">
                                        {
                                            props.type === "movie" ? (
                                                movieTv.release_date?.split("-")[0]
                                            ) : (
                                                movieTv.first_air_date?.split("-")[0]
                                            )
                                        }
                                    </time>
                                </div>
                                {/*sher&favorite&...*/}
                                <div className="flex gap-8 mt-8 text-yellow-500 font-normal">
                                    <button className="flex items-center gap-4" onClick={handelWatchList}>
                                        <p className="border border-yellow-400 rounded-full p-3">
                                            {
                                                isWatch ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="12" height="12"
                                                         fill="currentColor"
                                                        className="bi bi-heart-fill"
                                                         viewBox="0 0 16 16">
                                                        <path fillRule="evenodd"
                                                              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="12" height="12"
                                                        fill="currentColor"
                                                        className="bi bi-heart"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                                    </svg>
                                                )
                                            }
                                        </p>
                                        <span>{isWatch ? "Remove From" : "Add to"}  Watch list</span>
                                    </button>
                                    <button className="flex items-center gap-4">
                                        <p className="border border-yellow-400 rounded-full p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 width="12" height="12"
                                                 fill="currentColor"
                                                 className="bi bi-share"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                                            </svg>
                                        </p>
                                        <span>Share</span>
                                    </button>
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

export default MovieTV;