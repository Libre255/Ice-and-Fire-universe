import { HouseType } from "./HouseType";

export const getHouses = async (): Promise<HouseType[]> => {
  const getData = await fetch("https://www.anapioficeandfire.com/api/houses");
  const data = getData.json();
  return data;
};
