import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Card.module.css";

export default ({ value, date, title, comment, borderColor }) => {
  const borderStyle = { borderColor };
  return (
    <Grid
      item
      xs={12}
      md={3}
      component={Card}
      className={styles.card}
      style={borderStyle}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h2">
          <CountUp start={0} end={value} duration={2.75} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(date).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          {comment}
        </Typography>
      </CardContent>
    </Grid>
  );
};
