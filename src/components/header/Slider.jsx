import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

function Slider(props) {
    return (
        <div className={"mt-8"}>
            <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={4} autoplay={true} loop={true}>
                {[1, 2, 3, 4, 1, 2, 3, 4].map(
                        number => (
                            <SwiperSlide key={number}>
                                <img
                                    className={""}
                                    src={`http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider${number}.jpg`}
                                    alt=""/>
                            </SwiperSlide>
                        )
                    )
                }
            </Swiper>
        </div>
    );
}

export default Slider;