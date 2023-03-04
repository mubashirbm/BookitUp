import React from 'react'
import { useEffect } from 'react';
import {getChartData} from '../../Api/adminApi/getRequest'


import  { useState } from "react";
import Chart from "react-apexcharts";




const   PostDetailChart = () => { 
    const [state, setState] = useState({
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          },
        },
        series: [
          {
            name: "series-1",
            data:[10000, 20000, 30000, 40000, 50000, 60000],
          },
        ],
      });
      useEffect(()=>{
        const fetchData =async () => {
          try {
            
            const res=await getChartData()
            console.log(res,"res")
          
            // console.log(data,"getChartData")
  
            setState(prevState=>(
              {...prevState,options:{
                ...prevState.options,
                xaxis: {categories: res.months},},
              
              series:[
                {
                  name:'Monthly Booking',
                  data:res.booking
                }
              ]
            }
            ))
          } catch (error) {
            console.error(error);
          }
          
          // setMonth(data.months)
          // setBookings(data.bookings)
          
        };
        fetchData()
      }, []);
      return (
        <div className="flex flex-col w-full  content-center justify-center p-5 gap-y-5">
          <h1 className="text-center text-2xl font-bold">Monthly Booking </h1>
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