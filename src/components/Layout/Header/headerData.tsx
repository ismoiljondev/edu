type Header_route_Data_type = {
  id: number;
  name: string;
  url: string;
}[];

type Header_route_type = {
  dataUrl: Header_route_Data_type;
};
export const HeaderRouteData: Header_route_type = {
  dataUrl: [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 1,
      name: "About",
      url: "/",
    },
    {
      id: 1,
      name: "Contact",
      url: "/",
    },
  ],
  //   -------------------------------------------------------------------------------
};
