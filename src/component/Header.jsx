import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRegionsList } from "../reducers/actions";
import Country from "./Country";
let regions = [
  { name: "Азия", region: "Asia" },
  { name: "Европа", region: "Europe" },
  { name: "Африка", region: "Africa" },
  { name: "Америка", region: "America" },
  { name: "Австралия", region: "Australia" },
];
function Header() {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const getRegions = (region, name) => {
    dispatch(getRegionsList({ region, name }));
  };
  let regionsList = useSelector((state) => state.regions.regionList);
  if (regionsList.length) {
    regionsList = regionsList.slice(0, page + 2);
  }
  const selectedRegion = useSelector((state) => state.regions.selectedRegion);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      window.innerHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <ul className="nav nav-pills nav-justified region-header">
        {regions.map((region, index) => (
          <li key={region.name} className="nav-item ">
            <button
              onClick={() =>
                getRegions(region.region.toLowerCase(), region.name)
              }
              className={`nav-link ${
                region.name === selectedRegion ? "active" : "nav-link"
              }`}
              id="each-region"
            >
              {region.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="text-center m-5">
        {regionsList.status === 404 &&
          regionsList.message + " по запросу: " + selectedRegion}
      </div>
      {regionsList.length > 0 && (
        <p>Страны, по выбранному региону: {selectedRegion}</p>
      )}

      <div className="text-center m-5">
        {" "}
        {regionsList.length > 0 && <Country list={regionsList} />}
      </div>
    </>
  );
}

export default Header;
