import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

import {CONFIG, posterImage} from "../../../config.js";

function Person() {

    const [person, setPerson] = useState([]);
    const {id} = useParams();

    async function fetchPerson() {
        const {data} = await axios.get(
            `${CONFIG.baseURL}/person/${id}?api_key=${CONFIG.apiKey}`,
        );

        setPerson(data)
    }

    useEffect(() => {
        fetchPerson()
    }, [id])

    return (
        <div>
            <h1>{person.name}</h1>
            <img src={posterImage(person.profile_path)}/>
        </div>
    );
}

export default Person;