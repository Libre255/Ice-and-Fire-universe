import React, { useState } from "react";
import { useHouses } from "./Houses/Hooks/useHouses";
import SearchBar from "./SearchBar/Components/SearchBar";
import { filterByHouseName } from "./SearchBar/Methods/filterByHouseName";

const App: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const { listOfHouses } = useHouses();

  return (
    <div>
      <SearchBar
        searchState={[searchInput, setSearchInput]}
        listOfHouses={listOfHouses}
      />
      {listOfHouses
        .filter((house) => filterByHouseName(house.name, searchInput))
        .map((house, index) => (
          <ol key={index}>{house.name}</ol>
        ))}
    </div>
  );
};

export default App;
