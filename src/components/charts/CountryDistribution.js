import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["UK", "Canada", "America", "Europe", "Australia"],

  datasets: [
    {
      label: "# of Applications",

      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#123A5C",
        "#F7A730",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "#123A5C",
        "#F7A730",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function CountryDistribution() {
  return <Pie data={data} />;
}
