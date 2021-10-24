import { HouseType } from "./HouseType";

export const getHouses = async (region: string): Promise<HouseType[]> => {
  const getData = await fetch(
    `https://www.anapioficeandfire.com/api/houses?region=${region}`
  );
  const data = getData.json();
  return data;
};
