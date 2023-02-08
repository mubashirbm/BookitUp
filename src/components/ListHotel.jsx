import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { deletingHotel } from "../Api/adminApi/postRequest";
import { hotelById } from "../Api/adminApi/getRequest";


export default function ListHotel({ hotel }) {
  const navigate=useNavigate()
  const [visible, setVisible] = useState(true);

  const deletehotel = async (HotelId) => {
    try {
      console.log("deleting");
      await deletingHotel(HotelId);
      setVisible(false)
    } catch (error) {
      console.log(error);
    }
  }
  const editHotel=async (HotelId)=>{
    try{
      const data=await hotelById(HotelId)
console.log(HotelId,"iiiiiiiiiiiiiiiiiiidddddddddddddd")
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      {visible && (
        <tr class="text-gray-700">
          <td className="p-3 pt-7  text-md text-white">
            <div class="flex items-center text-sm">
              <div class="relative w-8 h-8 mr-3 rounded-full">
                <img
                  class="object-cover w-full h-full rounded-full"
                  src={hotel.imageUrls}
                  alt="hotel"
                  loading="lazy"
                />
              </div>
              <div>
                <p class="font-semibold text-white">{hotel.hotel}</p>
                {/* <p class="text-xs text-gray-600">Programmer</p> */}
              </div>
            </div>
          </td>
          <td className="p-3 pt-7  text-md text-white">{hotel.location}</td>
          {/* <td class="px-4 py-3 text-xs border">
                      <span class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm">
                      {" "}
                        Pending{" "}
                        </span>
                      </td> */}
          <ul className="flex justify-center">
            <li>
              {/* <navigate {"/admin/editHotel",}> */}
                <button className="mt-4 inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>{
                  // editHotel(hotel._id)
                  navigate('/admin/editHotel',{state:{hotelId:{hotel}}})
                }}>
                  Edit
                </button>
              {/* </navigate> */}
            </li>
            <li>
              <button
                className="mt-4 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => {
                  deletehotel(hotel._id);
                }}
              >
                Delete
              </button>
            </li>
          </ul>

          {/* <td class="px-4 py-3 text-sm border">6/10/2020</td> */}
        </tr>
      )}
    </>
  );
}
