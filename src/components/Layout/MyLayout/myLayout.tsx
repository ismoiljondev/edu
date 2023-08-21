import { useState, ReactNode, useContext } from "react";

// -------------------------------------------------------------------------------

import style from "@/components/Layout/MineLayout/sass/style.module.scss";
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
    setIsScroll(e.target.scrollTop > 10);
  };

  const SidebarFunction = () => {
    setDropMenu(dropMenu ? false : true);
    console.log(dropMenu);
  };

  return (
    <div className={style.layout}>
      <Header isScroll={isScroll} />
      <div className={style.pages} onScroll={changeScroll}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
