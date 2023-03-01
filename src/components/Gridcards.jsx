import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { checkDate, getRoomData } from "../Api/userApi/UserRequest";

export default function Gridcards({ hotel }) {
  const [room, setRoom] = useState([]);
  const navigate = useNavigate();

  console.log(room, "Rooms");

  const location = useLocation();
  const data = location?.state?.hotelId;
  const Id = data.hotel._id;
  // const Id = hotel._id;
  console.log(Id, "id of hotel in grid");
  // console.log(data.hotel.images[0],"lllllllllllllll")

  const getRooms = async (Id) => {
    try {
      console.log(Id, "Hotel Id in grid");
      const data = await getRoomData(Id);
      setRoom(data);
      console.log(data, "ppppppppppp");
      setRoom(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRooms(Id);
  }, []);

  console.log(hotel, ",,,,,,,,,,,,,,,,,,");
  return (
    <>
      {/* {hotel && */}
      





      <section className="container overflow-x-hidden  mx-auto  flex items-start justify-center py-10 ">
          <div className=" text-xl w-full lg:text-2xl text-gray-800 bg-gray-300 dark:text-gray-900 font-bold ">
            {/* {!hotel ? ( */}
            <br/>
             <span>  </span><h1 className="ml-7">AVAILABLE ROOMS</h1>
            {/* // ) : ( */}
              {/* <div className="w-full"> */}
                {/* <div className=" px-20 w-full "> */}
                  {/* {hotel?.map((hotel) => ( */}
                  {room?.map((room) => (

                    <div
                    className="bg- cursor-pointer w-full"
                    onClick={() => {
                      // navigate("/hotelInfo", {
                        // state: { hotelId: { hotel } },
                        // });
                      }}
                      >
                      <div
                        href="#"
                        class="flex py-4 px-2  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:min-w-full m-5 hover:bg-gray-100 dark:border-gray-700  dark:hover:bg-gray-200"
                        >
                        <div
                        id="carouselExampleCaptions"
                        class="carousel slide relative"
                        data-bs-ride="carousel"
                        >
                        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                            ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                            ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                            ></button>
                        </div>
                        <div className="carousel-inner relative w-full overflow-hidden ">
                          {/* {room?.map((room)=>( */}

                          <div className="carousel-item active relative float-left  w-full">
                            <img
                              src={hotel.images[0]}
                              className="block w-full"
                              alt="..."
                              />
                            <div className="carousel-caption hidden md:block absolute text-center">
                              <h5 className="text-xl">
                                {/* First slide label */}
                              </h5>
                              <p>
                                {/* Some representative placeholder content for the
                              first slide. */}
                              </p>
                            </div>
                          </div>
                          {/* ))} */}
                          <div className="carousel-item relative float-left w-full">
                            <img
                              src={hotel.images[1]}
                              className="block w-full"
                              alt="..."
                              />
                            <div className="carousel-caption hidden md:block absolute text-center">
                              <h5 className="text-xl">
                                {/* Second slide label */}
                              </h5>
                              <p>
                                {/* Some representative placeholder content for the
                              second slide. */}
                              </p>
                            </div>
                          </div>
                          <div className="carousel-item relative float-left w-full">
                            <img
                              src={hotel.images[2]}
                              className="block w-full"
                              alt="..."
                              />
                            <div className="carousel-caption hidden md:block absolute text-center">
                              <h5 className="text-xl">
                                {/* Third slide label */}
                              </h5>
                              <p>
                                {/* Some representative placeholder content for the
                              third slide. */}
                              </p>
                            </div>
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon inline-block bg-no-repeat"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon inline-block bg-no-repeat"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                        <div class="flex flex-col justify-between  pl-4 leading-normal">
                          <h5 class="mb-2 text-4xl font-bold tracking-tight text-balck">
                            {room.room}
                          </h5>
                            

                          <p class="mb-3  inline-flex font-normal text-sm text-gray-700 dark:text-gray-400 w-1/4">
                            
                          Room :Room Room Id:425gvbngvhbjngvhbj4245dghkghjgdkytghfty sdfd  d sgfd sgfd
                            {room.description}
                          {/* <button className="bg-green-300">Status</button> */}
                          </p>
                        </div>
                        <div class="flex flex-col justify-between -ml-20 p-4 leading-normal">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-balck">
                            Features : {<br/>}
                           
                          </h5>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            AC:{room.AC}
                            {<br/>}
                            Bed Type: {room.bed}

                          </p>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Laundry:{room.AC} not Available

                            {<br/>}
                            WIFI: {room.wifi}

                          </p>
                          
                        </div>
                        <div class="flex   p-4 leading-normal">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-balck">
                           
                             {<br/>}
                           
                          </h5>
                          <p class="mb-3 font-normal ml-8 text-gray-700 dark:text-gray-400">
                            
                            {<br/>}
                            Per Night :$ {room.price}
                          </p>
                          <button
                                            className="bg-blue-100 p-2 rounded-xl ml-2"
                                            onClick={() => {
                                              navigate("/booking", {
                                                state: { roomDetails: room },
                                              });
                                            }}
                                          >
                                            Book Now
                                          </button>
                        </div>
                      </div>
                   
                    {/* </div> */}
                  {/* // ))} */}
                </div>
                  ))}
              {/* </div> */}
            {/* )} */}
          </div>
        </section>










    </>
  );
}
