import React from 'react';
import Navigation from "./Navigation.jsx";
import SearchBox from "./SearchBox.jsx";
import FollowUs from "./FollowUs.jsx";
import Slider from "./Slider.jsx";

import image_slide from "/images/header/cinema.jpg"

const Header = () => (
    <div className={"w-full"}>
        <header className={"container bg-cover py-0.5 md:pt-1 md:pb-12 items-center justify-center"}
                style={{backgroundImage: `linear-gradient(to bottom, #00000085, #000000db),url(${image_slide})`}}>
            <Navigation />
            <SearchBox />
            <FollowUs />
            <Slider />
        </header>
    </div>
);

export default Header;