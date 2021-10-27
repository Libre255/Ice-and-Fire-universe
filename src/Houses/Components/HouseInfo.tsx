import React from "react";
import { HouseType } from "../../Service/HouseType";
import ExitBtn from "./ExitBtn";

interface Props {
  setcloseHouseInfo: React.Dispatch<React.SetStateAction<boolean>>;
  houseData: HouseType | undefined;
}

const HouseInfo: React.FC<Props> = ({ setcloseHouseInfo, houseData }) => {
  return (
    <article id="HouseInfoContainer">
      <ExitBtn onClick={() => setcloseHouseInfo(true)} />
      <h3 id="HouseName">{houseData?.name}</h3>
      <ul>
        <li>
          <h4>Region:</h4> {houseData?.region}
        </li>
        <li>
          <h4>Coat Of Arms:</h4>
          {houseData?.coatOfArms ? `"${houseData?.coatOfArms}"` : "none"}
        </li>
        <li>
          <h4>Words:</h4> {houseData?.words || "none"}
        </li>
      </ul>
    </article>
  );
};

export default HouseInfo;
