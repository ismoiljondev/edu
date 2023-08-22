import React from "react";
import { Button, Card } from "antd";
import style from "./style/card.module.scss";
import { TfiUser } from "react-icons/tfi";
import { AiOutlineHeart } from "react-icons/ai";
interface cardProps {
  img?: string;
  price?: number;
  title?: string;
  desc?: string;
  buttonText?: string;
  userImage?: string;
  userName?: string;
}

const CourseCards: React.FC<cardProps> = ({
  img,
  price,
  title,
  desc,
  buttonText,
  userImage,
  userName,
}) => (
  <div className={style.card}>
    <div className={style.card__img}>
      <img src={img} alt="this is image" />
    </div>
    <div className={style.card__text}>
      <div className={style.card__text__price}>
        <p>${price}</p>
      </div>
      <div>
        <Button
          type="primary"
          style={{
            borderRadius: "0",
            backgroundColor: "#002347",
            margin: "8px 0",
          }}
        >
          {buttonText}
        </Button>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className={style.card__text__user}>
        <div className={style.card__text__user__main}>
          <div className={style.card__text__user__main__img}>
            <img src={userImage} />
          </div>
          <h4>{userName}</h4>
        </div>
        <div className={style.card__text__user__likes}>
          <span>
            <TfiUser /> 25
          </span>
          <span>
            <AiOutlineHeart /> 35
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default CourseCards;
