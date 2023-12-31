import style from "@/components/Layout/Header/components/LinkMenu/linkMenu.module.scss";
import Link from "next/link";

type linkMenuPropsType = {
  id: number;
  name: string;
  url: string;
  linkType: boolean;
};

function LinkMenu(props: linkMenuPropsType) {
  const { id, name, url, linkType } = props;
  return (
    <span className={linkType ? style.link : style.link_w}>
      <Link href={url}>{name}</Link>
    </span>
  );
}

export default LinkMenu;
