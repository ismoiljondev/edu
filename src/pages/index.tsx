import { Client, Course, Events, Feature, Trainer } from "@/sections";
import Head from "next/head";
import style from "../styles/style.module.scss";
import Showcase from "@/components/Showcase";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.elements}>
        <div className={style.feature}>
          <div className={style.container}>
            <div className={style.container__title}>
              <h2>Awesome Feature</h2>
              <p>
                Replenish man have thing gathering lights yielding shall you
              </p>
            </div>
            <Feature />
          </div>
        </div>
        <div>
          <div className={style.container}>
            <div className={style.container__title}>
              <h2>Awesome Feature</h2>
              <p>
                Replenish man have thing gathering lights yielding shall you
              </p>
            </div>
            <Course />
          </div>
        </div>
        <div className={style.form}>
          <div className={style.container}>
            <div className={style.form__box}>
              <div className={style.form__left}>
                <div className={style.form__left__text}>
                  <h2>Register Now</h2>
                  <p>
                    There is a moment in the life of any aspiring astronomer
                    that it is time to buy that first telescope. It’s exciting
                    to think about setting up your own viewing station.
                  </p>
                </div>
                <div className={style.form__left__cards}>
                  <div className={style.form__left__cards__card}>
                    <h2>150</h2>
                    <p>Days</p>
                  </div>
                  <div className={style.form__left__cards__card}>
                    <h2>23</h2>
                    <p>Hours</p>
                  </div>
                  <div className={style.form__left__cards__card}>
                    <h2>47</h2>
                    <p>Mins</p>
                  </div>
                  <div className={style.form__left__cards__card || style.last}>
                    <h2>59</h2>
                    <p>Seconds</p>
                  </div>
                </div>
              </div>
              <div className={style.form__right}>
                <form action="#">
                  <h3>Courses for Free</h3>
                  <p>It is high time for learning</p>
                  <div className={style.form__card}>
                    <div>
                      <input type="text" placeholder="Your Name" />
                      <input type="tel" placeholder="Your Phone Number" />
                      <input type="email" placeholder="Your Email Address" />
                    </div>
                    <div className={style.form__btn}>
                      <button type="submit">SUBMIT</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={style.container}>
            <div className={style.container__title}>
              <h2>Awesome Feature</h2>
              <p>
                Replenish man have thing gathering lights yielding shall you
              </p>
            </div>
            <Trainer />
          </div>
        </div>
        <div className={style.events}>
          <div className={style.container}>
            <div className={style.container__title}>
              <h2>Awesome Feature</h2>
              <p>
                Replenish man have thing gathering lights yielding shall you
              </p>
            </div>
            <Events />
          </div>
        </div>
        <div className={style.clients}>
          <div className={style.container}>
            <div className={style.container__title}>
              <h2>Awesome Feature</h2>
              <p>
                Replenish man have thing gathering lights yielding shall you
              </p>
            </div>
            <Client />
          </div>
        </div>
      </div>
    </>
  );
}
