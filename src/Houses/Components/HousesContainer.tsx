import React, { useEffect, useRef } from "react";
import { HouseType } from "../../Service/HouseType";
import House from "./Houses";

interface Props {
  setCloseRegionBtn: React.Dispatch<React.SetStateAction<boolean>>;
  houses: HouseType[];
}

const HousesContainer: React.FC<Props> = ({ setCloseRegionBtn, houses }) => {
  const myref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    myref.current!.scrollIntoView();
  }, []);
  return (
    <div id="HousesContainer" ref={myref}>
      <div
        id="CloseRegionBtn"
        className="button"
        onClick={() => setCloseRegionBtn(true)}
      />

      <div id="HousesFlex">
        {houses.map((house, index) => (
          <House key={index} HouseInfo={house} />
        ))}
      </div>
    </div>
  );
};

export default HousesContainer;
