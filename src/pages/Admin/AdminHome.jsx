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
import { getBookingTotal, getCanceled,revenueTotal,userTotal } from "../../Api/adminApi/getRequest";
import rev from '../../images/revenue.jpg'
import book from'../../images/booking.png'
import user from '../../images/users.jpg'
import cancel from '../../images/canceled.png'
import { Await } from "react-router-dom";

export default function AdminHome() {
  const [totalUsers, setTotalUsers] = useState("");
  const [totalBookings, setTotalBookings] = useState("");
  const [totalRevenue, setTotalRevenue] = useState("");
  const [canceledBookings, setCanceledBookings] = useState("");
  console.log(totalUsers,"totalUsers")
  console.log(totalBookings,"totalBookings")
  console.log(totalRevenue,"totalRevenue")
  console.log(canceledBookings,"canceledBookings")

  const getTotalBookings = async () => {
    const data = await getBookingTotal();
    console.log(data, "TOTALUSERS");
    setTotalBookings(data);
  };
  const getTotalCanceled = async () => {
    const data = await getCanceled();
    setCanceledBookings(data);
  };
  const getTotalRevenue =async()=>{
    const data=await revenueTotal()
    setTotalRevenue(data)
  }
  const getTotalUsers=async ()=>{
    const data=await userTotal()
    setTotalUsers(data)

  }

  useEffect(() => {
    getTotalUsers()
    getTotalCanceled();
    getTotalRevenue()
    getTotalBookings();
  }, []);

  return (
    <div className="w-full ">
      <div className="container mx-auto flex items-start justify-center ">
        <div class="w-full p-10  py-6 flex flex-col justify-center sm:py-12">
          <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
            <div class="bg-gray-100 border-indigo-600 dark:bg-blue-300 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
              <img
                class="w-20 h-20 p-1 border shadow-xl  shadow-gray-800 rounded-2xl object-cover"
                src={rev}
                alt=""
              />
              <div class="flex flex-col justify-center">
                <p class="text-gray-900 dark:text-gray-900 font-semibold">
                  Total Revenue
                </p>
                <p class="text-black dark:text-gray-900 text-justify font-semibold">
                ₹ {totalRevenue}
                </p>
              </div>
            </div>

            <div class="bg-gray-100 border-red-600 dark:bg-blue-300 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
              <img
                class="w-20 p-1 h-20 border shadow-xl  shadow-gray-800 rounded-2xl object-cover"
                src={book}
                alt=""
              />
              <div class="flex flex-col justify-center">
                <p class="text-gray-900 dark:text-gray-900 font-semibold">
                 TotalBookings
                </p>
                <p class="text-black dark:text-gray-900 text-justify font-semibold">
                  {totalBookings}
                </p>
              </div>
            </div>

            <div class="bg-gray-100 border-yellow-600 dark:bg-blue-300 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
              <img
                class="w-20 p-1 h-20 border shadow-xl  shadow-gray-800 rounded-2xl object-cover"
                src={user}
                alt=""
              />
              <div class="flex flex-col justify-center">
                <p class="text-gray-900  font-semibold">
                  Total Users
                </p>
                <p class="text-black dark:text-gray-900 text-justify font-semibold">
                  {totalUsers}
                </p>
              </div>
            </div>

            <div class="bg-gray-100 border-green-600 dark:bg-blue-300 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
              <img
                class="w-20 p-1 border shadow-xl  shadow-gray-800 h-20 rounded-2xl object-cover"
                src={cancel}
                alt=""
              />
              <div class="flex flex-col justify-center">
                <p class="text-gray-900 p-1 dark:text-black font-semibold">
                Cancelled Bookings
                </p>
                <p class="text-black p-1 dark:text-gray-900 text-justify font-semibold">
                  {canceledBookings}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-start justify-center ">
        <div className="lg:flex  md:w-full sm:w-full px-20 mx-auto items-start justify-center py-10 ">
          <PostDetailChart />
          <Bchart />
        </div>
      </div>
    </div>
  );
}
