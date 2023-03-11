import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getBookedRoom } from "../../Api/adminApi/getRequest";
import { hideLoading, showLoading } from "../../redux/alertsSlice";

export default function BookDetails() {
  const navigate = useNavigate();

  const dispatch=useDispatch()
  const location = useLocation();

  const Id = location?.state?.roomId;
  // const Id=data
  const [room, setRoom] = useState("");
  console.log(room, "Rooooom");
  const getRoom = async (Id) => {
    dispatch(showLoading())
    console.log(Id);
    const data = await getBookedRoom(Id);
    dispatch(hideLoading())
    console.log(data, "dataaa");
    const Room = data[0];
    setRoom(Room);
  };
  console.log(Id, "jjjjjjj");
  useEffect(() => {
    getRoom(Id);
  }, []);
  return (
    <>
    <section className="container mx-auto px-6  items-start justify-center py-10 bg-wh ">

      {/* <div className="mt-10 flex justify-center ">
        <img
          class="object-cover mr-5 rounded-md"
          src={room.roomId?.images[0]}
          style={{ width: "200px", height: "200px" }}
        />
      </div> */}

      {/* <div class="flex justify-center p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-normal tracking-tight mr-2"></h5>
        <p class="mb-2 text-2xl text-center font-normal tracking-tight ml-2">
          <h2 className="text-red-500 mb-4  ">Booking Details</h2>
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
          <h2 className="mb-4 mt-4 text-red-500">Featues Of the Room</h2>
          Bed:{room?.roomId?.bed}
          <br />
          AC:{room?.roomId?.AC}
          <br />
          Laundry :{room?.roomId?.laundry},<br />
          WIFI:{room?.roomId?.wifi}
          <br />
        </p>

        <div class="flex justify-center p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-normal tracking-tight mr-2"></h5>
          <p class="mb-2 text-2xl text-center font-normal tracking-tight ml-2"> */}
            {/* Checkin Date:{room.CheckInDate}<br/>
                  CheckOut Date:{room.CheckOutDate}<br/>
                  Booked Price:{room.total} */}
          {/* </p>
        </div>
      </div> */}

      {/* <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
          </svg> */}
      <div class="text-center">
        {/* <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3> */}
        {/* <p class="text-gray-600 my-2">Thank you for completing your secure online payment.</p> */}
        {/* <p> Have a great day!  </p> */}
        <h1 className="text-xl font-bold">Booked Room Details</h1> 
      </div>
      {/* </div> */}
      {/* </div> */}

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
          {/* <a
            onClick={() => navigate("/admin/booking")}
            class="cursor-pointer px-4 bg-red-500 rounded-3xl hover:bg-red-800 text-white font-semibold py-3"
          >
            Cancel Booking
          </a> */}
        </div>
          </div>
        </div>
      </div>
            <div class="py-10 text-center">
          <a
            onClick={() => navigate("/admin/booking")}
            class="cursor-pointer px-12 bg-indigo-600  rounded-3xl hover:bg-indigo-500 text-white font-semibold py-3"
          >
            BACK
          </a>
        </div>
            </section>
    </>
  );
}
