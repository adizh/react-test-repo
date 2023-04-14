import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchList } from "../reducers/actions";
import Country from "./Country";

function Search() {
  const [countryName, setCountryName] = useState("");
  const dispatch = useDispatch();
  const searchList = useSelector((state) => state.regions.searchList);
  const searchByName = (name) => {
    dispatch(getSearchList(name));
  };

  return (
    <>
      <div className="search-block">
        <input
          className="form-control search-input"
          onChange={(name) => setCountryName(name.target.value)}
          type="text"
          placeholder="Введите название страны"
        />

        <button
          onClick={() => searchByName(countryName)}
          className="btn btn-success search-btn"
        >
          Поиск
        </button>
      </div>
      {searchList.length > 0 && <Country list={searchList} statusText="add" />}
    </>
  );
}

export default Search;
