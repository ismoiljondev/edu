import ClientCard from "@/components/Clients/ClientCard";
import FeatureCard from "@/components/Feature/FeatureCard";
import Trainers from "@/components/Trainers";
import { Col } from "antd";
import React from "react";

const featureElement = [
  {
    id: 1,
    title: "Scholarship Facility",
    desc: "One make creepeth, man bearing theira firmament won't great heaven",
    img: "/media/students-cap.png",
  },
  {
    id: 2,
    title: "Sell Online Course",
    desc: "One make creepeth, man bearing theira firmament won't great heaven",
    img: "/media/study.png",
  },
  {
    id: 3,
    title: "Global Certification",
    desc: "One make creepeth, man bearing theira firmament won't great heaven",
    img: "/media/student.png",
  },
];

const Feature: React.FC = () => {
  return (
    <Trainers>
      {featureElement?.map((e) => (
        <Col
          xs={24}
          md={12}
          lg={8}
          style={{ justifyContent: "stretch", alignItems: "stretch" }}
        >
          <FeatureCard {...e} key={e?.id} />
        </Col>
      ))}
    </Trainers>
  );
};

export default Feature;
