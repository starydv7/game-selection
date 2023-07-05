import React, { useState } from "react";

const countries = [
  {
    name: "India",
    value: "IND",
    cities: ["Delhi", "Mumbai", "Kolkata"],
  },
  {
    name: "United States",
    value: "USA",
    cities: ["New York", "Los Angeles", "Chicago"],
  },
  {
    name: "Canada",
    value: "CAN",
    cities: ["Toronto", "Vancouver", "Montreal"],
  },
  // Add more countries as needed
];

const Home2 = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (event) => {
    const selectedCountryValue = event.target.value;
    setSelectedCountry(selectedCountryValue);
    setSelectedCity("");

    // You can perform any additional logic based on the selected country here
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <h2>Country and City Dropdowns</h2>

      <div>
        <label htmlFor="country">Select a country:</label>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">-- Select Country --</option>
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCountry && (
        <div>
          <label htmlFor="city">Select a city:</label>
          <select id="city" value={selectedCity} onChange={handleCityChange}>
            <option value="">-- Select City --</option>
            {countries
              .find((country) => country.value === selectedCountry)
              .cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>
          )}
          <div>
              <p>
                  {selectedCountry}  and {selectedCity }
              </p>
          </div>
    </div>
  );
};

export default Home2;
