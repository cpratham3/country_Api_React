import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function CountryCard({ countries }) {
  async function handleLink(name) {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {countries.map((country, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h5 className="card-title">{country.name.common}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {country.name.official}
            </h6>
            <p className="card-text">
              Capital {country.capital}
              Region {country.region}
            </p>
            {/* <a href="#" className="card-link">
              Card link
            </a> */}
            <button onClick={() => handleLink(country.name.common)}>
              See Country
            </button>
            <a href={country.maps.googleMaps} className="card-link">
              Google maps
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
