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
            <div className={"mt-12 mb-12"}>
                <div className={"md:flex gap-16 mb-8 items-center"}>
                    <a href={"#"}><h2 className={"text-slate-100 hover:text-yellow-500 text-4xl"}>Trending</h2></a>

                    <ul className={"flex gap-4 uppercase text-xl"}>
                        <li className={"hover:text-[#dcf836]"}>Today</li>
                        <li className={"hover:text-[#dcf836]"}>This Week</li>
                        <li className={"hover:text-[#dcf836]"}>This Month</li>
                        <li className={"hover:text-[#dcf836]"}>This Year</li>
                    </ul>
                </div>
                <MovieListSlider moveis={moviesList}/>
            </div>

            <div className={"mt-12 mb-12"}>
                <div className={"md:flex gap-16 mb-8 items-center"}>
                    <a href={"#"}><h2 className={"text-slate-100 hover:text-yellow-500 text-4xl"}>On TV</h2></a>

                    <ul className={"flex gap-4 uppercase text-xl"}>
                        <li className={"hover:text-[#dcf836]"}>Popular</li>
                        <li className={"hover:text-[#dcf836]"}>Coming soon</li>
                        <li className={"hover:text-[#dcf836]"}>Top rated</li>
                    </ul>
                </div>
                <MovieListSlider moveis={moviesList}/>
            </div>
        </div>
    );
}

export default MoviesList;