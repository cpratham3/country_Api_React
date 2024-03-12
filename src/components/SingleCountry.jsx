import React from "react";

export default function SingleCountry({ country }) {
  return (
    <div>
      <h2>Common Name: {country.name.common}</h2>
      <h3>Official Name: {country.name.official}</h3>
      <h4>Region: {country.region}</h4>
    </div>
  );
}
