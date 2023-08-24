import TrainerCard from "@/components/TrainerCard/TrainerCard";
import Trainers from "@/components/Trainers";
import { Col } from "antd";
import React from "react";
import { trainerElement } from "@/utils/data/trainer";
const Trainer: React.FC = () => {
  return (
    <Trainers>
      {trainerElement?.map((e) => (
        <Col xs={24} sm={12} md={8} lg={6} key={e?.id}>
          <TrainerCard {...e} />
        </Col>
      ))}
    </Trainers>
  );
};

export default Trainer;
