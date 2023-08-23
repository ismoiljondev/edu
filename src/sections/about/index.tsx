import React from "react";
import style from "./style/style.module.scss";
const AboutCard: React.FC = () => {
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img src="/media/about.webp" alt="about" />
      </div>
      <div className={style.card__text}>
        <h2>Welcome to our Institute</h2>
        <p>
          Subdue whales void god which living don't midst lesser yielding over
          lights whose. Cattle greater brought sixth fly den dry good tree isn't
          seed stars were.
        </p>
        <p>
          Subdue whales void god which living don't midst lesser yieldi over
          lights whose. Cattle greater brought sixth fly den dry good tree isn't
          seed stars were the boring.
        </p>
        <div>
          <button>LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
