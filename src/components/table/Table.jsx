import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styles from "./Table.module.css";
import { fetchCountries } from "../../api";
import TableData from "./TableData";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const myFetch = async () => {
      setCountries(await fetchCountries());
    };
    myFetch();
  });

  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>State</TableCell>
                <TableCell>Last Update</TableCell>
                <TableCell align="right">Infected</TableCell>
                <TableCell align="right">Recovered</TableCell>
                <TableCell align="right">Deaths</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countries.map((value) => (
                <TableData key={value} country={value} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
