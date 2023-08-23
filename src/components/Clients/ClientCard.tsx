import React from "react";
import { Card } from "antd";
import style from "./style/style.module.scss";
const { Meta } = Card;

interface clientProps {
  img?: string;
  title?: string;
  desc?: string;
  styleCard?: React.CSSProperties;
}

const ClientCard: React.FC<clientProps> = ({ img, desc, title, styleCard }) => (
  <Card hoverable>
    <div className={style.card} style={styleCard}>
      <div>
        <img alt="example" src={img} />
      </div>
      <Meta title={title} description={desc} />
    </div>
  </Card>
);

export default ClientCard;
