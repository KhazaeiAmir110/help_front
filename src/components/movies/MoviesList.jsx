import React from 'react';
import MovieListSlider from "./MoviesListSlider.jsx";

const moviesList = [
    {
        url:
            "http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/mv-item1.jpg",
        title:
            "Interstellar",
        star:
            "7.4"
    },
    {
        url:
            "http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/mv-item2.jpg",
        title:
            "The reverent",
        star:
            "4.3"
    },
    {
        url:
            "http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/mv-item3.jpg",
        title:
            "Die hard",
        star:
            "9.1"
    },
    {
        url:
            "http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/mv-item4.jpg",
        title:
            "The walk",
        star:
            "6.4"
    },
    {
        url:
            "http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/mv-item5.jpg",
        title:
            "Intone wild",
        star:
            "8.3"
    },
    {
        url:
            "http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/mv-item7.jpg",
        title:
            "Gravity",
        star:
            "10"
    },
    {
        url:
            "http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/mv-item8.jpg",
        title:
            "Southpaw",
        star:
            "5.5"
    }
]


function MoviesList() {
    return (
        <div className={"container"}>
            <div className={"mt-12"}>
                <MovieListSlider moveis={moviesList}/>
            </div>
        </div>
    );
}

export default MoviesList;