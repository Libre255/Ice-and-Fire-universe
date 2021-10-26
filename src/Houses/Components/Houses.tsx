import React from "react";
import { HouseType } from "../../Service/HouseType";

interface Props {
  HouseInfo: HouseType;
}
const House: React.FC<Props> = ({ HouseInfo }) => {
  return <div className="House">{HouseInfo.name}</div>;
};

export default House;
