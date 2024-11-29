import {useEffect, useState} from "react";

import CardListPeople from "../slider&card/CardListPeople.jsx";

function People() {

    const [people, setPeople] = useState([]);


    // list movie
    async function fetchListPeople() {
        const {data} = await fetchData.get("person/popular");
        setPeople(data)
    }

    useEffect(() => {
        fetchListPeople()
    }, [])

    return (
        <div>
            <div className="mt-32 ml-28 m-10 flex flex-wrap gap-8">
                {
                    people?.results?.map(person => (
                        <CardListPeople person={person} type="person"/>
                    ))
                }
            </div>
        </div>
    );
}

export default People;