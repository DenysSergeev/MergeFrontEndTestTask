import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

import "swiper/css";
import "swiper/css/pagination";
import "./Slider.scss";

const Slider = ({slides, spaceBetween, slidesPerView, onSlideChange }) => {
    const renderSlides = () => {
        return slides.map((slide) => {
            return (
                <SwiperSlide className="slide" key={slide.key}>
                    {slide.renderCustomSlide()}
                </SwiperSlide> 
            );    
        });
    };

    return (
        <div className="sliderWrapper">
        <Swiper
        className="slider"
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        onSlideChange={onSlideChange}
        modules={[Pagination]}
        pagination={{clickable: true}}
        setWrapperSize={false}>
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