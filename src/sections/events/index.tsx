import EventsCard from "@/components/EventCard/EventsCard";
import { Col, Row } from "antd";
import React from "react";
import { eventElement } from "@/utils/data/events";

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
