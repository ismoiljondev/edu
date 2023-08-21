import React from "react";
import { Button, Card } from "antd";
import style from './style/card.module.scss'

interface cardProps {
  img?: string;
  price?: number;
  title?: string;
  desc?: string;
  buttonText?: string;
  userImage?: string;
  userName?:string;
}

const Cards: React.FC<cardProps> = ({ img, price,title, desc, buttonText, userImage, userName }) => (
    <div className={style.card}>
        <div className={style.card__img}>
            <img src={img} alt='this is image'/>
            <div className={style.card__img__price}><p>${price}</p></div>
        </div>
        <div className={style.card__text}>
            <Button type="primary">{buttonText}</Button>
            <h1>{title}</h1>
            <p>{desc}</p>
            <div className={style.card__text__user}>
                <div className={style.card__text__user__main}>
                    <div className={style.card__text__user__main__img}>
                        <img src={userImage} alt="user image" />
                    </div>
                    <h3>{userName}</h3>
                </div>
            </div>
        </div>
    </div>
);

export default Cards;
