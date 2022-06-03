import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./Slider.module.scss";

const Slider = ({slides, spaceBetween, slidesPerView, onSlideChange, number }) => {
    const renderSlides = () => {
        return slides.map((slide) => {
            return (
                <SwiperSlide className={styles.slide} key={slide.key}>
                    {slide.renderCustomSlide()}
                </SwiperSlide>
            );
        });
    };

    

    return (
        <div className={styles.sliderWrapper}>
        <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        onSlideChange={onSlideChange}
        modules={[Pagination]}
        pagination={{clickable: true}}
        setWrapperSize={false}
        className={styles.slider}>
            {renderSlides()}
        </Swiper>
        </div>
    );
};

Slider.propTypes = {
    spaceBetween: PropTypes.number,
    slidesPerView: PropTypes.number,
    onSlideChange: PropTypes.func,
    slides: PropTypes.array,
  };
  
  Slider.defaultProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    onSlideChange: () => {},
    slides: [],
  };
  
  export default Slider;