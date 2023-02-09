import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getByCity } from "../Api/userApi/UserRequest";
import Navbar from "../components/navbar";
import { hideLoading, showLoading } from "../redux/alertsSlice";

export default function ViewHotel() {
  console.log("...............................")
  const Dispatch=useDispatch()
  const location = useLocation();
  const navigate=useNavigate()
  const [hotel,setHotel]=useState([])
  console.log(hotel,"Hotels")

  const data = location?.state?.city;
  const city = data.location;

  const getHotelCity = async (city) => {
    try {
      Dispatch(showLoading())

      const { data } = await getByCity(city);
      setHotel(data)

      Dispatch(hideLoading())
    } catch (err) {

    }
  
  };

  useEffect(() => {
    getHotelCity(city);
  },[]);
  return (
    <>
      <Navbar />

    <div className="container ">
        <div className="bg-blue-200 px-20 ">
          <h1 className="font-semibold text-2xl py-10">
            Available Popular Hotels in {city}
          </h1>
        </div>
        <div className="">
          <div className=" px-20 max-w-sm w-full lg:max-w-full ">
{hotel?.map((hotel)=>(
<div className="bg-black cursor-pointer " onClick={()=>{
  navigate('/hotelInfo',{state:{hotelId:{hotel}}})
}}>

<div href="#" class="flex py-4 w-full  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full m-5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={hotel.imageUrls} alt=""/>
    <div class="flex flex-col justify-between  p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</div>
</div>

   ))}
          </div>
        </div>
      </div>
    </>
  );
}
