import { Col, Row } from "antd";
import React, { ReactNode } from "react";
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };
interface TrainerProps {
  children: ReactNode;
}
const Trainers: React.FC<TrainerProps> = ({ children }) => {
  return <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{children}</Row>;
};

export default Trainers;
