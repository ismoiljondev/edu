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

type showcaseDataType = {
  homeData: homeData;
};

const ShowcaseData: showcaseDataType = {
  homeData: {
    title_bir: "BEST ONLINE EDUCATION SERVICE IN THE WORLD",
    title_big: "ONE STEP AHEAD THIS SEASON",
    background_img: "/media/home-banner.jpg.webp",
    button: [
      {
        id: 0,
        text: "SEE COURSE",
        style: "blue",
        url: "/",
      },
      {
        id: 0,
        text: "SEE COURSE",
        style: "gold",
        url: "/",
      },
    ],
  },
};

export default ShowcaseData;
