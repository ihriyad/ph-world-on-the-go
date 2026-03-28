import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";
const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("Visited Countries Clicked", country);

    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const handleVisitedFlag = (country) => {
    const newVisitedFlag =[...visitedFlag, country];
    setVisitedFlag(newVisitedFlag);
  }

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h2>Total Countries: {countries.length}</h2>
      <h3>Visited Countries: {visitedCountries.length}</h3>
      <div>
        <h3>Visited Country Name: </h3>
        <ol>
          {visitedCountries.map((country) => (
            <li key={country.cca3.cca3}>{country.name.common}</li>
          ))}
        </ol>
      </div>
      <div>
        <h3>Visited Country Flags:</h3>
        {
          visitedFlag.map((country) => 
            <img key={country.cca3.cca3} src={country.flags.flags.svg} alt={country.flags.flags.alt} />
          )
        }
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag ={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
