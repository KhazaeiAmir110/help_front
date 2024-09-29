import axios from "axios";
import {CONFIG} from "../../../config.js";

const session_id = localStorage.getItem("session_id");


export const fetch = axios.create({
    baseURL: `${CONFIG.baseURL}/`,
    params: {
        api_key: CONFIG.apiKey,
        ...(session_id && { session_id }),
    }
})

window.fetch = fetch;