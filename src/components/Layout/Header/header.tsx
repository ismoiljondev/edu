import style from "@/components/Layout/Header/heade.module.scss"

import { useContext } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';

// ---------------------------------------------------


import { MyContext } from "@/utils/context/myContext"

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
    <div className={ isScroll ? style.header_2 : style.header}>
        <button onClick={() => SidebarFunction()} className={style.buttonMenu}>
          <FaBars />
        </button>
      
    </div>
  );
}

export default Header;