import style from "@/components/Layout/Header/components/menu/menu.module.scss";
import LinkMenu from "@/components/Layout/Header/components/LinkMenu";

type Header_route_Data_type = {
  id: number;
  name: string;
  url: string;
}[];
type menuPtopsType = {
  data: Header_route_Data_type;
  menuType: boolean;
};

function Menu(props: menuPtopsType) {
  const { data, menuType } = props;

  return (
    <div className={style.menu}>
      {data.map((e, i) => {
        return (
          <LinkMenu
            linkType={menuType}
            id={e.id}
            name={e.name}
            url={e.url}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default Menu;
