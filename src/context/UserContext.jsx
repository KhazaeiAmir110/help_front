import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import axios from "axios";
import toast from "react-hot-toast";

import {CONFIG} from "../config.js";


export const UserContext = createContext({});


function UserProvider({children}) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(initSession);

    function initSession() {
        return localStorage.getItem("session") ? localStorage.getItem("session") : null;
    }

    async function getUserData() {
        const {data} = await axios.get(
            `${CONFIG.baseURL}/account?api_key=${CONFIG.apiKey}&session_id=${session}`
        )

        setUser(data);
        console.log(data);
    }

    useEffect(() => {
        if (session) {
            getUserData()
        }
    }, [session]);


    async function login(username, password) {
        try {
            // The first stage
            const tokenResult = await axios.get(
                `${CONFIG.baseURL}/authentication/token/new?api_key=${CONFIG.apiKey}`
            )

            // The second stage
            const authorize = await axios.post(
                `${CONFIG.baseURL}/authentication/token/validate_with_login?api_key=${CONFIG.apiKey}`,
                {username, password, request_token: tokenResult.data.request_token}
            )

            // The third stage
            const session = await axios.post(
                `${CONFIG.baseURL}/authentication/session/new?api_key=${CONFIG.apiKey}`,
                {request_token: authorize.data.request_token}
            )

            setSession(session.data.session_id)
            localStorage.setItem("session", session.data.session_id)
            toast.success("User logged in successfully")
            navigate(
                "/",
                {replace: true,}
            )

        } catch  {
            toast.error('Invalid username or password');

        }
    }


    return (
        <UserContext.Provider value={{user, login, session}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;