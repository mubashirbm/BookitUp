import React from 'react'


import  { useState } from "react";
import Chart from "react-apexcharts";

const PostDetailChart = ({month,booking}) => {
  console.log(booking,'23')
  console.log(month,'23')
    const [state, setState] = useState({
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories:[month],
          },
        },
        series: [
          {
            name: "series-1",
            data:booking,
          },
        ],
      });
      return (
        <div className="flex flex-col w-full  content-center justify-center p-5 gap-y-5">
          <h1 className="text-center text-2xl font-bold">Weekly Booking </h1>
          <div className="mx-auto">
          <Chart 
            options={state.options}
            series={state.series}
            type="area"
            width="600"
          />
          </div>
        </div>
      );
}


export default PostDetailChart