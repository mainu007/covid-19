import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
   container: {
      textAlign: "center",
   },
   formControl: {
      margin: theme.spacing(1),
      width: 350,
      maxWidth: "100%",
      textAlign: "left",
   },
   selectEmpty: {
      marginTop: theme.spacing(2),
   },
}));

export default function CountryPicker({ onHandler, data }) {
   const classes = useStyles();
   const [countryValue, setCountryValue] = useState("");
   const handleChange = (event) => {
      setCountryValue(event.target.value);
      onHandler(event.target.value);
   };

   return (
      <div className={classes.container}>
         <FormControl className={classes.formControl}>
            <Select
               value={countryValue}
               onChange={handleChange}
               displayEmpty
               className={classes.selectEmpty}
               inputProps={{ "aria-label": "Without label" }}
            >
               <MenuItem value="">Global</MenuItem>
               {data[0] &&
                  data.map((country) => (
                     <MenuItem
                        key={country.country}
                        value={country.countryInfo.iso2}
                     >
                        {country.country}
                     </MenuItem>
                  ))}
            </Select>
         </FormControl>
      </div>
   );
}
