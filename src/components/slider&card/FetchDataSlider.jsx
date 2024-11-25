import {useEffect, useState} from "react";
import PersonListSlider from "./PersonListSlider.jsx";
import MovieTVSlider from "./Movie&TVSlider.jsx";
import {fetchData} from "../../services/fetchData.js";


function FetchDataSlider(props) {

    const [movies, setMovies] = useState({movie: [], tv: [], person: []});

    useEffect(() => {
        (async () => {
            const {data} = await fetchData.get(`${props.type}/${props.activeTab}`);
            setMovies(prevMovies => ({
                ...prevMovies,
                [props.type]: data.results
            }));
        })()
    }, [props.type, props.activeTab])

    return (
        <>
            {
                props.type === "person" ? (
                    <PersonListSlider persons={movies.person}/>
                ) : (
                    <MovieTVSlider movies={movies.movie} tv={movies.tv}/>
                )
            }
        </>
    );
}

export default FetchDataSlider;