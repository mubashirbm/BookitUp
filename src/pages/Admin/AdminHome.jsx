// import React, { useState } from "react";
// import Chart from "react-apexcharts";

// const PostDetailChart = ({postGraphCategories,postGraphData}) => {
//     const [state, setState] = useState({
//         options: {
//           chart: {
//             id: "basic-bar",
//           },
//           xaxis: {
//             categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//           },
//         },
//         series: [
//           {
//             name: "series-1",
//             data: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//           },
//         ],
//       });
//       return (
//         <div className="flex flex-col w-full  content-center justify-center p-5 gap-y-5">
//           <h1 className="text-center text-2xl font-bold">Post chart </h1>
//           <div className="mx-auto">
//           <Chart
//             options={state.options}
//             series={state.series}
//             type="line"
//             width="600"
//           />
//           </div>
//         </div>
//       );
// }

// export default PostDetailChart
import React, { useEffect, useState } from "react";
import PostDetailChart from "../../components/admin/PostDetailChart";
import Bchart from "../../components/admin/Bchart";
import {getChartData} from "../../Api/adminApi/getRequest"

export default function AdminHome() {


  // useEffect(()=>{
  //   const fetchData =async () => {
  //     const data=await getChartData()
  //     console.log(data,"getChartData")
      
  //     setMonth(data.months)
  //     setBookings(data.bookings)
      
  //   };
  //   fetchData()
  // }, []);

  return (
    <div className="w-full ">
      <div className="container mx-auto flex items-start justify-center ">
        <div className="lg:flex  md:w-full sm:w-full px-20 mx-auto items-start justify-center py-10 ">

          <PostDetailChart />
          <Bchart />
  
        </div>
      </div>
    </div>
  );
}
