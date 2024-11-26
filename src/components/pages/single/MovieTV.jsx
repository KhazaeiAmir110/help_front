import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";

import {CONFIG, posterImage} from "../../../config.js";
import {UserContext} from "../../../context/UserContext.jsx";
import toast from "react-hot-toast";
import {fetchData} from "../../../services/fetchData.js";

function MovieTV(props) {

    const [movieTv, setMovieTv] = useState([]);
    const {id} = useParams();
    const {user, session} = useContext(UserContext);

    async function fetchMovieTV() {
        const {data} = await fetchData.get(`${props.type}/${id}`);
        setMovieTv(data)
    }

    useEffect(() => {
        fetchMovieTV().catch(
            error => {
                toast.error(error);
            }
        )
    }, [id])


    // Add to watch MovieTV
    function handleAddToWatchList() {
        if (user) {
            fetchData.post(
                `account/${user.id}/watchlist`,
                {
                    media_type: props.type,
                    media_id: movieTv.id,
                    watchlist: true
                }
            )
                .then(() => {
                    toast.success("Movie added!");
                })
        } else {
            toast.error("You are not logged in!");
        }

    }

    function handleDeleteToWatchList() {
        if (user) {
            axios.post(
            `${CONFIG.baseURL}/account/${user.id}/watchlist?api_key=${CONFIG.apiKey}&session_id=${session}`,
            {
                media_type: props.type,
                media_id: movieTv.id,
                watchlist: false
            }
            )
                .then(() => {
                    toast.success("Movie deleted!");
                })
        } else {
            toast.error("You are not logged in !")
        }
    }

    return (
        <div>
            <div className="ml-[50px] -mt-[0px]">
                {
                    movieTv ? (
                        <div className="container grid grid-cols-4 gap-10">
                            <div className="col-span-1">
                                <img src={posterImage(movieTv.poster_path)} alt="{movieTv.title}"/>
                            </div>
                            <div className="col-span-3">
                                <div className="flex gap-3 items-center">
                                    <h1>{
                                        props.type === "movie" ? (
                                            movieTv.title
                                        ) : (
                                            movieTv.name
                                        )
                                    }</h1>
                                    <time className="text-slate-500">
                                        {/*{movieTv.release_date.split("-")[0]}*/}
                                    </time>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <h1>Loading ....</h1>
                    )
                }
            </div>


            {/*Add to Watch MovieTV*/}
            {
                props.type === "person" ? (
                    ""
                ) : (
                    <>
                        <button
                            onClick={handleAddToWatchList}
                            type="button"
                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            Add to watch list !
                        </button>
                        <button
                            onClick={handleDeleteToWatchList}
                            type="button"
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            Delete as watch list !
                        </button>
                    </>
                )
            }
        </div>
    );
}

export default MovieTV;