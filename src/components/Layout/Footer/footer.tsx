import React, { ReactNode } from "react";
import style from "@/components/Layout/Footer/footer.module.scss";
// -------------------------------------------------------------------------------

import {
  FooterCreateWebsiteLink,
  FooterNewsletterLink,
  FooterNetLinks,
  FooterLinksPage,
} from "@/components/Layout/Footer/components";
import footerRouteData from "@/components/Layout/Footer/footerRouteData";
// -------------------------------------------------------------------------------

function Footer() {
  return (
    <footer className={style.footer_box}>
      <div className={style.footer_left}>
        <FooterLinksPage data={footerRouteData.Footer_links_page} />
      </div>

      <div className={style.footer_buttom_left}>
        <FooterNewsletterLink data={footerRouteData.Footer_newsletter_link} />
      </div>

      <div className={style.footer_buttom_right}>
        <FooterCreateWebsiteLink
          data={footerRouteData.Footer_create_website_link}
        />
      </div>
      <div className={style.footer_right}>
        <FooterNetLinks data={footerRouteData.Footer_net_links} />
      </div>
    </footer>
  );
}

export default Footer;
