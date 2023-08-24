import style from "@/components/Showcase/components/content2/style.module.scss";
import showcaseDataType from "@/components/Showcase/showDataType";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
type content2 = {
  data: showcaseDataType;
};

function Content2(props: content2) {
  const { data } = props;

  const router = useRouter();
  // const [pages, setPages] = useState<string | undefined>(router.pathname)
  const [pagesName, setPagesName] = useState<string | undefined>(undefined);
  const [pagesUrl, setPagesUrl] = useState<string>("/");

  useEffect(() => {
    if (router.pathname == "/about") {
      setPagesName(data.homeDataTwo.aboutUs.name);
      setPagesUrl(data.homeDataTwo.aboutUs.url);
    } else if (router.pathname == "/contact") {
      setPagesName(data.homeDataTwo.contactUs.name);
      setPagesUrl(data.homeDataTwo.contactUs.url);
    } else if (router.pathname == "/test") {
      setPagesName(data.homeDataTwo.testUs.name);
      setPagesUrl(data.homeDataTwo.testUs.url);
    }
  }, [router.pathname]);
  return (
    <div
      className={style.context}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 35, 71, 0.8), rgba(0, 35, 71, 0.8)), url(${data.homeDataTwo.background_img})`,
      }}
    >
      <h1>{pagesName}</h1>
      <h3>
        <Link href={"/"}>Home </Link> / <Link href={pagesUrl}>{pagesName}</Link>
      </h3>
    </div>
  );
}

export default Content2;
