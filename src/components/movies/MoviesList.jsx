import React from 'react';
import MovieCard from "./MovieCard.jsx";

function MoviesList() {
    return (
        <div className={"container"}>
            <div className="py-8 columns-4 mt-12">
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
            </div>
        </div>
    );
}

export default MoviesList;