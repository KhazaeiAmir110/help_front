import {useEffect, useState} from 'react';

import {httpService} from "../services/httpService";

function useRestAPI(method = "GET", url = "", queryParams, body) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true)
        httpService(method, url, queryParams, body)
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [method, url, queryParams, body]);

    return {data, error, loading}
}

export default useRestAPI;