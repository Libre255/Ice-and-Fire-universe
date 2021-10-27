import React, { useEffect, useRef, useState } from "react";
import { HouseType } from "../../Service/HouseType";
import House from "./Houses";
import SearchBar from "../../SearchBar/Components/SearchBar";
import { filterByHouseName } from "../../SearchBar/Methods/filterByHouseName";
import ExitBtn from "./ExitBtn";
import HouseInfo from "./HouseInfo";
interface Props {
  setCloseRegionBtn: React.Dispatch<React.SetStateAction<boolean>>;
  housesOfARegion: HouseType[];
}

const HousesContainer: React.FC<Props> = ({
  setCloseRegionBtn,
  housesOfARegion,
}) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [houseData, setHouseData] = useState<HouseType>();
  const [closeHouseInfo, setcloseHouseInfo] = useState<boolean>(true);
  const myref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    myref.current!.scrollIntoView();
  }, []);

  return (
    <section id="HousesContainer" ref={myref}>
      <ExitBtn onClick={() => setCloseRegionBtn(true)} />
      <SearchBar
        listOfHouses={housesOfARegion}
        searchState={[searchInput, setSearchInput]}
      />
      <article id="HousesFlex">
        {housesOfARegion
          .filter((house) => filterByHouseName(house.name, searchInput))
          .map((house, index) => (
            <House
              key={index}
              houseSettings={[house, setcloseHouseInfo, setHouseData]}
            />
          ))}
      </article>
      {closeHouseInfo || (
        <HouseInfo
          setcloseHouseInfo={setcloseHouseInfo}
          houseData={houseData}
        />
      )}
    </section>
  );
};

export default HousesContainer;
