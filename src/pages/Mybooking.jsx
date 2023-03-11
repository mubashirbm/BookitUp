import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { bookings } from "../Api/userApi/UserRequest";
import roomImg from "../images/room.jpg";
import { confirmAlert } from "react-confirm-alert"; // Imp
import 'react-confirm-alert/src/react-confirm-alert.css'
import { hideLoading, showLoading } from "../redux/alertsSlice";
import {ChangeStatus} from '../Api/userApi/UserRequest'

export default function Mybooking() {
  // const userId=dispat(data)
  const [booking, setBooking] = useState([]);
  const dispatch=useDispatch()
  const navigate=useNavigate()

  console.log(booking, "nnnnnnn");
  const location = useLocation();

  const user = useSelector((state) => state.user.user);
  const Id = user._id;
  // const RoomId=
  // console.log(roomId,'ROOMIIDD')
  

  const [active, setActive] = useState("");
  const cancelAction = async (roomId) => {
    await ChangeStatus(roomId);
    // setActive(false);
    //  dispatch(hideLoading())
  };

  const getAllBookings = async (Id) => {
dispatch(showLoading())
    const data = await bookings(Id);
    dispatch(hideLoading())
    // const data=res.name
    console.log(data, "all Bookings");

    setBooking(data);
  };

  const cancel = (roomId) => {
    console.log(roomId,"ROOMIIDD")
    confirmAlert({
      title: 'Confirm to ',
      message: 'Are you sure ! want to cancel ?',
      buttons: [
        { 
          label: 'Yes',
          onClick: () => {cancelAction(roomId)}
        },
        {
          label: 'No',
        }
      ]
    });
  };


  useEffect(() => {
    getAllBookings(Id);
  }, []);
  return (
    <>
      <Navbar />
      {/* <div className=" w-full   "> */}
      <div className="w-full ">
        <div className="container mx-auto flex items-start justify-center ">
          <div className="bg-blue-200 px-20 mx-auto items-start justify-center py-10 w-full">
            <h1 className="font-semibold text-2xl py-10">My Bookings</h1>
          </div>
        </div>

        {/* <section className="container mx-auto px-6 flex items-start justify-center py-10 "> */}
          
        {/* </section> */}
      </div>
      <section className="container mx-auto px-6  items-start justify-center py-10 bg-wh ">
         
      
      {booking?.map((room) => {
           return (
      <div className="flex pl-10 py-10 justify-center pr-10">
        <div className=" grid lg:grid-cols-3 md:grid-cols-3 border sm:grid-cols-1 grid-cols-1 gap-4 px-4">
          <img
            className=" lg:h-full lg:w-full rounded-t-lg  md:h-full md:w-full sm:w-full  md:rounded-none md:rounded-l-lg"
            src={room.roomId?.images[0]}
            alt=""
          />
          <div className="lg:ml-10 p-6">
            <h5 className="mb-2 text-xl text-red-500  font-medium  ">
            {/* <h2 className="text-red-500 mb-4  ">Booking Details</h2> */}
            Booking Details
            </h5>
            Room ID:{room?.roomId?._id}
            <br />
            Hotel:{room.hotelName}
            <br />
            Booked Person:{room?.name},<br />
            Number Of Guests:{room.adults}
            <br />
            Checkin Date:{room.CheckInDate}
            <br />
            CheckOut Date:{room.CheckOutDate}
            <br />
            Booked Price:{room.total}
           
          </div>
          <div className="flex flex-col p-6">
          <h5 className="mb-2 text-xl text-red-500  font-medium  ">
            {/* <h2 className="text-red-500 mb-4  ">Booking Details</h2> */}
            Featues Of the Room
            </h5>
            
            Bed:{room?.roomId?.bed}
            <br />
            AC:{room?.roomId?.AC}
            <br />
            Laundry :{room?.roomId?.laundry},<br />
            WIFI:{room?.roomId?.wifi}
            <br />
            <div class="py-10 text-center">
              {!room.canceled ?(

                <a
                onClick={() => cancel(room.roomId?._id)}
                class="cursor-pointer px-4 bg-red-500 rounded-3xl hover:bg-red-800 text-white font-semibold py-3"
                >
            Cancel Booking
          </a>
            ):(
              <a
                // onClick={() => cancel(room.roomId?._id)}
                class="cursor-pointer px-4 bg-red-500 rounded-3xl hover:bg-red-800 text-white font-semibold py-3"
                >
            Canceled
          </a>
            )
              
            }
          
        </div>
          </div>
        </div>
      </div>
           )
      })}
            <div class="py-10 text-center">
          <a
            onClick={() => navigate("/")}
            class="cursor-pointer px-12 bg-indigo-600  rounded-3xl hover:bg-indigo-500 text-white font-semibold py-3"
          >
            BACK
          </a>
        </div>
            </section>
    </>
  );
}
