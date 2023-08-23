import FeatureCard from "@/components/Feature/FeatureCard";
import Trainers from "@/components/Trainers";
import { Col } from "antd";
import React from "react";
import { featureElement } from "@/utils/data/feature";

const Feature: React.FC = () => {
  return (
    <Trainers>
      {featureElement?.map((e) => (
        <Col
          xs={24}
          md={12}
          lg={8}
          style={{ justifyContent: "stretch", alignItems: "stretch" }}
          key={e?.id}
        >
          <FeatureCard {...e} />
        </Col>
      ))}
    </Trainers>
  );
};

export default Feature;
