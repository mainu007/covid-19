import React from "react";
import { Bar } from "react-chartjs-2";

const BarGrap = ({ data }) => {
   const { cases, recovered, deaths, country } = data;
   return (
      <div>
         <Bar
            data={{
               labels: ["Infected", "Recovered", "Deaths"],
               datasets: [
                  {
                     label: "People",
                     backgroundColor: [
                        "rgba(0,0,255,0.5)",
                        "rgba(0,255,0,0.5)",
                        "rgba(255,0,0,0.5)",
                     ],
                     data: [cases, recovered, deaths],
                  },
               ],
            }}
            options={{
               legend: { display: false },
               title: { display: true, text: `Current state in ${country}` },
            }}
         />
      </div>
   );
};

export default BarGrap;
