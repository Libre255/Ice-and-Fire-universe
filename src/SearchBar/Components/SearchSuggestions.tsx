import React from "react";
import { HouseType } from "../../Service/HouseType";
import { filterByHouseName } from "../Methods/filterByHouseName";

interface Props {
  listOfHouses: HouseType[];
  searchInput: string;
}
const SearchSuggestions: React.FC<Props> = ({ listOfHouses, searchInput }) => {
  return (
    <datalist id="searchBarSuggestions">
      {listOfHouses
        .map((house) => house.name)
        .filter((houseName) => filterByHouseName(houseName, searchInput))
        .map((houseName, Index) => (
          <option value={houseName} key={Index} />
        ))}
    </datalist>
  );
};

export default SearchSuggestions;
