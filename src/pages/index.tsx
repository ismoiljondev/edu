import Head from "next/head";
import Feature from "./feature";
import Course from "./course";
import style from "../styles/style.module.scss";
import Trainer from "./trainer";
import Events from "./events";
import Client from "./clients";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.elements}>
        <div className={style.feature}>
          <div className={style.container}>
            <div className={style.container__title}>
              <h1>Awesome Feature</h1>
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
              <h1>Awesome Feature</h1>
              <p>
                Replenish man have thing gathering lights yielding shall you
              </p>
            </div>
            <Course />
          </div>
        </div>
        <div className={style.form}>
          <div className={style.container}>
            <div className={style.container__title}>
              <h1>Awesome Feature</h1>
              <p>
                Replenish man have thing gathering lights yielding shall you
              </p>
            </div>
            <form action="#">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </form>
          </div>
        </div>
        <div>
          <div className={style.container}>
            <div className={style.container__title}>
              <h1>Awesome Feature</h1>
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
              <h1>Awesome Feature</h1>
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
              <h1>Awesome Feature</h1>
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
