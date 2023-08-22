import { useState, ReactNode, useContext, useEffect } from "react";
import { useRouter } from "next/router";
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
  const [isNavStyle, setIsNavStyle] = useState<boolean>(false);

  const { dropMenu, setDropMenu } = useContext(MyContext);

  const changeScroll = (e: any) => {
    setIsScroll(e.target.scrollTop > 250);
  };
  const router = useRouter();

  useEffect(() => {
    if (router.pathname == "/") {
      setIsNavStyle(true);
    } else setIsNavStyle(false);
  }, [router.pathname]);

  return (
    <div className={style.layout} onScroll={changeScroll}>
      <Header isScroll={isScroll} navType={isNavStyle} />

      <div className={style.pages} onScroll={changeScroll}>
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
