import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

import MovieCard from "./MovieCard.jsx";
import {useEffect, useState} from "react";
import login from "../authentication/login/Login.jsx";
import PersonListSlider from "../slider&card/PersonListSlider.jsx";


function MovieListSlider(props) {

    const [movies, setMovies] = useState({movie: [], onTv: [], person: []});


    useEffect(() => {
        (async () => {
            const {data} = await fetchData.get(`${props.type}/${props.activeTab}`);
            setMovies(prevMovies => ({
                ...prevMovies,
                [props.type]: data.results
            }));
        })()
    }, [props.type, props.activeTab])

    return (
        <>
            {
                props.type === "person" ? (
                    <PersonListSlider persons={movies.person}/>
                ) : (
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={true} loop={true}
                        breakpoints={{
                            // when window width is >= 320px
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },
                            // when window width is >= 480px
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                            // when window width is >= 640px
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 30
                            }
                        }}>
                        {
                            movies.movie ? (
                                movies.movie.map(
                                    movie => (
                                        <SwiperSlide key={movie.id}>
                                            <MovieCard movie={movie} type={props.type}/>
                                        </SwiperSlide>

                                    )
                                )

                            ) : (
                                movies.onTv.map(
                                    movie => (
                                        <SwiperSlide key={movie.id}>
                                            <MovieCard movie={movie} type={props.type}/>
                                        </SwiperSlide>

                                    )
                                )
                            )
                        }

                    </Swiper>
                )
            }
        </>
    );
}

export default MovieListSlider;