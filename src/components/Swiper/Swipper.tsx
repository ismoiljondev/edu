import CourseCards from "@/components/CourseCards/CourseCards";
import React, { ReactNode, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
interface swiperProps {
  children: ReactNode;
  three?: number;
}

export default function Swipper({ children, three }: swiperProps) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1490: {
            slidesPerView: three,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
}
