import CourseCards from "@/components/CourseCards/CourseCards";
import Swipper from "@/components/Swiper/Swipper";
import React from "react";
import { SwiperSlide } from "swiper/react";

const cardElement = [
  {
    id: 1,
    img: "/media/second.webp",
    price: 25,
    title: "Custom Product Design",
    desc: "One make creepeth man bearing their one firmament won't fowlmeat over sea",
    userImage: "/media/user2.webp",
    userName: "Cameron",
    buttonText: "DESIGN",
  },
  {
    id: 2,
    img: "/media/first.webp",
    price: 25,
    title: "Compyuter Engineering",
    desc: "One make creepeth man bearing their one firmament won't fowlmeat over sea",
    userImage: "/media/user.webp",
    userName: "Cameron",
    buttonText: "DESIGN",
  },

  {
    id: 3,
    img: "/media/third.webp",
    price: 25,
    title: "Social Media Network",
    desc: "One make creepeth man bearing their one firmament won't fowlmeat over sea",
    userImage: "/media/user3.webp",
    userName: "Cameron",
    buttonText: "DESIGN",
  },
  {
    id: 5,
    img: "/media/first.webp",
    price: 25,
    title: "Compyuter Engineering",
    desc: "One make creepeth man bearing their one firmament won't fowlmeat over sea",
    userImage: "/media/user.webp",
    userName: "Cameron",
    buttonText: "DESIGN",
  },
  {
    id: 4,
    img: "/media/second.webp",
    price: 25,
    title: "Social Media Network",
    desc: "One make creepeth man bearing their one firmament won't fowlmeat over sea",
    userImage: "/media/user2.webp",
    userName: "Cameron",
    buttonText: "DESIGN",
  },
  {
    id: 3,
    img: "/media/third.webp",
    price: 25,
    title: "Social Media Network",
    desc: "One make creepeth man bearing their one firmament won't fowlmeat over sea",
    userImage: "/media/user3.webp",
    userName: "Cameron",
    buttonText: "DESIGN",
  },
];
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
