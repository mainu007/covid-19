import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";
import Switch from "./switch/Switch.jsx";

export default ({ handleChange, handleChartChange, chartShow, loading }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const myFetch = async () => {
      setCountries(await fetchCountries());
    };
    myFetch();
  });

  if (loading) {
    return null;
  }

  return (
    <div className={styles.container}>
      <FormControl className={styles.formControl} disabled={!chartShow}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="">Global</option>
          {countries.map((country, i) => (
            <option value={country} key={i}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      <div>
        <Switch handleChartChange={handleChartChange} />
      </div>
    </div>
  );
};
