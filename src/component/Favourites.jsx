import React, { useState } from "react";
import { useSelector } from "react-redux";
import Country from "./Country";

function Favourites() {
  const [isOpen, setIsOpen] = useState(false);
  const favourites = useSelector((state) => state.regions.favourites);
  return (
    <div className="fav-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-danger d-block text-center fav-btn"
      >
        {isOpen ? "Скрыть избранные страны" : " Избранные страны"}
      </button>
      {isOpen && <h4 className="text-center m-4">Избранные страны</h4>}
      {isOpen && favourites.length > 0 && (
        <Country list={favourites} statusText="X" />
      )}
    </div>
  );
}

export default Favourites;
