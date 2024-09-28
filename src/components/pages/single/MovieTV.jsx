import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {CONFIG, posterImage} from "../../../config.js";

function MovieTV(props) {

    const [movieTv, setMovieTv] = useState([]);

    const {id} = useParams();

    async function fetchMovieTV() {
        const {data} = await axios.get(
            `${CONFIG.baseURL}/${props.type}/${id}?api_key=${CONFIG.apiKey}`
        );

        setMovieTv(data)
    }

    useEffect(() => {
        fetchMovieTV()
    }, [id])

    return (
        <div>
            <h1>{
                props.type === "movie" ? (
                    movieTv.title
                ) : (
                    movieTv.name
                )
            }</h1>
            <img src={posterImage(movieTv.poster_path)} />
        </div>
    );
}

export default MovieTV;