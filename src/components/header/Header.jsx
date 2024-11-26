import {useLocation} from "react-router-dom";

import Navigation from "./Navigation.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import FollowUs from "./FollowUs.jsx";
import Slider from "./Slider.jsx";

import image_slide from "/images/header/cinema.jpg"


function Header() {
    const location = useLocation();
    return (
        <div className={"w-full"}>
            <header
                className={`
                    container bg-cover py-0.5 md:pt-1 md:pb-12 items-center justify-center 
                    ${location.pathname !== '/' ? 'h-[35rem]' : ''}
                `}
                    style={{backgroundImage: `linear-gradient(to bottom, #00000085, #000000db),url(${image_slide})`}}>
                <Navigation/>
                {
                    location.pathname === "/" && (
                        <>
                            <SearchBox/>
                            <FollowUs/>
                            <Slider/>
                        </>
                    )
                }
            </header>
        </div>
    )
}

export default Header;