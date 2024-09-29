import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";

import {CONFIG, posterImage} from "../../../config.js";
import {UserContext} from "../../../context/UserContext.jsx";

function MovieTV(props) {

    const [movieTv, setMovieTv] = useState([]);
    const {id} = useParams();
    const {user, session} = useContext(UserContext);

    async function fetchMovieTV() {
        const {data} = await axios.get(
            `${CONFIG.baseURL}/${props.type}/${id}?api_key=${CONFIG.apiKey}`
        );

        setMovieTv(data)
    }

    useEffect(() => {
        fetchMovieTV()
    }, [id])


    // Add to watch MovieTV
    function handleAddToWatchList() {
        axios.post(
            `${CONFIG.baseURL}/account/${user.id}/watchlist?api_key=${CONFIG.apiKey}&session_id=${session}`,
            {
                media_type: props.type,
                media_id: movieTv.id,
                watchlist: true
            }
        )
    }

    function handleDeleteToWatchList() {
         axios.post(
            `${CONFIG.baseURL}/account/${user.id}/watchlist?api_key=${CONFIG.apiKey}&session_id=${session}`,
            {
                media_type: props.type,
                media_id: movieTv.id,
                watchlist: false
            }
        )
    }

    return (
        <div>
            <h1>{
                props.type === "movie" ? (
                    movieTv.title
                ) : (
                    movieTv.name
                )
            }</h1>
            <img src={posterImage(movieTv.poster_path)} alt={movieTv.title}/>


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