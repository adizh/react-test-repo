import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getByCode } from "../reducers/actions";
import { useSelector, useDispatch } from "react-redux";
import Country from "./Country";
function CodeCountry() {
  const { code } = useParams();
  useEffect(() => {
    dispatch(getByCode(code));
  }, [code]);

  const dispatch = useDispatch();
  const country = useSelector((state) => state.regions.byCode);

  return (
    <div>
      <Link className="btn btn-success back-btn" to="/">
        Back{" "}
      </Link>
      {country.length > 0 && <Country list={country} statusText="AAD" />}
    </div>
  );
}

export default CodeCountry;
