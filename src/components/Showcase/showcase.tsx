import ShowcaseData from "@/components/Showcase/showData";
import showcaseDataType from "@/components/Showcase/showDataType";
import Content1 from "@/components/Showcase/components/content1";
import Content2 from "@/components/Showcase/components/content2";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ShowcasePropsType = {
  data: showcaseDataType;
};

function Showcase(props: ShowcasePropsType) {
  const { data } = props;
  console.log(data);

  const [isSowStyle, setIsShowStyle] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname == "/") {
      setIsShowStyle(true);
    } else setIsShowStyle(false);
  }, [router.pathname]);

  return (
    <div>{isSowStyle ? <Content1 data={data.homeData} /> : <Content2 />}</div>
  );
}

export default Showcase;