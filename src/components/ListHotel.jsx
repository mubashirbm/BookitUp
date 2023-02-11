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
                <button className="mt-4 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>{
                  // editHotel(hotel._id)
                  navigate('/admin/addRoom',{state:{hotelId:{hotel}}})
                }}>
                  Add Room
                </button>
              {/* </navigate> */}
            </li>
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
                className=" mt-4 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out"  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"
                // onClick={() => { 
                //   deletehotel(hotel._id);
                // }}
              >
                Delete
              </button>
            </li>
          </ul>

          {/* <td class="px-4 py-3 text-sm border">6/10/2020</td> */}
        </tr>
      )}
      



      <div class="">
  {/* <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
    Vertically centered modal
  </button> */}
  
</div>

<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        
      <div class="modal-body relative p-4">
        <p>Are You Sure ?.....</p>
      </div>
        
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"onClick={() => { 
                  deletehotel(hotel._id);
                }}
          class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Yes
        </button>
        <button type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"  data-bs-dismiss="modal" aria-label="Close">
          No
        </button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollable" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalCenteredScrollableLabel">
          Modal title
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
        <p>This is some placeholder content to show a vertically centered modal. We've added some extra copy here to show how vertically centering the modal works when combined with scrollable modals. We also use some repeated line breaks to quickly extend the height of the content, thereby triggering the scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
    {/* <br><br><br><br><br><br><br><br><br><br> */}
    <p>Just like that.</p>
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
          class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
        <button type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
    </>
    
  );
}
