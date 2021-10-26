import React, { useEffect, useRef, useState } from "react";
import { HouseType } from "../../Service/HouseType";
import House from "./Houses";
import SearchBar from "../../SearchBar/Components/SearchBar";
import { filterByHouseName } from "../../SearchBar/Methods/filterByHouseName";
interface Props {
  setCloseRegionBtn: React.Dispatch<React.SetStateAction<boolean>>;
  houses: HouseType[];
}

const HousesContainer: React.FC<Props> = ({ setCloseRegionBtn, houses }) => {
  const [searchInput, setSearchInput] = useState<string>("");
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
      <SearchBar
        listOfHouses={houses}
        searchState={[searchInput, setSearchInput]}
      />
      <div id="HousesFlex">
        {houses
          .filter((house) => filterByHouseName(house.name, searchInput))
          .map((house, index) => (
            <House key={index} HouseInfo={house} />
          ))}
      </div>
    </div>
  );
};

export default HousesContainer;
