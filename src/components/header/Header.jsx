import React from 'react';
import Navigation from "./Navigation.jsx";
import SearchBox from "./SearchBox.jsx";
import FollowUs from "./FollowUs.jsx";
import Slider from "./Slider.jsx";

const Header = (props) => (
    <>
        <header className={"container"}>
            <Navigation />
            <SearchBox />
            <FollowUs />
            <Slider />
        </header>
    </>
);

export default Header;