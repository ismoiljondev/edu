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

export default showcaseDataType;
