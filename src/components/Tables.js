import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
   head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
   },
   body: {
      fontSize: 14,
   },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
   root: {
      "&:nth-of-type(odd)": {
         backgroundColor: theme.palette.action.hover,
      },
   },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
   container: {
      height: "46vw",
      [theme.breakpoints.down("sm")]: {
         height: "800px",
      },
   },
   table: {
      minWidth: "100%",
   },
}));

export default function CustomizedTables({ data }) {
   const classes = useStyles();
   return (
      <TableContainer className={classes.container} component={Paper}>
         <Table
            className={classes.table}
            size="small"
            stickyHeader
            aria-label="sticky table"
         >
            <TableHead>
               <TableRow>
                  <StyledTableCell>Countries</StyledTableCell>
                  <StyledTableCell align="right">Infected</StyledTableCell>
                  <StyledTableCell align="right">Active</StyledTableCell>
                  <StyledTableCell align="right">Deaths</StyledTableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {data[0] &&
                  data.map((country) => (
                     <StyledTableRow key={country.country}>
                        <StyledTableCell component="th" scope="row">
                           {country.country}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {country.cases}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {country.active}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                           {country.deaths}
                        </StyledTableCell>
                     </StyledTableRow>
                  ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
