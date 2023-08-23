import CourseCards from "@/components/CourseCards/CourseCards";
import Swipper from "@/components/Swiper/Swipper";
import React from "react";
import { SwiperSlide } from "swiper/react";
import { cardElement } from "@/utils/data/course";

const Course: React.FC = () => {
  return (
    <Swipper three={3}>
      {cardElement?.map((e) => (
        <SwiperSlide>
          <CourseCards {...e} key={e?.id} />
        </SwiperSlide>
      ))}
    </Swipper>
  );
};

export default Course;
