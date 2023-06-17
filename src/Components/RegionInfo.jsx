import React from "react";

const RegionInfo = ({ country }) => {
  return (
    <div className="infoBox">
      {country !== null && (
        <>
          <div className="box">
            <img src={country.flags.png} alt="" />
            <h4>
              <span>{country.name.common}</span>
            </h4>
              <p>
                Capital :<span>{country.capital[0]}</span>
              </p>
              <p>
                Currency :
                <span>
                  {country.currencies[Object.keys(country.currencies)[0]].name}{" "}
                  ,{" "}
                  {
                    country.currencies[Object.keys(country.currencies)[0]]
                      .symbol
                  }
                </span>
              </p>
              <p>
                Area :<span>{country.area} sq km</span>
              </p>
              <p>
                Population :<span>{country.population}</span>
              </p>
              <p>
                Continent :<span>{country.continents}</span>
              </p>
              <p>
              timezones :<span>{country.timezones}</span>
              </p>
          </div>
        </>
      )}
    </div>
  );
};

export default RegionInfo;
