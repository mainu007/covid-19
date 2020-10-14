import React from "react";
import { Line } from "react-chartjs-2";

const LineGrap = ({ data }) => {
   return (
      <Line
         data={{
            labels: data.map(({ date }) => date),
            datasets: [
               {
                  data: data.map(({ confirmed }) => confirmed),
                  label: "Infected",
                  borderColor: "#3333ff",
                  fill: true,
               },
               {
                  data: data.map(({ deaths }) => deaths),
                  label: "Deaths",
                  borderColor: "red",
                  backgroundColor: "rgba(255,0,0,0.5)",
                  fill: true,
               },
            ],
         }}
      />
   );
};

export default LineGrap;
