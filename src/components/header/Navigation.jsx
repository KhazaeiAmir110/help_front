import React from 'react';

function Navigation(props) {
    const [isOpenMenu, setIsOpenMenu] = React.useState(false);

    return (
        <>
            <nav className={'flex mt-10 items-center justify-center text-slate-300'}>
                <div className={'flex items-center'}>
                    <h1 className={'text-2xl mr-12 hover:text-red-200'}>
                        Hyper<br/><span className={'text-5xl text-rose-600 hover:text-rose-900'}>Movies</span>
                    </h1>
                    <ul className={'hidden md:flex text-sm lg:text-base gap-4 text uppercase'}>
                        <li><a href={'#'}>Movies</a></li>
                        <li><a href={'#'}>TV shows</a></li>
                        <li><a href={'#'}>People</a></li>
                        <li><a href={'#'}>More</a></li>
                    </ul>
                </div>
                <div className={'hidden md:block ml-auto text-sm lg:text-base uppercase'}>
                    <ul className={'flex gap-4'}>
                        <li><a className={''} href={'#'}>Login</a></li>
                        <li><a className={'bg-rose-800 hover:bg-rose-700 px-6 py-3 rounded-2xl'} href={'#'}>Sign up</a>
                        </li>
                    </ul>
                </div>
                <div className={"md:hidden ml-auto"}>
                    <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor"
                             className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
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
                    <li><a href={'#'}>Movies</a></li>
                    <li><a href={'#'}>TV shows</a></li>
                    <li><a href={'#'}>People</a></li>
                    <li><a href={'#'}>More</a></li>
                </ul>
                <div className={'mt-8 flex gap-4 justify-center items-center'}>
                    <a className={'text-xl'} href={'#'}>Login</a>
                    <a className={'bg-rose-800 hover:bg-rose-700 px-6 py-3 rounded-2xl'} href={'#'}>Sign up</a>
                </div>
            </div>
        </>
    );
}

export default Navigation;