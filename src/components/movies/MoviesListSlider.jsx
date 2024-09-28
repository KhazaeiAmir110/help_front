import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

import MovieCard from "./MovieCard.jsx";


function MovieListSlider(props) {
    return (
        <>
            {
                props.type === "person" ? (
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={true} loop={true}
                        breakpoints={{
                            // when window width is >= 320px
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 8
                            },
                            // when window width is >= 480px
                            768: {
                                slidesPerView: 6,
                                spaceBetween: 15
                            },
                            // when window width is >= 640px
                            1024: {
                                slidesPerView: 9,
                                spaceBetween: 20
                            }
                        }}>
                        {props.moveis.map(
                            movie => (
                                <SwiperSlide key={movie.id}>
                                    <MovieCard movie={movie} type={props.type}/>
                                </SwiperSlide>

                            )
                        )
                        }

                    </Swiper>
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
                        {props.moveis.map(
                            movie => (
                                <SwiperSlide key={movie.id}>
                                    <MovieCard movie={movie} type={props.type}/>
                                </SwiperSlide>

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