import React from "react";
import { useHouses } from "../Hooks/useHouses";
import { RegionsType } from "../Variabels/regions";

interface Props {
  regionInfo: RegionsType;
}

const Regions: React.FC<Props> = ({ regionInfo }) => {
  //   const { listOfHouses } = useHouses(regionName);

  return (
    <section>
      <h2>{regionInfo.name}</h2>
      {/* {listOfHouses
            .filter((house) => filterByHouseName(house.name, searchInput))
            .map((house, index) => (
            <ol key={index}>{house.name}</ol>
            ))} */}
    </section>
  );
};

export default Regions;
