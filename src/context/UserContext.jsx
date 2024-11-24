import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

import {fetchData} from "../services/fetchData.js";


export const UserContext = createContext({});


// eslint-disable-next-line react/prop-types
function UserProvider({children}) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(initSession);

    function initSession() {
        return localStorage.getItem("session") ? localStorage.getItem("session") : null;
    }

    async function getUserData(){
        const {data} = await fetchData.get(`account`).then().catch()
        setUser(data)
    }

    useEffect(() => {
        if (session) {
            window.fetchData.defaults.params.session_id = session;
            getUserData().then()
            localStorage.setItem("session", session)

            if (location.pathname === "/login") {
                navigate(
                    "/profile",
                    {replace: true, state: [user, logout]}
                )
            }
        }
    }, [session]);


    async function login(username, password) {
        try {
            // The first stage
            const tokenResult = await fetchData.get(`authentication/token/new`)

            // The second stage
            const authorize = await fetchData.post(
                `authentication/token/validate_with_login`,
                {username, password, request_token: tokenResult.data.request_token}
            )

            // The third stage
            const session = await fetchData.post(
                `authentication/session/new`,
                {request_token: authorize.data.request_token}
            )

            setSession(session.data.session_id)
            // fetch data => fix session id
            window.fetchData.defaults.params.session_id = session.data.session_id;

            toast.success("User logged in successfully")

        } catch  {
            toast.error('Invalid username or password');

        }
    }


    // logout
    function logout() {
        setUser(null);
        setSession(null);
        localStorage.clear()
        // fetch data => fix session id
        delete window.fetchData.defaults.params.session_id
        toast.success(`Logout ${user.username}`);
        navigate(
            "/",
            {replace: true,}
        )
    }


    return (
        <UserContext.Provider value={{user, login, session, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;