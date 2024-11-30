import React from 'react';
import {posterImage} from "../../../config.js";
import {Link} from "react-router-dom";

function FindItem(props) {
    const {media_type} = props.item;

    return (
        <div className={"border-b-2 border-slate-700"}>
            {
                media_type === "movie" ? (
                    <Link to={`/movies/${props.item.id}`}>
                        <div className="flex gap-3 items-center text-lg">
                            <img
                                className="object-cover w-11 h-11 rounded-md"
                                src={posterImage(props.item.poster_path)}
                                alt={props.item.title}
                            />
                            <p>{props.item.title}</p>
                        </div>
                    </Link>
                ) : media_type === "tv" ? (
                    <Link to={`/tv/${props.item.id}`}>
                        <div className="flex gap-3 items-center text-lg">
                            <img
                                className="object-cover w-11 h-11 rounded-md"
                                src={posterImage(props.item.poster_path)}
                                alt={props.item.title}
                            />
                            <p>{props.item.name}</p>
                        </div>
                    </Link>
                ) : media_type === "person" ? (
                    <Link to={`/person/${props.item.id}`}>
                        <div className="flex gap-3 items-center text-lg">
                            <img
                                className="object-cover w-11 h-11 rounded-md"
                                src={
                                props.item.poster_path ? (posterImage(props.item.profile_path)) :("../../../../public/images/header/default_profile.png")
                                }
                                alt={props.item.title}
                            />
                            <p>{props.item.name}</p>
                        </div>
                    </Link>
                ) : (
                    <div>Unknown media type</div>
                )
            }
        </div>
    )
}

export default FindItem;