import React, { useEffect, useState } from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import axios from "axios";
import RegionInfo from "./RegionInfo";

const Map = () => {
  const [countryCode, setCountryCode] = useState("in");
  const [country, setCountry] = useState(null);

  useEffect(() => {
    alert("Select Any Country in the map to get Info about the Country");
  }, []);

  useEffect(() => {
    const getCountryInfo = async () => {
      const res = await axios.get(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      setCountry(res.data[0]);
    };
    getCountryInfo();
  }, [countryCode]);

  return (
    <>
      <div className="container">
        <VectorMap
          style={{ width: "100%", height: "100%" }}
          map={worldMill}
          onRegionClick={(event, code) => {
            setCountryCode(code);
          }}
        />
        <RegionInfo country={country} />
      </div>
    </>
  );
};

export default Map;
