import style from "@/components/Showcase/sass/style.module.scss";
type ContentPropsType = {
  data: any;
};
function Content1(props: ContentPropsType) {
  const { data } = props;
  console.log(data);

  return (
    <div>
      <h1>Showcase1</h1>
    </div>
  );
}

export default Content1;
