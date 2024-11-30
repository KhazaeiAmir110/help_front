import {Link} from "react-router-dom";

import {posterImage} from "../../config.js";


function Card(props) {
    return (
        <Link to={`/${props.type}/${props.movie.id}`}>
            <div className={"bg-gray-500 aspect-[2/3] relative rounded overflow-hidden"}>
                <img className={"object-fill w-full h-full"}
                     src={posterImage(props.type === "person" ? (props.movie.profile_path) : (props.movie.poster_path))} alt={props.movie.title}/>
                <div
                    className={"flex flex-col p-6 justify-end absolute bottom-0 left-0 w-full h-fit bg-gradient-to-b from-[#00000003] to-[#000000cc] hover:to-[#000]"}>
                    <h3 className={"uppercase"}>
                        {
                            props.type === "movie" ? (
                                props.movie.title
                            ) : (
                                props.movie.name
                            )
                        }
                    </h3>
                    {
                        props.type === "person" ? (
                            ""
                        ) : (
                            <div className={"flex gap-0.5 items-center"}>
                    <span className={"text-yellow-400"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                             className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path
                                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                    </span>
                                <span className={"text-sm"}>
                        <span className={"text-xl"}>{props.movie.vote_average}</span> / 10
                        </span>
                            </div>
                        )
                    }
                </div>
            </div>
        </Link>
    );
}

export default Card;