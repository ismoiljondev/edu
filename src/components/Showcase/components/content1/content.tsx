import style from "@/components/Showcase/components/content1/style.module.scss";
type ContentPropsType = {
  data: any;
};
function Content1(props: ContentPropsType) {
  const { data } = props;
  console.log(data.background_img, "img");

  return (
    <div
      className={style.context}
      style={{ backgroundImage: `url(${data.background_img})` }}
    >
      <h1>Showcase1</h1>
    </div>
  );
}

export default Content1;
