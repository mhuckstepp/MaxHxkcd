import React from 'react'
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: '# of Comics',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
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

const Charts = () => {
    return (
        <div>
            <Line data={data} options={options} />
        </div>
    )
}

export default Charts
