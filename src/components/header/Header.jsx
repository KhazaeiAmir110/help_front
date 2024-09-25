import React from 'react';
import Navigation from "./Navigation.jsx";
import SearchBox from "./SearchBox.jsx";
import FollowUs from "./FollowUs.jsx";

const Header = (props) => (
    <>
        <header className={"container"}>
            <Navigation />
            <SearchBox />
            <FollowUs />
        </header>
    </>
);

export default Header;