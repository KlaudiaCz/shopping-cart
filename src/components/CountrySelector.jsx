import { getNames } from "country-list";
import Select from "react-select";
import { useState } from "react";

const CountrySelector = () => {
  const countries = getNames().map((name) => ({
    value: name,
    label: name,
  }));

    const [country, setCountry] = useState();
  return (
    <>
      <label htmlFor="">Country</label>
      <Select
        options={countries}
        value={country}
        onChange={setCountry}
        className="mb-3"
        styles={{
          control: (base) => ({
            ...base,
            padding: "6px",
            borderRadius: "8px",
            borderColor: "#d1d5db",
          }),
        }}
        placeholder="Choose country"
      />
    </>
  );
};

export default CountrySelector;
