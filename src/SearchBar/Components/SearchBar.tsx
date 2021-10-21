import React from "react";
import { HouseType } from "../../Service/HouseType";
import SearchInput from "./SearchInput";
import SearchSuggestions from "./SearchSuggestions";

interface Props {
  searchState: [string, React.Dispatch<React.SetStateAction<string>>];
  listOfHouses: HouseType[];
}

const SearchBar: React.FC<Props> = ({ searchState, listOfHouses }) => {
  const [searchInput, setSearchInput] = searchState;

  return (
    <fieldset>
      <SearchInput setSearch={setSearchInput} />
      <SearchSuggestions
        searchInput={searchInput}
        listOfHouses={listOfHouses}
      />
    </fieldset>
  );
};

export default SearchBar;
