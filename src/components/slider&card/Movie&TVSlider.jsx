import {Swiper, SwiperSlide} from "swiper/react";
import Card from "./Card.jsx";
import {Autoplay} from "swiper/modules";

// eslint-disable-next-line react/prop-types
export default function MovieTVSlider({movies, tv}) {
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
            {
                movies.length > 1 ? (
                    movies.map(
                        movie => (
                            <SwiperSlide key={movie.id}>
                                <Card movie={movie} type="movie"/>
                            </SwiperSlide>
                        )
                    )
                ) : (
                    tv.map(
                        serial => (
                            <SwiperSlide key={serial.id}>
                                <Card movie={serial} type="tv"/>
                            </SwiperSlide>
                        )
                    )
                )
            }
        </Swiper>

    )
}