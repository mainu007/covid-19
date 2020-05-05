import React, { Component } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { fetchConfirmed } from "../../api";

export default class TableData extends Component {
  state = {
    confirmed: null,
    recovered: null,
    deaths: null,
  };

  async componentDidMount() {
    try {
      const {
        data: [value],
      } = await fetchConfirmed(this.props.country);

      if (value.confirmed) {
        this.setState({
          confirmed: value.confirmed,
          recovered: value.recovered,
          deaths: value.deaths,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { confirmed, recovered, deaths } = this.state;
    const { country } = this.props;
    return (
      <TableRow>
        <TableCell component="th" scope="row">
          {country}
        </TableCell>
        <TableCell>{new Date().toDateString()}</TableCell>
        <TableCell align="right">{confirmed}</TableCell>
        <TableCell align="right">{recovered}</TableCell>
        <TableCell align="right">{deaths}</TableCell>
      </TableRow>
    );
  }
}
