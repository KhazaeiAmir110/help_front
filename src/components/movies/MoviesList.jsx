import React from 'react';
import MovieCard from "./MovieCard.jsx";

function MoviesList() {
    return (
        <div className={"container"}>
            <div className="columns-3 md:columns-6 mt-12">
                <MovieCard
                    img="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/mv-item1.jpg"
                    title = "Interstellar"
                    star = "7.4"
                />
                <MovieCard
                    img = "http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/mv-item2.jpg"
                    title = "The revenant"
                    star = "7.4"
                />
                <MovieCard
                    img = "http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/mv-item3.jpg"
                    title = "Die hard"
                    star = "4.9"
                />
                <MovieCard
                    img = "http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/mv-item4.jpg"
                    title = "The walk"
                    star = "9.1"
                />
                 <MovieCard
                    img = "http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/mv-item5.jpg"
                    title = "Intore wild"
                    star = "8.3"
                />
                 <MovieCard
                    img = "http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/mv-item7.jpg"
                    title = "Gravity"
                    star = "6.6"
                />
            </div>
        </div>
    );
}

export default MoviesList;