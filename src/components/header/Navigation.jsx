import {useState, useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import {UserContext} from "../../context/UserContext.jsx";

const menuItems = [
    {path: '/movies', title: 'Movies'},
    {path: '/tv', title: 'TV shows'},
    {path: '/people', title: 'People'},
    {path: '/more', title: 'More'},
]

function Navigation() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const {user} = useContext(UserContext);

    function activeClass({isActive}) {
        return isActive ? "text-[#dcf836]" : "hover:text-white";
    }

    return (
        <>
            <nav className={'flex mt-10 mb-10 items-center justify-center text-slate-300'}>
                <div className={'flex items-center'}>
                    <Link to={"/"}>
                        <h1 className={'text-2xl mr-12 hover:text-red-200'}>
                            Hyper<br/><span className={'text-5xl text-rose-600 hover:text-rose-900'}>Movies</span>
                        </h1>
                    </Link>
                    <ul className={'hidden md:flex text-sm lg:text-base gap-4 text uppercase'}>
                        {
                            menuItems.map((menuItem) => (
                                <li key={menuItem.path}>
                                    <NavLink to={menuItem.path}
                                             className={activeClass}>{menuItem.title}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={'hidden md:block ml-auto text-sm lg:text-base uppercase'}>
                    {
                        user ? (
                            <NavLink to={"/"} className={'text-black bg-amber-200 hover:bg-amber-400 px-8 py-3 rounded-2xl'}>
                                {user.name}
                            </NavLink>
                        ) : (
                            <ul className={'flex gap-4'}>
                                <li>
                                    <NavLink to="/login" className={"hover:text-white"}>
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register"
                                             className={'bg-rose-800 hover:bg-rose-700 px-6 py-3 rounded-2xl'}>
                                        Register
                                    </NavLink>
                                </li>
                            </ul>
                        )
                    }
                </div>
                <div className={"md:hidden ml-auto"}>
                    <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor"
                             className="bi bi-list" viewBox="0 0 16 16">
                            <path
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                </div>
            </nav>
            <div
                className={
                    `bg-slate-900 text-center  overflow-hidden transition-all duration-500
                 ${isOpenMenu ? 'w-full py-4 h-64 border-t-2 border-slate-700' : 'py-0 h-0 border-none'}`
                }
            >
                <ul className={'flex flex-col gap-4'}>
                    {
                        menuItems.map((menuItem) => (
                            <li key={menuItem.path}>
                                <NavLink
                                    to={menuItem.path}
                                    className={activeClass}
                                    onClick={() => {setIsOpenMenu(false)}}
                                >
                                    {menuItem.title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <div className={'mt-8 flex gap-4 justify-center items-center'}>
                    {
                        user ? (
                            <NavLink to={"/"} className={'bg-rose-800 hover:bg-rose-700 px-6 py-3 rounded-2xl'}>
                                {user.name}
                            </NavLink>
                        ) : (
                            <>
                                <NavLink to="/login" className={'text-xl'}>
                                    Login
                                </NavLink>
                                <NavLink to="/register"
                                         className={'bg-rose-800 hover:bg-rose-700 px-6 py-3 rounded-2xl'}>
                                    Register
                                </NavLink>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Navigation;