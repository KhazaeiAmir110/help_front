import {useEffect, useState} from "react";

import {fetchData} from "../services/fetchData.js";


export function useMovieTv(options) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    async function loadData() {
        if (!loading) setLoading(true);

        const result = await fetchData.get(
                options.endpoint, {params: options.params}
        );

        setLoading(false)
        setData(result.data)
    }

    useEffect(() => {
        loadData().catch(error => setError(error));
    }, [options]);

    return {data, loading, error};
}