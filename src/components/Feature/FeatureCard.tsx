import React from "react";
import style from "./style/style.module.scss";

interface cardProps {
  title?: string;
  desc?: string;
  img?: string;
}

const FeatureCard: React.FC<cardProps> = ({ title, desc, img }) => (
  <div className={style.card}>
    <div>
      <img alt="example" src={img} width={50} height={50} />
    </div>
    <div className={style.text}>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);

export default FeatureCard;
