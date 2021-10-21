import React from "react";

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<Props> = ({ setSearch }) => {
  return (
    <>
      <legend>Search</legend>
      <label htmlFor="s">
        <input
          type="search"
          name="s"
          id="searchBar"
          list="searchBarSuggestions"
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Double click for the list"
        />
      </label>
    </>
  );
};

export default SearchInput;
