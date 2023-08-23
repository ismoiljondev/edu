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

export default showcaseDataType;
