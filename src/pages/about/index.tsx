import { AboutCard, Client, Feature } from "@/sections";
import Head from "next/head";
import style from "./style/style.module.scss";
import Showcase from "@/components/Showcase";
export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.sections}>
        <Showcase />
        <div className={style.container}>
          <AboutCard />
        </div>
        <div className={style.feature}>
          <div className={style.container}>
            <div className={style.container__title}>
              <h2 style={{ color: "white" }}>Awesome Feature</h2>
              <p>
                Replenish man have thing gathering lights yielding shall you
              </p>
            </div>
            <Feature />
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
