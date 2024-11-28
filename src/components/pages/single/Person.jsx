import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

import {CONFIG, posterImage} from "../../../config.js";
import ReactStars from "react-rating-stars-component";

function Person() {

    const [person, setPerson] = useState([]);
    const {id} = useParams();

    async function fetchPerson() {
        const {data} = await axios.get(
            `${CONFIG.baseURL}/person/${id}?api_key=${CONFIG.apiKey}`,
        );

        setPerson(data)
    }

    console.log(person)

    useEffect(() => {
        fetchPerson()
    }, [id])

    return (
        // <div>
        //     <h1>{person.name}</h1>
        //     <img src={posterImage(person.profile_path)}/>
        // </div>
        <div className="ml-[50px] -mt-[0px]">
            {
                person ? (
                    <div className="container grid grid-cols-4 gap-10 -mt-80">
                        <div className="col-span-1">
                            <img src={posterImage(person.profile_path)} alt={person.name}/>
                        </div>
                        <div className="col-span-3">
                            {/*name*/}
                            <div className="flex gap-1 items-center">
                                <h1 className="text-slate-100 hover:text-yellow-500 text-4xl font-semibold">
                                    {person.name}
                                </h1>
                                <time className="text-slate-500">
                                    {person.birthday}
                                </time>
                            </div>
                            {/*biography*/}
                                <div className="mt-24 flex flex-col gap-4">
                                    <h1 className="text-slate-50 hover:text-cyan-800 text-xl font-semibold">Biography</h1>
                                    <p className="text-slate-400">{person.biography}</p>
                                </div>
                        </div>
                    </div>
                ) : (
                    <h1>Loading ....</h1>
                )
            }
        </div>
    );
}

export default Person;