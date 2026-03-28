import React, { useState } from "react";
import "./country.css";

const Country = ({ country , handleVisitedCountries , handleVisitedFlag}) => {
  const [visited, setVisited] = useState(false);

  const handleFlag = () => {
    // console.log("flag btn clicked")
    handleVisitedFlag(country)
  }
  const handleVisit = () => {
    // setVisited(true);

    // basic system
    // if(visited){
    //   setVisited(false)
    // }else{
    //   setVisited(true)
    // }

    //second system
    // setVisited(visited? false: true);

    //third system
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    // <div className={`country ${visited?'country-visited': 'country-not-visited'}`}>
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country.flags.flags.svg} alt={country.flags.flags.alt} />
      <div>
        <h3>{country.name.common} </h3>
        <p>Population: {country.population.population}</p>
        <p>Continent: {country.continents.continents}</p>
        <p>
          Area: {country.area.area} <br />
          {country.area.area > 200000 ? "Big country" : "Small country"}
        </p>
      </div>
      <button onClick={handleVisit}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={handleFlag}>Add Flag</button>
    </div>
  );
};

export default Country;
