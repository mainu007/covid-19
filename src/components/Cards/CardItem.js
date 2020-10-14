import React from "react";
import CountUp from "react-countup";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
   root: {
      minWidth: "100%",
      borderTop: (props) => `8px solid ${props.borderColor}`,
   },
   title: {
      fontSize: 16,
   },
   pos: {
      marginTop: 12,
   },
});

export default (props) => {
   const { title, today, total, date } = props;
   const classes = useStyles(props);

   return (
      <Card className={classes.root}>
         <CardContent>
            <Typography
               className={classes.title}
               color="textSecondary"
               gutterBottom
            >
               {title}
            </Typography>
            <Typography variant="h5" component="h2">
               +
               <CountUp start={0} end={today} duration={2} separator="," />
            </Typography>
            <Typography className={classes.pos}>
               <CountUp start={0} end={total} duration={2} separator="," />{" "}
               Total
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
               {new Date(date).toDateString()}
            </Typography>
         </CardContent>
      </Card>
   );
};
