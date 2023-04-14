import React from "react";
import { useLocation, Link } from "react-router-dom";
function EachCountry() {
  const { state } = useLocation();

  return (
    <>
      <Link className="btn btn-success back-btn" to="/">
        Back{" "}
      </Link>
      {state && (
        <div className="each-country" key={state.name.common}>
          <div to={`/countries/${state.name.common}`} className="right-side">
            <p>Название: {state.name.common}</p>
            <p>Столица: {state.capital}</p>
            <p>Население: {state.area}</p>
            <p>Площадь: {state.area}</p>
            <p>
              Код страны:
              {state.idd.root + state.idd.suffixes[0]}
            </p>
            <p>
              Языки:{" "}
              {Object.values(state.languages)
                .map((e) => e)
                .join(" ")}
            </p>
            <div className="borders" style={{ display: "flex", gap: "10px" }}>
              Границы:{" "}
              {state?.borders?.map((border) => (
                <Link to={`/${border}`}>{border}</Link>
              ))}
              {!state.borders && "Отсутствует"}
            </div>
          </div>
          <div className="left-side">
            {" "}
            <img src={`${state.flags.svg}`} alt={`${state.flags.alt}`} />
          </div>
        </div>
      )}
    </>
  );
}

export default EachCountry;
