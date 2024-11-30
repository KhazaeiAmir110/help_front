import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {useEffect, useState} from "react";
import axios from "axios";

import {CONFIG, posterImage} from "../../config.js"

function Slider() {
    const [movies, setMovies] = useState([]);

    async function loadMovies() {
        const {data} = await axios.get(`${CONFIG.baseURL}/movie/upcoming?api_key=${CONFIG.apiKey}`);

        setMovies(data.results);
    }

    useEffect(() => {
        loadMovies();
    }, [])

    return (
        <div className={"mt-8"}>
            <Swiper
                modules={[Autoplay]}
                autoplay={true} loop={true}
                breakpoints={{
                    // when window width is >= 320px
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    // when window width is >= 480px
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    // when window width is >= 640px
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 40
                    }
                }}>
                {movies.map(
                        movie => (
                            <SwiperSlide key={movie.id}>
                                <img
                                    src={posterImage(movie.poster_path)}
                                    alt={movie.title}/>
                            </SwiperSlide>
                        )
                    )
                }
            </Swiper>
        </div>
    );
}

export default Slider;