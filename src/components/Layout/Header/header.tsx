import style from "@/components/Layout/Header/heade.module.scss";

import { useState } from "react";
import { SearchOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";

// ---------------------------------------------------

import Menu from "@/components/Layout/Header/components/Menu";
import { HeaderRouteData } from "@/components/Layout/Header/headerData";
import Link from "next/link";

// ---------------------------------------------------

type HeaderProps = {
  isScroll: boolean;
  navType: boolean;
};

// ---------------------------------------------------

function Header(props: HeaderProps) {
  const { isScroll, navType } = props;

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
  function OnSubmit(e: any) {
    e.preventDefault();
  }
  // ---------------------------------------------------

  return (
    <div
      className={
        isScroll
          ? navType
            ? style.header_2
            : style.header_2_blue
          : style.header
      }
    >
      <form
        action=""
        onSubmit={(e) => OnSubmit(e)}
        className={dropSearch ? style.search_box_2 : style.search_box}
      >
        <input type="search" name="" id="" placeholder="Search Here" />
        <button className={style.search_button} onClick={() => dropSearchFu()}>
          <CloseOutlined />
        </button>
      </form>

      <div className={style.navbar}>
        <div className={style.logo}>
          <Link href={"/"}>
            <img
              src={navType ? "/media/logo.png.webp" : "/media/logo2.png.webp"}
              alt="logo"
            />
          </Link>
        </div>

        <button onClick={() => SidebarFunction()} className={style.button_Menu}>
          {dropMenu ? <CloseOutlined /> : <MenuOutlined />}
        </button>

        <div className={dropMenu ? style.menu_2 : style.menu}>
          <Menu data={HeaderRouteData.dataUrl} menuType={navType} />
          <button
            className={style.search_button2}
            onClick={() => dropSearchFu()}
          >
            <SearchOutlined
              style={navType ? { color: "#002347" } : { color: "white" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
