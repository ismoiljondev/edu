import style from "@/components/Layout/Header/heade.module.scss";

import { useContext } from "react";
import { BarsOutlined } from "@ant-design/icons";

// ---------------------------------------------------

import { MyContext } from "@/utils/context/myContext";
import Menu from "@/components/Layout/Header/components/Menu";
import { HeaderRouteData } from "./headerData";

// ---------------------------------------------------

type HeaderProps = {
  isScroll: boolean;
};

// ---------------------------------------------------

function Header(props: HeaderProps) {
  const { isScroll } = props;

  // ---------------------------------------------------

  // ---------------------------------------------------

  const { dropMenu, setDropMenu } = useContext(MyContext);

  // ---------------------------------------------------

  const SidebarFunction = () => {
    setDropMenu(dropMenu ? false : true);
  };

  // ---------------------------------------------------

  return (
    <div className={isScroll ? style.header_2 : style.header}>
      <div>
        <img src="/media/logo.png.webp" alt="logo" />
      </div>
      <button onClick={() => SidebarFunction()} className={style.buttonMenu}>
        <BarsOutlined />
      </button>
      <Menu data={HeaderRouteData.dataUrl} />
    </div>
  );
}

export default Header;
