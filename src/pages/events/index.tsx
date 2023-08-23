import EventsCard from "@/components/EventCard/EventsCard";
import { Col, Row } from "antd";
import React from "react";

const eventElement = [
  {
    id: 1,
    img: "/media/events1.webp",
    date: 15,
    month: "Jun",
    timestart: "12:00",
    timeend: "13:00",
    location: "Hilton Quebec",
    text: "One make creepeth man for so bearing their firmament won't fowl meat over seas great",
  },
  {
    id: 2,
    img: "/media/events2.webp",
    date: 20,
    month: "July",
    timestart: "12:00",
    timeend: "13:00",
    location: "Hilton Quebec",
    text: "One make creepeth man for so bearing their firmament won't fowl meat over seas great",
  },
];

const Events: React.FC = () => {
  return (
    <Row gutter={[16, 16]} style={{ justifyContent: "center" }}>
      {eventElement?.map((e) => (
        <Col xs={24} sm={24} md={12} xl={12}>
          <EventsCard {...e} key={e?.id} />
        </Col>
      ))}
    </Row>
  );
};

export default Events;
