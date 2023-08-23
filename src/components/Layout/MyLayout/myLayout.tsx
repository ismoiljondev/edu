import { useState, ReactNode, useContext } from "react";

// -------------------------------------------------------------------------------

import style from "@/components/Layout/MyLayout/header.module.scss";
import { Footer, Header } from "@/components/Layout";
import { MyContext } from "../../../utils/context/myContext";

// -------------------------------------------------------------------------------

type TypeLayoutChild = {
  children: ReactNode;
};

// -------------------------------------------------------------------------------

function Layout(props: TypeLayoutChild) {
  const { children } = props;

  const [isScroll, setIsScroll] = useState<boolean>(false);

  const { dropMenu, setDropMenu } = useContext(MyContext);

  const changeScroll = (e: any) => {
    setIsScroll(e.target.scrollTop > 250);
  };

  const SidebarFunction = () => {
    setDropMenu(dropMenu ? false : true);
  };

  return (
    <div className={style.layout} onScroll={changeScroll}>
      <Header isScroll={isScroll} />

      <button
        className={dropMenu ? style.buttontwo_res : style.buttontwo}
        onClick={() => SidebarFunction()}
      ></button>
      <div className={style.pages} onScroll={changeScroll}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
