import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(changeableUrl);
    return { confirmed, deaths, recovered, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyDate = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map(({ name }) => name);
  } catch (error) {
    console.log(error);
  }
};

export const fetchConfirmed = async (country) => {
  try {
    return await axios.get(`${url}/countries/${country}/confirmed`);
  } catch (error) {
    console.log(error);
  }
};
