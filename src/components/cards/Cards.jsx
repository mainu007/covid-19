import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import Card from "./card/Card.jsx";
import Progress from "./progress/Progress";

export default ({
  data: { confirmed, deaths, recovered, lastUpdate },
  loading,
}) => {
  if (loading) {
    return <Progress />;
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Card
          value={confirmed.value}
          date={lastUpdate}
          title="Infected"
          comment="Number of active cases of COVID-19."
          borderColor="rgba(0, 0, 255, 0.5)"
        />
        <Card
          value={recovered.value}
          date={lastUpdate}
          title="Recovered"
          comment="Number of recoveries from COVID-19."
          borderColor="rgba(0, 255, 0, 0.5)"
        />
        <Card
          value={deaths.value}
          date={lastUpdate}
          title="Deaths"
          comment="Number of deaths caused by COVID-19."
          borderColor="rgba(255, 0, 0, 0.5)"
        />
      </Grid>
    </div>
  );
};
