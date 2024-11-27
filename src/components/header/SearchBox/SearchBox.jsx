import {useEffect, useState} from "react";
import {fetch} from "./fetch.js";
import FindItem from "./FindItem.jsx";


function SearchBox() {
    const [query, setQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const timeout = setTimeout(async () => {
            if (query) {
                const {data} = await fetch("search/multi", {
                    params: {
                        query,
                    },
                });
                setSearchResult(data.results);
            } else {
                setSearchResult([]);
            }
        }, 500);

        return () => {
            clearTimeout(timeout);
        };
    }, [query]);

    return (
        <section className="text-slate-100 hidden md:inline">
            <div className="relative">
                <input
                    type={"text"}
                    placeholder={"Search for a movie, TV Show or celebrity that you are looking for"}
                    className={"w-full bg-slate-600 text p-2 border-slate-900 border-2 rounded-md outline-none focus:outline-none placeholder:text-sm"}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"
                    className="bi bi-search absolute w-8 h-6 right-3 top-1/2 -translate-y-1/2"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </div>
            <div
                className={
                    `flex flex-col gap-2 p-2 bg-opacity-95 bg-slate-600 absolute
                     w-10/12 z-10 rounded-md transition-all duration-200 text-slate-950 
                     ${searchResult.length && query
                            ? "max-h-52 overflow-auto"
                            : "h-0 overflow-hidden opacity-0"
                    }`}>
                <div>
                    {searchResult.map((item) => (
                        <FindItem item={item} key={item}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SearchBox;