import React from 'react';
import Navigation from "./Navigation.jsx";
import SearchBox from "./SearchBox.jsx";
import FollowUs from "./FollowUs.jsx";

const Header = (props) => (
    <>
        <header>
            <Navigation />
            <SearchBox />
        </header>
    </>
);

export default Header;