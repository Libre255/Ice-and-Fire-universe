import React, { useState } from "react";
import { useHouses } from "./Houses/Hooks/useHouses";
import { filterByHouseName } from "./SearchBar/Methods/filterByHouseName";
import Logo from "./Logo/Components/Logo";

const App: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const { listOfHouses } = useHouses();

  return (
    <div id="hero">
      <div id="wrapper">
        <Logo />

        {listOfHouses
          .filter((house) => filterByHouseName(house.name, searchInput))
          .map((house, index) => (
            <ol key={index}>{house.name}</ol>
          ))}
      </div>
    </div>
  );
};

export default App;
