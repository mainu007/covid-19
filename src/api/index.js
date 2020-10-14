const url = "https://disease.sh/v3/covid-19";

export const fetchData = (country) => {
   let changeableUrl = `${url}/all`;
   if (country) {
      changeableUrl = `${url}/countries/${country}`;
   }
   return fetch(changeableUrl)
      .then((response) => response.json())
      .catch((err) => console.log(err));
};

export const fetchCountries = () => {
   return fetch(`${url}/countries`)
      .then((response) => response.json())
      .catch((err) => console.log(err));
};

export const fetchTotalData = () => {
   return fetch(`${url}/historical/all?lastdays=120`)
      .then((response) => response.json())
      .catch((err) => console.log(err));
};
