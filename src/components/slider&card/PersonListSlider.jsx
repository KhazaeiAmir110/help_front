import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Card from "./Card.jsx";


// eslint-disable-next-line react/prop-types
export default function PersonListSlider({persons}) {
    return (
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
            {
                persons.map(
                    movie => (
                        <SwiperSlide key={movie.id}>
                            <Card movie={movie} type="person"/>
                        </SwiperSlide>
                    )
                )
            }
        </Swiper>

    )
}