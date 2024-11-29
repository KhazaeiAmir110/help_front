import {Link} from "react-router-dom";
import {posterImage} from "../../config.js";


function CardListTv({type, tv}) {
    return (
        <Link className="w-48 h-96" to={`/${type}/${tv.id}`}>
            <div className={"h-full bg-white relative rounded overflow-hidden"}>
                <img className={"object-fill w-full h-3/4"}
                     src={posterImage(tv.poster_path)} alt={tv.name}/>
                <h1 className="m-3 mb-0 text-slate-950 hover:text-blue-900 text-base font-medium">
                    {tv.name}
                </h1>
                <p className="ml-3 text-slate-600">{tv.first_air_date}</p>
            </div>
        </Link>
    )
}

export default CardListTv;