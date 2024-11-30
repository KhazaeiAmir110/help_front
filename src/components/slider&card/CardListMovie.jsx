import {Link} from "react-router-dom";
import {posterImage} from "../../config.js";


function CardListMovie({type, movie}) {
    return (
        <Link className="w-48 h-96" to={`/${type}/${movie.id}`}>
            <div className={"h-full bg-white relative rounded overflow-hidden"}>
                <img className={"object-fill w-full h-3/4"}
                     src={posterImage(movie.poster_path)} alt={movie.title}/>
                <h1 className="m-3 mb-0 text-slate-950 hover:text-blue-900 text-base font-medium">
                    {movie.title}
                </h1>
                <p className="ml-3 text-slate-600">{movie.release_date}</p>
            </div>
        </Link>
    )
}

export default CardListMovie;