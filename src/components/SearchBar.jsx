import React from "react";
import "./SearchBar.css";
//import { FiSearch } from "react-icons/fi";
import { FiSearch, FiX } from "react-icons/fi";

export const SearchBar = ({search, setSearch}) => {
    return (
        <div className="input-wrapper">
            <FiSearch size={20} color="white" />
            <input placeholder="Search for games, top-ups and more" value={search} onChange={(e) => setSearch(e.target.value)}/>

            {search && (
        <FiX
          size={18}
          className="clear-icon"
          onClick={() => setSearch("")}
        />
      )}
        </div>
    );
};