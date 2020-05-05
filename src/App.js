import React, { Component } from "react";
import { Cards, Chart, CountryPicker, Table } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";
import image from "./images/image.png";

export default class App extends Component {
  state = {
    data: {},
    country: "",
    loading: true,
    chartShow: true,
  };

  async componentDidMount() {
    try {
      const data = await fetchData();
      this.setState({ data, loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country });
  };

  handleChartChange = () => {
    this.state.chartShow
      ? this.setState({ chartShow: false })
      : this.setState({ chartShow: true });
  };

  render() {
    const { data, loading, country, chartShow } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} loading={loading} />
        <CountryPicker
          handleChartChange={this.handleChartChange}
          handleChange={this.handleCountryChange}
          chartShow={chartShow}
          loading={loading}
        />
        {chartShow ? <Chart data={data} country={country} /> : <Table />}
      </div>
    );
  }
}
