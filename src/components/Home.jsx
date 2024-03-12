import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Countrycard from "./Countrycard";

export default function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      if (data) {
        setCountries(data);
      }
      // console.log(countries);
    } catch (error) {
      console.log(error);
    }
  }

  return <Countrycard countries={countries}></Countrycard>;
}
