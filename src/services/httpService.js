import axios from "axios";
import Cookies from "js-cookie";

import {CONFIG} from "../config";

const token = Cookies.get("token")
const instance = axios.create({
    baseURL: CONFIG.domain,
    headers: {
        Authorization: `Token ${token}`,
    },
});

function httpService(method, url, queryParams, body) {
    return instance(url, {method, params: queryParams, data: body});
}

export {httpService};