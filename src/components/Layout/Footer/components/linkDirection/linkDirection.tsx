// -------------------------------------------------------------------------------

import style from "@/components/Layout/Footer/components/linkDirection/linkDirectin.module.scss";
import Link from "next/link";

// -------------------------------------------------------------------------------

type LinkDirectinType = {
  id: number;
  url: string;
  name: string;
  target?: string;
};

// -------------------------------------------------------------------------------

function LinkDirectin(props: LinkDirectinType) {
  const { id, name, url, target } = props;
  return (
    <div className={style.link_direction}>
      <Link key={id} href={url} target={target}>
        {name}
      </Link>
    </div>
  );
}

export default LinkDirectin;
