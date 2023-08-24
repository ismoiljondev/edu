type buttonType = {
  id: number;
  text: string;
  style: "blue" | "gold";
  url: string;
}[];

type homeData = {
  title_bir: string;
  title_big: string;
  background_img: string;
  button: buttonType;
};
type homeBeadecData = {
  name: string;
  url: string;
};
type homeDataTwo = {
  aboutUs: homeBeadecData;
  contactUs: homeBeadecData;
  testUs: homeBeadecData;
  background_img: string;
};

type showcaseDataType = {
  homeData: homeData;
  homeDataTwo: homeDataTwo;
};

const ShowcaseData: showcaseDataType = {
  homeData: {
    title_bir: "BEST ONLINE EDUCATION SERVICE IN THE WORLD",
    title_big: "ONE STEP AHEAD THIS SEASON",
    background_img: "/media/home-banner.jpg.webp",
    button: [
      {
        id: 0,
        text: "LEARN MORE",
        style: "blue",
        url: "/",
      },
      {
        id: 1,
        text: "SEE COURSE",
        style: "gold",
        url: "/",
      },
    ],
  },
  homeDataTwo: {
    aboutUs: {
      name: "About Us",
      url: "/abaut",
    },
    contactUs: {
      name: "Contact Us",
      url: "/contact",
    },
    testUs: {
      name: "Test Us",
      url: "/test",
    },
    background_img: "/media/banner.jpg.webp",
  },
};

export default ShowcaseData;
