import React from "react";
import style from "./style/style.module.scss";
import { TfiLocationPin, TfiTime } from "react-icons/tfi";
// const BlurCard = styled(Card)`
//   background: rgba(255, 255, 255, 0.25);
//   -webkit-backdrop-filter: blur(1px);
//   backdrop-filter: blur(1px);
//   border: 1px solid rgba(255, 255, 255, 0.125);

// `;

interface EventProps {
  img?: string;
  date?: number;
  month?: string;
  timestart?: string;
  timeend?: string;
  location?: string;
  text?: string;
}
const EventsCard: React.FC<EventProps> = ({
  img,
  date,
  month,
  timeend,
  timestart,
  location,
  text,
}: EventProps) => {
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img alt="example" src={img} width={"100%"} height={"100%"} />
      </div>
      <div className={style.blur}>
        <div className={style.blur__top}>
          <div className={style.blur__top__left}>
            <h2>{date}</h2>
            <p>{month}</p>
          </div>
          <div>
            <p>
              <TfiTime /> {timestart} AM - {timeend} AM
            </p>
            <p>
              <TfiLocationPin /> {location}
            </p>
          </div>
        </div>
        <div className={style.blur__p}>
          <p>{text}</p>
        </div>
        <div className={style.btn}>
          <button>VIEW DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
