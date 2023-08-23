import style from "@/components/Layout/Header/components/LinkMenu/linkMenu.module.scss";
import Link from "next/link";

type linkMenuPropsType = {
  id: number;
  name: string;
  url: string;
};

function LinkMenu(props: linkMenuPropsType) {
  const { id, name, url } = props;
  return (
    <div className={style.link}>
      <Link href={url} key={id}>
        {name}
      </Link>
    </div>
  );
}

export default LinkMenu;
