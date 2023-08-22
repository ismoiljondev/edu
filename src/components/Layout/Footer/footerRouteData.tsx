type Footer_links_page_data_type = {
  id: number;
  url?: string;
  name: string;
}[];

type Footer_links_page_type = {
  id: string;
  categories: string;
  data: Footer_links_page_data_type;
}[];

// -------------------------------------------------------------------------------

type Footer_net_links_type = {
  id: number;
  url: string;
  icon: string;
}[];

// -------------------------------------------------------------------------------

type Footer_newsletter_link_data_tupe = {
  id: number;
  name: string;
}[];

type Footer_newsletter_link = {
  id: string;
  categories: string;
  data: Footer_newsletter_link_data_tupe;
}[];

// -------------------------------------------------------------------------------

type Footer_create_website_link = {
  id: number;
  name: string;
  nameUrl: string;
}[];

// -------------------------------------------------------------------------------

type Footer_route_data_type = {
  Footer_links_page: Footer_links_page_type;

  Footer_net_links: Footer_net_links_type;

  Footer_newsletter_link: Footer_newsletter_link;

  Footer_create_website_link: Footer_create_website_link;
};

const footerRouteData: Footer_route_data_type = {
  Footer_links_page: [
    {
      id: "li0",
      categories: "Top Products",
      data: [
        {
          id: 0,
          url: "/",
          name: "Managed Website",
        },
        {
          id: 1,
          url: "/",
          name: "Manage Reputation",
        },
        {
          id: 2,
          url: "/",
          name: "Power Tools",
        },
        {
          id: 2,
          url: "/",
          name: "Marketing Service",
        },
      ],
    },
    {
      id: "li0",
      categories: "Quick Links",
      data: [
        {
          id: 0,
          url: "/",
          name: "Jobs",
        },
        {
          id: 1,
          url: "/",
          name: "Brand Assets",
        },
        {
          id: 2,
          url: "/",
          name: "Investor Relations",
        },
        {
          id: 2,
          url: "/",
          name: "Terms of Service",
        },
      ],
    },
    {
      id: "li0",
      categories: "Features",
      data: [
        {
          id: 0,
          url: "/",
          name: "Jobs",
        },
        {
          id: 1,
          url: "/",
          name: "Brand Assets",
        },
        {
          id: 2,
          url: "/",
          name: "Investor Relations",
        },
        {
          id: 2,
          url: "/",
          name: "Terms of Service",
        },
      ],
    },
    {
      id: "li0",
      categories: "Resources",
      data: [
        {
          id: 0,
          url: "/",
          name: "Guides",
        },
        {
          id: 1,
          url: "/",
          name: "Research",
        },
        {
          id: 2,
          url: "/",
          name: "Experts",
        },
        {
          id: 2,
          url: "/",
          name: "Agencies",
        },
      ],
    },
  ],
  //   -------------------------------------------------------------------------------
  Footer_net_links: [
    {
      id: 0,
      url: "/",
      icon: "/img/Instagram_icon.png",
    },
    {
      id: 1,
      url: "/",
      icon: "/img/Twitch_icon.png",
    },
    {
      id: 2,
      url: "/",
      icon: "/img/Facebook_icon.png",
    },
    {
      id: 2,
      url: "/",
      icon: "/img/Facebook_icon.png",
    },
  ],
  // -------------------------------------------------------------------------------
  Footer_newsletter_link: [
    {
      id: "li0",
      categories: "Newsletter",
      data: [
        {
          id: 0,
          name: "You can trust us. we only send promo offers,",
        },
      ],
    },
  ],
  Footer_create_website_link: [
    {
      id: 0,
      name: "Copyright ©2023 All rights reserved | This template is made with  ❤by ",
      nameUrl: "Colorlib",
    },
  ],
};

export default footerRouteData;
