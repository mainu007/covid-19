import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import CovidLogo from "./images/image.png";
import { fetchData, fetchCountries } from "./api";
import { Cards, CountryPicker, Chart } from "./components";
import styles from "./App.module.css";
import Progress from "./components/Progress";
import Tables from "./components/Tables";

class App extends Component {
   state = {
      data: {},
      countriesData: [],
      loading: true,
      country: "",
   };

   initData = (country) => {
      fetchData(country).then((data) => {
         if (data.error) {
            console.log(data.error);
         } else {
            this.setState({ data });
         }
      });
   };

   fetchCountriesData = () => {
      fetchCountries().then((data) => {
         if (data.error) {
            console.log(data.error);
         } else {
            this.setState({ countriesData: data, loading: false });
         }
      });
   };

   componentDidMount() {
      this.initData();
      this.fetchCountriesData();
   }

   countryPickerHandler = (country) => {
      this.initData(country);
      this.setState({ country });
   };

   render() {
      const { loading, country, countriesData } = this.state;
      return (
         <Container maxWidth="xl">
            <div className={styles.logoContainer}>
               <img src={CovidLogo} className={styles.logoImage} alt="..." />
            </div>
            {loading ? (
               <Progress />
            ) : (
               <>
                  <Grid container spacing={3}>
                     <Grid item md={8} sm={6} xs={12}>
                        <Cards data={this.state.data} />
                        <CountryPicker
                           data={countriesData}
                           onHandler={this.countryPickerHandler}
                        />
                        <Chart country={country} />
                     </Grid>
                     <Grid item md={4} sm={6} xs={12}>
                        <Tables data={countriesData} />
                     </Grid>
                  </Grid>
               </>
            )}
         </Container>
      );
   }
}

export default App;
