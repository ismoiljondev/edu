// -------------------------------------------------------------------------------

import { Footer_create_website_link } from "@/types/typesFooter/index";
import style from "@/components/Layout/Footer/components/footerCreateWebsiteLink/footer_buttom_right.module.scss";
import LinkDirectin from "@/components/Layout/Footer/components/linkDirection";

// -------------------------------------------------------------------------------

type PropsType = {
  data: Footer_create_website_link;
};
type LiType = {
  id: number;
  name: string;
  nameUrl: string;
};

// -------------------------------------------------------------------------------

function FooterCreateWebsiteLink(props: PropsType) {
  const { data } = props;

  return (
    <div className={style.footer_buttom_right}>
      <ol>
        {data.map((li: LiType) => {
          return (
            <li key={li.id}>
              {li.name}
              <LinkDirectin
                id={li.id}
                name={li.nameUrl}
                url={"https://www.albison.uz/"}
                target="_blank"
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default FooterCreateWebsiteLink;
