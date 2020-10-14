import React from "react";
import Grid from "@material-ui/core/Grid";
import CardItem from "./CardItem";

export default ({ data }) => {
   const {
      todayCases,
      todayRecovered,
      todayDeaths,
      cases,
      recovered,
      deaths,
      updated,
   } = data;

   return (
      <Grid container spacing={2}>
         <Grid item md={4} xs={12}>
            <CardItem
               title="Infected"
               today={todayCases}
               total={cases}
               date={updated}
               borderColor="rgba(0, 0, 255, 0.5)"
            />
         </Grid>
         <Grid item md={4} xs={12}>
            <CardItem
               title="Recovered"
               today={todayRecovered}
               total={recovered}
               date={updated}
               borderColor="rgba(0, 255, 0, 0.5)"
            />
         </Grid>
         <Grid item md={4} xs={12}>
            <CardItem
               title="Deaths"
               today={todayDeaths}
               total={deaths}
               borderColor="rgba(255, 0, 0, 0.5)"
               date={updated}
            />
         </Grid>
      </Grid>
   );
};
