import style from "@/components/Layout/Header/components/menu/menu.module.scss";
import LinkMenu from "@/components/Layout/Header/components/LinkMenu";

type Header_route_Data_type = {
  id: number;
  name: string;
  url: string;
}[];
type menuPtopsType = {
  data: Header_route_Data_type;
};

function Menu(props: menuPtopsType) {
  const { data } = props;
  console.log(data);

  return (
    <div className={style.menu}>
      {data.map((e) => {
        return <LinkMenu id={e.id} name={e.name} url={e.url} />;
      })}
    </div>
  );
}

export default Menu;
