import React from 'react';

function Navigation(props) {
    return (
        <nav className={'flex mt-10 items-center justify-center text-slate-300'}>
            <div className={'flex items-center'}>
                <h1 className={'text-2xl mr-12 hover:text-red-200'}>
                    Hyper<br /><span className={'text-5xl text-rose-600 hover:text-rose-900'}>Movies</span>
                </h1>
                <ul className={'flex gap-4 text uppercase'}>
                    <li><a href={'#'}>Movies</a></li>
                    <li><a href={'#'}>TV shows</a></li>
                    <li><a href={'#'}>People</a></li>
                    <li><a href={'#'}>More</a></li>
                </ul>
            </div>
            <div className={'ml-auto text uppercase'}>
                <ul className={'flex gap-4'}>
                    <li><a className={''} href={'#'}>Login</a></li>
                    <li><a className={'bg-rose-800 hover:bg-rose-700 px-6 py-3 rounded-2xl'} href={'#'}>Sign up</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;