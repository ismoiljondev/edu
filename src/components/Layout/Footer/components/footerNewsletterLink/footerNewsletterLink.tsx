// -------------------------------------------------------------------------------

import style from "@/components/Layout/Footer/components/footerNewsletterLink/footer_buttom_left.module.scss";
import { Footer_links_page_type } from "@/types/typesFooter/index";
import LinkDirectin from "@/components/Layout/Footer/components/linkDirection";
import InputEmail from "@/components/Layout/Footer/components/inputEmail";

// -------------------------------------------------------------------------------

type PrpsType = {
  data: Footer_links_page_type;
};

// -------------------------------------------------------------------------------

function FooterNewsletterLink(props: PrpsType) {
  const { data } = props;

  return (
    <div className={style.footer_top_right}>
      <div>
        {data.map((e) => {
          return (
            <div className={style.footer_top_right_box}>
              <h3>{e.categories}</h3>
              <ul className={style.footer_top_right_box_ul}>
                {e.data.map((li) => {
                  return <li key={li.id}>{li.name}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <InputEmail />
    </div>
  );
}

export default FooterNewsletterLink;
