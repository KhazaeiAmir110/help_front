import {Link} from "react-router-dom";
import {posterImage} from "../../config.js";
import {useEffect, useState} from "react";


function CardListPeople({type, person}) {

    const [personDetail, setPersons] = useState([]);

    // detail
    async function fetchListPerson() {
        const {data} = await fetchData.get(`person/${person.id}`);
        setPersons(data)
    }

    useEffect(() => {
        fetchListPerson()
    }, [])

    return (
        <Link className="w-48 h-96" to={`/${type}/${person.id}`}>
            <div className={"h-full bg-white relative rounded overflow-hidden"}>
                <img className={"object-fill w-full h-3/4"}
                     src={posterImage(person.profile_path)} alt={person.name}/>
                <div className="ml-3">
                    <h1 className="m-3 ml-0 mb-0 text-slate-950 hover:text-blue-900 text-base font-medium">
                        {person.name}
                    </h1>
                    <p className="text-slate-600">{personDetail.birthday}</p>
                    <p className="text-xs text-slate-600">{personDetail.place_of_birth}</p>
                </div>
            </div>
        </Link>
    )
}

export default CardListPeople;