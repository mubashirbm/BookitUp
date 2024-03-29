import React from 'react'
import { useLocation } from 'react-router-dom'
import image from '../images/one.webp'

export default function Invoice() {

  const location =useLocation()
  const bookData=location?.state?.bookDetails
  const roomData =location?.state?.Room
  const bookDetails=bookData.bookDetails
  const Room=roomData.Room

  


  return (
    <>
              <div className="mt-10 flex justify-center ">
                <img class="object-cover ml-5 rounded-md" src={Room.images[0]} style={{width:"200px", height:"200px"}} />
              </div>

              <div class="flex justify-center p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-normal tracking-tight mr-2">
                  
                </h5>
                <p class="mb-2 text-2xl text-center font-normal tracking-tight ml-2">
                  Room ID:{bookDetails?.roomId}<br/>
                  Hotel:{bookDetails?.hotelName}<br/>
                  Booked Person:{bookDetails.name},<br />
                  Number Of Guests:{bookDetails.adults}<br/>
                  Checkin Date:{bookDetails.CheckInDate}<br/>
                  CheckOut Date:{bookDetails.CheckOutDate}<br/>
                  Booked Price:{bookDetails.total}
                </p>
              </div>
             
     
          <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
          </svg>
          <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
            <p class="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
            <p> Have a great day!  </p>
            <div class="py-10 text-center">
              <a href="/mybooking" class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                DONE
              </a>
            </div>
          </div>
       
    </>
  )
}