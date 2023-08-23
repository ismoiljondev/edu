import ClientCard from "@/components/Clients/ClientCard";
import Swipper from "@/components/Swiper/Swipper";
import React from "react";
import { SwiperSlide } from "swiper/react";
import style from "./css/index.module.scss";
const clientElement = [
  {
    id: 1,
    img: "/media/clientq.webp",
    title: "Davil Saden",
    desc: "Him, made can't called over won't there on divide theremale fish beast own his day third seed sixth seas unto.Saw from",
  },
  {
    id: 2,
    img: "/media/client2.webp",
    title: "Elite Martin",
    desc: "Him, made can't called over won't there on divide theremale fish beast own his day third seed sixth seas unto.Saw from",
  },
  {
    id: 1,
    img: "/media/clientq.webp",
    title: "Davil Saden",
    desc: "Him, made can't called over won't there on divide theremale fish beast own his day third seed sixth seas unto.Saw from",
  },
  {
    id: 2,
    img: "/media/client2.webp",
    title: "Elite Martin",
    desc: "Him, made can't called over won't there on divide theremale fish beast own his day third seed sixth seas unto.Saw from",
  },
  {
    id: 1,
    img: "/media/clientq.webp",
    title: "Davil Saden",
    desc: "Him, made can't called over won't there on divide theremale fish beast own his day third seed sixth seas unto.Saw from",
  },
  {
    id: 2,
    img: "/media/client2.webp",
    title: "Elite Martin",
    desc: "Him, made can't called over won't there on divide theremale fish beast own his day third seed sixth seas unto.Saw from",
  },
  {
    id: 1,
    img: "/media/clientq.webp",
    title: "Davil Saden",
    desc: "Him, made can't called over won't there on divide theremale fish beast own his day third seed sixth seas unto.Saw from",
  },
  {
    id: 2,
    img: "/media/client2.webp",
    title: "Elite Martin",
    desc: "Him, made can't called over won't there on divide theremale fish beast own his day third seed sixth seas unto.Saw from",
  },
  {
    id: 1,
    img: "/media/clientq.webp",
    title: "Davil Saden",
    desc: "Him, made can't called over won't there on divide theremale fish beast own his day third seed sixth seas unto.Saw from",
  },
  {
    id: 2,
    img: "/media/client2.webp",
    title: "Elite Martin",
    desc: "Him, made can't called over won't there on divide theremale fish beast own his day third seed sixth seas unto.Saw from",
  },
  {
    id: 1,
    img: "/media/clientq.webp",
    title: "Davil Saden",
    desc: "Him, made can't called over won't there on divide theremale fish beast own his day third seed sixth seas unto.Saw from",
  },
  {
    id: 2,
    img: "/media/client2.webp",
    title: "Elite Martin",
    desc: "Him, made can't called over won't there on divide theremale fish beast own his day third seed sixth seas unto.Saw from",
  },
  {
    id: 1,
    img: "/media/clientq.webp",
    title: "Davil Saden",
    desc: "Him, made can't called over won't there on divide theremale fish beast own his day third seed sixth seas unto.Saw from",
  },
  {
    id: 2,
    img: "/media/client2.webp",
    title: "Elite Martin",
    desc: "Him, made can't called over won't there on divide theremale fish beast own his day third seed sixth seas unto.Saw from",
  },
];

const Client: React.FC = () => {
  return (
    <Swipper three={2}>
      {clientElement?.map((e) => (
        <SwiperSlide>
          <ClientCard {...e} key={e?.id} />
        </SwiperSlide>
      ))}
    </Swipper>
  );
};

export default Client;
