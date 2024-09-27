import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {CONFIG} from "../../../config.js";

function MovieTV(props) {

    const [movieTv, setMovieTv] = useState([]);

    const {id} = useParams();

    async function fetchMovieTV() {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/${props.type}/${id}?api_key=${CONFIG.apiKey}`
        );

        setMovieTv(data)
    }

    useEffect(() => {
        fetchMovieTV()
    }, [id])

    return (
        <div>
            <h1>{movieTv.title}</h1>
        </div>
    );
}

export default MovieTV;