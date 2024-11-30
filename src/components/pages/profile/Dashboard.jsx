import {useContext} from 'react';
import {Navigate} from "react-router-dom";

import {UserContext} from "../../../context/UserContext.jsx";
import {posterImage} from "../../../config.js";


function Dashboard() {
    const {session, user} = useContext(UserContext);

    return (
        session ? (
            <div>
                Dashboard
                <div>{
                    user ? (
                        <div>
                            {user.username}
                            <img className={"rounded-full"} src={posterImage(user.avatar.tmdb.avatar_path)}
                                 alt={"avatar"}/>
                        </div>
                    ) : (
                        ""
                    )
                }</div>
            </div>
        ) : (
            <Navigate to={"/login"}/>
        )
    )

}

export default Dashboard;