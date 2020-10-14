import React, { useState, useEffect } from "react";
import { fetchTotalData, fetchData } from "../../api";
import BarGrap from "./BarGrap";
import LineGrap from "./LineGrap";

const bieldChartData = (data) => {
   let ChartData = [];
   let lastDataPoint;
   for (let date in data.cases) {
      if (lastDataPoint) {
         let newDataPoint = {
            date,
            confirmed: data.cases[date] - lastDataPoint.cases,
            recovered: data.recovered[date] - lastDataPoint.deaths,
            deaths: data.deaths[date] - lastDataPoint.deaths,
         };
         ChartData.push(newDataPoint);
      }
      lastDataPoint = {
         cases: data.cases[date],
         recovered: data.recovered[date],
         deaths: data.deaths[date],
      };
   }
   return ChartData;
};

export default ({ country }) => {
   const [data, setData] = useState([]);

   useEffect(() => {
      if (country) {
         fetchData(country).then((data) => {
            if (data.error) {
               console.log(data.error);
            } else {
               setData(data);
            }
         });
      } else {
         fetchTotalData().then((data) => {
            if (data.error) {
               console.log(data.error);
            } else {
               setData(bieldChartData(data));
            }
         });
      }
   }, [country]);

   return (
      <>
         {data[0] && (country ? null : <LineGrap data={data} />)}
         {data.cases && (country ? <BarGrap data={data} /> : null)}
      </>
   );
};
