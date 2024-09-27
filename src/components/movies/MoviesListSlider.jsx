import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import MovieCard from "./MovieCard.jsx";
import {posterImage} from "../../config.js";

function MovieListSlider(props) {
    return (
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
                                <MovieCard img={posterImage(movie.poster_path)} title={movie.title} star={movie.vote_average}/>
                            </SwiperSlide>

                        )
                    )
                }

            </Swiper>
    );
}

export default MovieListSlider;