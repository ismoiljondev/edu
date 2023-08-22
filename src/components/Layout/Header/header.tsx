import style from "@/components/Layout/Header/heade.module.scss";

import { useContext, useState } from "react";
import { BarsOutlined } from "@ant-design/icons";
import { SearchOutlined, ExpandOutlined } from "@ant-design/icons";

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

  const [dropMenu, setDropMenu] = useState<boolean>(false);
  const [dropSearch, setDropSearch] = useState<boolean>(false);

  // ---------------------------------------------------

  const SidebarFunction = () => {
    setDropMenu(!dropMenu);
  };
  const dropSearchFu = () => {
    setDropSearch(!dropSearch);
  };

  // ---------------------------------------------------

  return (
    <div className={isScroll ? style.header_2 : style.header}>
      <div className={dropSearch ? style.search_box_2 : style.search_box}>
        <form action="">
          <input type="search" name="" id="" />
        </form>
        <button className={style.search_button} onClick={() => dropSearchFu()}>
          <ExpandOutlined />
        </button>
      </div>
      <div className={style.navbar}>
        <div className={style.logo}>
          <img src="/media/logo.png.webp" alt="logo" />
        </div>
        <button onClick={() => SidebarFunction()} className={style.buttonMenu}>
          <BarsOutlined />
        </button>
        <div className={dropMenu ? style.menu_2 : style.menu}>
          <Menu data={HeaderRouteData.dataUrl} />
          <button
            className={style.search_button}
            onClick={() => dropSearchFu()}
          >
            <SearchOutlined />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
