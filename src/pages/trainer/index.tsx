import TrainerCard from "@/components/TrainerCard/TrainerCard";
import Trainers from "@/components/Trainers";
import { Col } from "antd";
import React from "react";

const Trainer: React.FC = () => {
  return (
    <Trainers>
      <Col xs={24} sm={12} md={8} lg={6}>
        <TrainerCard
          title="Mated Nithan"
          desc="Sr. web designer"
          img="/media/first.webp"
        />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <TrainerCard
          title="Mated Nithan"
          desc="Sr. web designer"
          img="/media/first.webp"
        />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <TrainerCard
          title="Mated Nithan"
          desc="Sr. web designer"
          img="/media/first.webp"
        />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <TrainerCard
          title="Mated Nithan"
          desc="Sr. web designer"
          img="/media/first.webp"
        />
      </Col>
    </Trainers>
  );
};

export default Trainer;
