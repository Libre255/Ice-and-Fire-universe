import React from "react";
import { HouseType } from "../../Service/HouseType";

interface Props {
  houseSettings: [
    HouseType,
    React.Dispatch<React.SetStateAction<boolean>>,
    React.Dispatch<React.SetStateAction<HouseType | undefined>>
  ];
}
const House: React.FC<Props> = ({ houseSettings }) => {
  const [houseInfo, setcloseHouseInfo, setHouseData] = houseSettings;

  const onHouseClick = () => {
    setHouseData(houseInfo);
    setcloseHouseInfo(false);
  };
  return (
    <section className="House" onClick={onHouseClick}>
      {houseInfo.name}
    </section>
  );
};

export default House;
