import style from "@/components/Showcase/components/content1/style.module.scss";
import showcaseDataType from "@/components/Showcase/showDataType";
import Link from "next/link";
type ContentPropsType = {
  data: showcaseDataType;
};
function Content1(props: ContentPropsType) {
  const { data } = props;

  return (
    <div
      className={style.context}
      style={{ backgroundImage: `url(${data.homeData.background_img})` }}
    >
      <h2>{data.homeData.title_bir}</h2>
      <h1>{data.homeData.title_big}</h1>
      <div className={style.box_button}>
        {data.homeData.button.map((e) => {
          const type = style[e.style];
          return (
            <button className={type}>
              <Link href={e.url}>{e.text}</Link>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Content1;
