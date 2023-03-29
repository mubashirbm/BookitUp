import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { deletingHotel } from "../Api/adminApi/postRequest";
import { hotelById } from "../Api/adminApi/getRequest";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css






export default function ListHotel({ hotel ,index }) {
  const navigate=useNavigate()
  const [visible, setVisible] = useState(true);

  const deletehotel = async (HotelId) => {
    try {
     
      await deletingHotel(HotelId);

      setVisible(false)
    } catch (error) {
      console.log(error);
    }
  }
 const confirm=(HotelId)=>{
  confirmAlert({

    message: 'Do you want to delete your Hotel.',
    buttons: [
      { 
        label: 'Yes',
        onClick: () => {deletehotel(HotelId)}
      },
      {
        label: 'No',
      }
    ]
  });
 };
  const editHotel=async (HotelId)=>{
    try{
      const data=await hotelById(HotelId)

    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      {visible && (
        <tr class="text-gray-700">
      
                <td className="p-3 pt-7  text-md text-white">{index + 1}</td>
          <td className="p-3 pt-7  text-md text-white">
            <div class="flex items-center text-sm">
              <div class="relative w-8 h-8 mr-3 rounded-full">
                <img
                  class="object-cover w-full h-full rounded-full"
                  src={hotel.images[0]}
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
          
          <ul className="flex justify-center">
            <li>
              {/* <navigate {"/admin/editHotel",}> */}
                <button className="mt-7 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>{
                  // editHotel(hotel._id)
                  navigate('/admin/addRoom',{state:{hotelId:{hotel}}})
                }}>
                  Add Room
                </button>
              {/* </navigate> */}
            </li>
            <li>
              {/* <navigate {"/admin/editHotel",}> */}
                <button className="mt-7 inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>{
                  // editHotel(hotel._id)
                  navigate('/admin/editHotel',{state:{hotelId:{hotel}}})
                }}>
                  Edit
                </button>
              {/* </navigate> */}
            </li>
            <li>
              <button
                className=" mt-7 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out" 
                
                onClick={() => { 
                  confirm(hotel._id);
                }}
              >
                Delete
              </button>
            </li>
          </ul>

          
        </tr>
      )}
      



      <div class="">

  
</div>




    </>
    
  );
}
