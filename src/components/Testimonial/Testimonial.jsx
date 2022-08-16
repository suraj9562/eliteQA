import Styles from "./testimonial.module.css";

import left from "./../../assets/icons/left.svg";
import right from "./../../assets/icons/right.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SliderCard from "../../subComponents/sliderCard/SliderCard";

function Testimonial() {
  return (
    <div className={Styles.container}>
      <div className={Styles.highlightText}>Testimonial</div>
      <div className={Styles.titleContainer}>
        <div className={Styles.title}>Honest reviews from our customers </div>
        <div className={Styles.controllers}>
          <img
            src={left}
            alt=""
            className="swiper-button-prev"
            id="swiper-back"
          />

          <img
            src={right}
            alt=""
            className="swiper-button-next"
            id="swiper-forward"
          />
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        modules={[Navigation]}
        navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
      >
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonial;
