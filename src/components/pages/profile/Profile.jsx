import {NavLink} from "react-router-dom";
import {useContext} from "react";

import image_slide from "/public/images/header-profile.jpg";
import {UserContext} from "../../../context/UserContext.jsx";
import {posterImage} from "../../../config.js";
import Dashboard from "./Dashboard.jsx";

function Profile() {
    const {user, logout} = useContext(UserContext);
    return (
        <>
            {
                user ? (
                    <div>
                        <div className={"w-full"}>
                            <header className={`container bg-cover py-0.5 md:pt-1 md:pb-12 items-center justify-center`}
                                    style={{
                                        backgroundImage: `linear-gradient(rgb(0 1 36 / 90%), rgb(1 0 45 / 95%)),url(${image_slide})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                            >
                                <nav className={'flex mt-10 mb-10 items-center justify-center text-slate-300'}>
                                    <div className={'flex items-center'}>
                                        <h1 className={'text-2xl mr-12 hover:text-red-200'}>
                                            My<br/><span
                                            className={'text-5xl text-fuchsia-100 hover:text-rose-900'}>Profile</span>
                                        </h1>
                                    </div>
                                    <div className={"w-24 "}>
                                        <img className={"rounded-3xl w-full"}
                                             src={posterImage(user.avatar.tmdb.avatar_path)}
                                             alt={"avatar"}/>
                                    </div>
                                    <div className={'hidden md:block ml-auto text-sm lg:text-base uppercase'}>
                                        <ul className={'flex gap-4'}>
                                            <li>
                                                <NavLink to={"/profile"}
                                                         className={'text-black bg-amber-200 hover:bg-amber-400 px-8 py-3 rounded-2xl'}>
                                                    {
                                                        user.name ? (
                                                            user.name
                                                        ) : (
                                                            user.username
                                                        )
                                                    }
                                                </NavLink>
                                            </li>
                                            <li>
                                                <button onClick={logout}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                         fill="currentColor"
                                                         className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd"
                                                              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                                                        <path fillRule="evenodd"
                                                              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                                                    </svg>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                </nav>
                            </header>
                        </div>
                        <Dashboard user={user}/>
                    </div>
                ) : (
                    <NavLink to={"/login"}/>
                )
            }
        </>

    )
}

export default Profile;