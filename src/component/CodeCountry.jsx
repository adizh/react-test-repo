import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getByCode } from "../reducers/actions";
import { useSelector, useDispatch } from "react-redux";
import Country from "./Country";
function CodeCountry() {
  const dispatch = useDispatch();
  const { code } = useParams();
  useEffect(() => {
    dispatch(getByCode(code));
  }, [code, dispatch]);

  const country = useSelector((state) => state.regions.byCode);

  return (
    <div>
      <Link className="btn btn-success back-btn" to="/">
        Back{" "}
      </Link>
      {country.length > 0 && <Country list={country} />}
    </div>
  );
}

export default CodeCountry;
