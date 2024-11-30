import axios from "axios";
import {CONFIG} from "../config.js";

const sessionId = localStorage.getItem("session_id");

export const fetchData = axios.create({
    baseURL: `${CONFIG.baseURL}/`,
    params: {
        api_key: CONFIG.apiKey,
        ...(sessionId && { sessionId }),
    }
});

window.fetchData = fetchData;