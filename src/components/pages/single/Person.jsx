import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {posterImage} from "../../../config.js";
import {fetchData} from "../../../services/fetchData.js";

function Person() {

    const [person, setPerson] = useState([]);
    const {id} = useParams();

    console.log(person)

    // detail
    async function fetchPerson() {
        const {data} = await fetchData.get(`person/${id}`);
        setPerson(data)
    }

    useEffect(() => {
        fetchPerson()
    }, [id])

    return (
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
                            <div className="mt-8 flex flex-col gap-4">
                                <h1 className="text-slate-300 text-xm font-semibold">Place Of Birth : {person.place_of_birth}</h1>
                                <h1 className="text-slate-300 text-sm font-semibold">Known For Department : {person.known_for_department}</h1>

                            {/*biography*/}
                                <div className="flex flex-col gap-4">
                                    <h1 className="text-slate-50 hover:text-cyan-800 text-xl font-semibold">Biography</h1>
                                    <p className="text-slate-400">{person.biography}</p>
                                </div>
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