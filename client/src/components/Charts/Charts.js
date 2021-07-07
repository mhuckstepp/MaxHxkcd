import React from "react";
import { useSelector } from "react-redux";
import { Line, Bar } from "react-chartjs-2";
import { countByWords, countByYear, lengthByMonth } from "./chartCalcs";
import ReactScrollableList from "react-scrollable-list";

const Charts = () => {
  const comics = useSelector((state) => state.comics);
  let yearCounts = countByYear(comics);
  let wordCounts = countByWords(comics);
  let wordCountsByMonth = lengthByMonth(comics);
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

  const wordCountsConfig = {
    labels: wordCounts.map((word) => word[0]),
    datasets: [
      {
        label: "Words in description by month",
        data: wordCounts.map((word) => {
          return word[1];
        }),
        fill: false,
        backgroundColor: "rgb(0, 99, 132)",
        borderColor: "rgba(255, 0, 132, 0.2)",
      },
    ],
  };

  const altWordCountsByMonth = {
    labels: [
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Word length of titles by month",
        data: wordCountsByMonth.map((counts) => {
          return (counts[1] / counts[0]).toFixed(1);
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
        <Line data={totalPerYear} options={options} height={100} />
      </div>
      <div className=" w-1/2  rounded bg-white shadow m-8 p-8 flex flex-col items-center text-center max-w-screen-xl dark:bg-gray-400">
        <Line data={averagePerMonth} options={options} height={80} />
      </div>
      <div className=" w-1/2 rounded bg-white shadow m-8 p-8 flex flex-col items-center text-center max-w-screen-xl dark:bg-gray-400">
        <Bar data={wordCountsConfig} options={options} />
      </div>
      <div className=" w-1/2 rounded bg-white shadow m-8 p-8 flex flex-col items-center text-center max-w-screen-xl dark:bg-gray-400">
        <Bar data={altWordCountsByMonth} options={options} />
      </div>
      <h2 className=" text-2xl my-6 "> Most used words in titles </h2>
      <ReactScrollableList
        listItems={[
          ...wordCounts.map((word) => {
            return { id: word[0], content: `"${word[0]}" - ${word[1]} times` };
          }),
        ]}
        heightOfItem={20}
        maxItemsToRender={75}
        style={{ color: "black" }}
      />
    </div>
  );
};

export default Charts;
