import React from "react";
import { useState } from "react";
import { toast, Toast } from "react-hot-toast";
import Navbar from '../../components/admin/navbar';
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import { showLoading,hideLoading } from "../../redux/alertsSlice";
import Sidebar from "./sidebar";


export default function AddHotel() {
const dispatch =useDispatch()
const [hotel,setHotel]= useState("")

console.log(hotel)
const [location,setLocation]= useState("")
console.log(location)
const [description,setDescription]= useState("")
const [ImageUrl1,setImageUrl1]= useState("")
const [ImageUrl2,setImageUrl2]= useState("")
console.log(description)

const addHotel=async(e)=>{
  e.preventDefault()

  const addHotel={
    hotel,
    location,
    description,
    imageUrls:[ImageUrl1,ImageUrl2]
  }

  try {
    dispatch(showLoading());

    console.log(addHotel,"frond add")
    const result= (await axios.post('http://localhost:5000/admin/AddHotel' , addHotel)).data
    console.log(result)
    toast.success(result.message)
    dispatch(hideLoading());
  }
   catch (error) {
    console.log(error)
  }
}

  return (
    <div>
      {/* <Sidebar/> */}
      
      <Navbar />
      <div>
      <form class='bg-black h-screen py-40 px-20'>
  <div class="mb-6">
    <label for="hotel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hotel Name</label>
    <input type="text" onChange={(e)=>{setHotel(e.target.value)}} id="hotel" value={hotel} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Hotel Name" required/>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
  <div class="mb-6">
    <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
    <input type="text" onChange={(e)=>{setLocation(e.target.value)}} id="location" value={location} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>
  <div class="mb-6">
    <label for="ImageUrl1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ImageUrl1</label>
    <input type="text" onChange={(e)=>{setImageUrl1(e.target.value)}} id="ImageUrl1" value={ImageUrl1} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
  <div class="mb-6">
    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <input type="text" id="description" value={description}  onChange={(e)=>{setDescription(e.target.value)}} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>
  </div>






  <div class="mb-6">
    <label for="ImageUrl2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ImageUrl2</label>
    <input type="text" id="ImageUrl2" value={ImageUrl2}  onChange={(e)=>{setImageUrl2(e.target.value)}} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>
  </div>
 
  <button type="submit" onClick={addHotel} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD</button>
</form>

      </div>
      </div>
      
  );
}
