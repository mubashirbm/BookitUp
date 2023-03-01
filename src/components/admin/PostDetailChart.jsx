import React from 'react'


import  { useState } from "react";
import Chart from "react-apexcharts";

const PostDetailChart = ({postGraphCategories,postGraphData}) => {
    const [state, setState] = useState({
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: ["Jan","Feb","Mar","Apr","May","Jun"],
          },
        },
        series: [
          {
            name: "series-1",
            data: [1991, 1992, 1993, 1994, 1995, 1996],
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