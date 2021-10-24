import React from "react";
import { useHouses } from "../Hooks/useHouses";

const Houses: React.FC = () => {
  //   const { listOfHouses } = useHouses(regionName);

  return (
    <div>
      {/* {listOfHouses
            .filter((house) => filterByHouseName(house.name, searchInput))
            .map((house, index) => (
            <ol key={index}>{house.name}</ol>
            ))} */}
    </div>
  );
};

export default Houses;
