import React from "react";
import { searchStore } from "../../stores/index";
function Search() {
  const setSearch = searchStore((state) => state.storeSearch);
  return (
    <input
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      name="Search"
      id="search"
      autoComplete="search"
      placeholder="Search"
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  );
}

export default Search;
