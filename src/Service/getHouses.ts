import { HousesType } from "./HousesType";

export const getHouses = async():Promise<HousesType[]>=>{
    const getData = await fetch('https://www.anapioficeandfire.com/api/houses');
    const data = getData.json()
    return data
}
