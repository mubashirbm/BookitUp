import React, { useEffect, useState } from "react";
import { Await, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import "flowbite-datepicker";
import { check, getUser } from "../Api/userApi/UserRequest";
import axios from "axios";
import { checkDate } from "../Api/userApi/UserRequest";
import { toast } from "react-hot-toast";
import Paypal from "./Paypal";
import { useDispatch, useSelector } from "react-redux";

export default function Booking() {
  const navigate = useNavigate();
//   // const dispatch = useDispatch();
// import { useDispatch, useSelector } from "react-redux";
const [room, setRoom] = useState("");
const location = useLocation();
const Room = location.state.roomDetails;
console.log(Room,'Room')
const data = useSelector((state)=>state.user.user)


const userId=data?._id

const [checkin, setCheckin] = useState("");
const [CheckInDate, setCheckInDate] = useState("");
const [CheckOutDate, setCheckOutDate] = useState("");
const [available, setAvalable] = useState(false);
const [checkout, setCheckout] = useState("");
const [adults, setAdult] = useState("");
const [name, setName] = useState("");
const [bookDetails, setBookDetails] = useState([]);
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const roomId = room._id;
const [unavailable, setUnavailable] = useState([]);
const [pay, setPay] = useState(false);
let days = checkout - checkin;


const handleCheckin = (e) => {
  let Checkin = e.target.value;
  console.log(Checkin,"Checkin Date")
  
  let string = Checkin.split("-");
  let Year = string[0];
  let month = string[1];
  let day = string[2];
  let checkinFormat =parseInt( Year + month + day)
  setCheckin(checkinFormat);
  setCheckInDate(Checkin)
  
};

const handleCheckout = async (e) => {
  let Checkout = e.target.value;
  
  let string = Checkout.split("-");
  let Year = string[0];
  let month = string[1];
  let day = string[2];
  
  let checkoutFormat =parseInt( Year + month + day)
  
  if (checkoutFormat > checkin) {
    setCheckout(checkoutFormat);
    setCheckOutDate(Checkout)
  }
};

const handleSubmit = async (e) => {
    console.log(bookDetails,"roomDetails")
    e.preventDefault();
    let UA = [];
    let start = checkin;
    let end = checkout;
    while (start < end) {
      UA.push(start);
      start++;
    }
    let total = days * room.price;
  

    let D = {
      userId,
      hotelName :Room.hotelName,
      UA,
      name,
      adults,
      email,
      phone,
      roomId,
      total,
      checkin,
      checkout,
      CheckInDate,
      CheckOutDate
      
      

    };

setBookDetails(D)
    // console.log(details,'deeeeeeeee')
    // navigate('/payment',{state:{roomDet:{D}}})
    setPay(true);
  };


  // setRoomDetails(details)
  // console.log(roomDetails,"roomDetails.UA,UAROOMDETAILS")
  const checkAvalablity = async () => {
    let UA = [];
    let start = checkin;
    let end = checkout;
    while (start < end) {
      UA.push(start);
      start++;
    }
    const Id = roomId;
    console.log(UA, "this one");
    // const UAdates=roomDetails.UA
    console.log(UA, ";;;;;");
    console.log(Id, "Iddd");
    // const data = await check(Id);
    const data = await checkDate(Id, UA);
    console.log(data, "data");
    let available = data.data;
    if (available == true) {
      toast.success("Its Available Continue Booking");
      setAvalable(available);
    } else {
      toast.error("Date is Not Available");
      setAvalable("");
    }
  };

  console.log(available, "Available");
  useEffect(() => {
    if (Room) {
      setRoom(Room);
      // getId()
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className=" w-full bg-gray-900 ">
        <section className="container mx-auto px-6 flex items-start justify-center py-10 bg-gray-600 ">
          <div className="mr-12 flex text-xl w-full lg:text-2xl text-gray-800 bg-gray-700 dark:text-gray-900 font-bold lg:w-1/2">
            <div className="flex w-full flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {room.room}
                </h6>
                <p className="text-white text-sm">Please Fil the Following</p>

                <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
                  <form
                    action=""
                    className="lg:flex lg:justify-between w-full items-center"
                  >
                    <div className=" w-full ">
                      <div className="flex flex-col text-sm text-blue-100 w-full lg:max- my-2 p-2">
                        <label>CheckIn</label>
                        <input
                          type="date"
                          className="border text-black rounded-md p-2"
                          onChange={handleCheckin}
                        />
                      </div>
                      {checkin && (
                        <div className="flex text-blue-100 text-sm flex-col w-full lg:max my-2 p-2">
                          <label>CheckOut</label>
                          <input
                            type="date"
                            className="border text-black rounded-md p-2"
                            onChange={handleCheckout}
                          />
                        </div>
                      )}
                    </div>
                  </form>
                  {checkin & checkout && (
                    <button
                      // type="button"

                      className="w-full text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={checkAvalablity}
                    >
                      Check Availability
                    </button>
                  )}
                </div>
                <span>
                  <form>
                    <div>
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Number Of Adults
                      </label>
                      <select
                        name=""
                        id=""
                        // onChange={handleLocation}
                        className="border rounded-md p-2 text-sm"
                        onChange={(e) => {
                          setAdult(parseInt(e.target.value));
                        }}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                      </select>
                    </div>
                    <span className="text-white text-sm ">
                      Enter the details of the Guest
                    </span>

                    <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                      <div className="relative z-0  w-full mb-6 group">
                        <label
                          for="floating_first_name"
                          className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="floating_first_name"
                          className="block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          onChange={(e) => setName(e.target.value)}
                          placeholder
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                      <div className="relative z-0 w-full mb-6 group">
                        <label
                          for="floating_phone"
                          className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Phone
                        </label>
                        <input
                          type="number"
                          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                          name="phone"
                          id="floating_phone"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder=" "
                          required
                        />
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <label
                          for="email"
                          className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          pattern
                          id="floating_company"
                          className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder=" "
                          required
                        />
                      </div>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="link-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onClick={handleSubmit}
                      />
                      <label
                        for="link-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        I agree For payment
                      </label>
                    </div>
                    {pay && <Paypal bookDetails={bookDetails} Room={Room} />}
                  </form>
                </span>
                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p> */}
              </div>
              <div></div>
            </div>
            {checkin & checkout && (
              <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <form className="space-y-6" action="  ">
                    <div>
                      <span className="text-blue-100 text-sm">
                        Total Guests : {adults}
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-100 text-sm">
                        Total Days : {days}
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Total{days * room.price}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
