import ClientCard from "@/components/Clients/ClientCard";
import Swipper from "@/components/Swiper/Swipper";
import React from "react";
import { SwiperSlide } from "swiper/react";
import style from "./css/index.module.scss";
import { clientElement } from "@/utils/data/clients";
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
