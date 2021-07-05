import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { countByYear } from "./chartCalcs";

const Charts = () => {
  const comics = useSelector((state) => state.comics);
  let yearCounts = countByYear(comics);
  let currDate = new Date();

  const totalPerYear = {
    labels: Object.keys(yearCounts),
    datasets: [
      {
        label: "Total # of Comics per year",
        data: Object.keys(yearCounts).map((year) => {
          return yearCounts[year];
        }),
        fill: false,
        backgroundColor: "rgb(255, 99, 0)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Average Comics Published per month",
        data: Object.keys(yearCounts).map((year) => {
          if (Number(year) === currDate.getFullYear()) {
            return (yearCounts[year] / currDate.getMonth()).toFixed(1);
          } else {
            return (yearCounts[year] / 12).toFixed(1);
          }
        }),
        fill: false,
        backgroundColor: "rgb(0, 99, 132)",
        borderColor: "rgba(255, 0, 132, 0.2)",
      },
    ],
  };

  const averagePerMonth = {
    labels: Object.keys(yearCounts),
    datasets: [
      {
        label: "Average Comics Published per month",
        data: Object.keys(yearCounts).map((year) => {
          if (Number(year) === currDate.getFullYear()) {
            return (yearCounts[year] / currDate.getMonth()).toFixed(1);
          } else {
            return (yearCounts[year] / 12).toFixed(1);
          }
        }),
        fill: false,
        backgroundColor: "rgb(0, 99, 132)",
        borderColor: "rgba(255, 0, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="w-full flex flex-col mt-12 items-center text-center ">
      <div className=" w-1/2 rounded bg-white shadow m-8 p-8 flex flex-col items-center text-center max-w-screen-xl dark:bg-gray-400">
        <Line data={totalPerYear} options={options} />
      </div>
      <div className=" w-1/2  rounded bg-white shadow m-8 p-8 flex flex-col items-center text-center max-w-screen-xl dark:bg-gray-400">
        <Line data={averagePerMonth} options={options} />
      </div>
    </div>
  );
};

export default Charts;
