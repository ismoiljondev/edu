import style from "@/components/Showcase/style.module.scss";
import showcaseDataType from "@/components/Showcase/showDataType";
import Content1 from "@/components/Showcase/components/content1";
import Content2 from "@/components/Showcase/components/content2";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ShowcaseData from "@/components/Showcase/showData";
type ShowcasePropsType = {
  data: showcaseDataType;
};

function Showcase() {
  const [isSowStyle, setIsShowStyle] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname == "/") {
      setIsShowStyle(true);
    } else setIsShowStyle(false);
  }, [router.pathname]);

  return (
    <div className={style.showcase}>
      {isSowStyle ? (
        <Content1 data={ShowcaseData} />
      ) : (
        <Content2 data={ShowcaseData} />
      )}
    </div>
  );
}

export default Showcase;
