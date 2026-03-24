import React from "react";
import "./country.css";

const handleVisit =() =>{
  console.log('I am clicked')
}
const Country = ({ country }) => {
  // console.log(country);
  return (
    <div className="country">
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
      <button onClick={handleVisit}>Visit</button>
    </div>
  );
};

export default Country;
