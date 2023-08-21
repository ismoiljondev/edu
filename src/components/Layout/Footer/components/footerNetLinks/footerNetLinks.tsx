// -------------------------------------------------------------------------------

import { Footer_net_links_type } from "@/types/typesFooter/index";

import style from "@/components/Layout/Footer/components/footerNetLinks/footer_right.module.scss";
import Link from "next/link";

// -------------------------------------------------------------------------------

type PropsType = {
  data: Footer_net_links_type;
};

// -------------------------------------------------------------------------------

function FooterNetLinks(props: PropsType) {
  const { data } = props;
  return (
    <div className={style.footer_right}>
      <ul className={style.footer_right_ul}>
        {data.map((net) => {
          return (
            <li key={net.id}>
              <Link href={net.url}>
                <img src={net.icon} alt="icon" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterNetLinks;
