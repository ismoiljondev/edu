import React from "react";
import { Card } from "antd";
import {
  TfiFacebook,
  TfiTwitterAlt,
  TfiLinkedin,
  TfiPinterest,
} from "react-icons/tfi";
import style from "./style/style.module.scss";
const { Meta } = Card;
interface cardProps {
  img?: string;
  title?: string;
  desc?: string;
}
const TrainerCard: React.FC<cardProps> = ({ img, title, desc }: cardProps) => (
  <Card
    hoverable
    style={{
      width: "100%",
      textAlign: "center",
    }}
    cover={<img alt="example" src={img} />}
  >
    <div className={style.text}>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <p className={style.text__p}>
        If you are looking at blank cassettes on the web, you may be very
        confused at the.
      </p>
      <div className={style.text__link}>
        <p>
          <TfiFacebook />
        </p>
        <p>
          <TfiTwitterAlt />
        </p>
        <p>
          <TfiLinkedin />
        </p>
        <p>
          <TfiPinterest />
        </p>
      </div>
    </div>
  </Card>
);

export default TrainerCard;
