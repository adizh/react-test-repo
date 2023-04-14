import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { addToFavourites, removeFav } from "../reducers/cartReducers.js";
import { Link } from "react-router-dom";
const Country = ({ list }) => {
  const dispatch = useDispatch();
  const addToFav = (favourite) => {
    dispatch(addToFavourites(favourite));
  };
  const removeFromFav = (item) => {
    dispatch(removeFav(item));
  };

  const favourites = useSelector((state) => state.regions.favourites);
  return (
    <>
      {JSON.stringify(favourites) === JSON.stringify(list) ? (
        <div className="countries-block">
          {list.map((e) => (
            <div className="each-country" key={e.name.common}>
              <div className="left-side">
                {" "}
                <img src={`${e?.flags?.svg}`} alt={`${e?.flags?.alt}`} />
                <button
                  className="btn btn-warning"
                  onClick={() => removeFromFav(e)}
                >
                  Удалить
                </button>
              </div>
              <Link
                to={`/countries/${e.name.common}`}
                state={e}
                className="right-side"
              >
                <p>Название: {e.name.common}</p>
                <p>Столица: {e.capital}</p>
                <p>Население: {e.population}</p>
                <p>Площадь: {e.area}</p>
                <p>
                  Код страны:
                  {e?.idd?.root + e?.idd?.suffixes[0]}
                </p>
                <p>
                  Языки:{" "}
                  {Object.values(e.languages)
                    .map((e) => e)
                    .join(" ")}
                </p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="countries-block">
          {list.map((e) => (
            <div className="each-country" key={e.name.common}>
              <div className="left-side">
                {" "}
                <img src={`${e?.flags?.svg}`} alt={`${e?.flags?.alt}`} />
                <button className="btn btn-warning" onClick={() => addToFav(e)}>
                  {favourites.find((item) => item.name.common === e.name.common)
                    ? "Добавлено"
                    : "В избранное"}
                </button>
              </div>
              <Link
                to={`/countries/${e.name.common}`}
                state={e}
                className="right-side"
              >
                <p>Название: {e.name.common}</p>
                <p>Столица: {e.capital}</p>
                <p>Население: {e.population}</p>
                <p>Площадь: {e.area}</p>
                <p>
                  Код страны:
                  {e?.idd?.root + e?.idd?.suffixes[0]}
                </p>
                <p>
                  Языки:{" "}
                  {Object.values(e.languages)
                    .map((e) => e)
                    .join(" ")}
                </p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Country;
