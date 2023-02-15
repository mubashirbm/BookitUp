import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getRoomData } from "../Api/userApi/UserRequest";

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
      <section className="container mx-auto px-6 flex items-start justify-center py-10 bg-gray-600 ">

      <div className="w-full bg-gray-200 dark:bg-gray-900  py-10">
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div className="w-full">
            {/* Card is full width. Use in 12 col grid for best view. */}
            <h1 className="mr-12 text-xl lg:text-2xl mb-3 text-gray-800 dark:text-gray-100 font-bold lg:w-1/2 ">
              Available Rooms
            </h1>
            {room?.map((room) => (
              <div className="mx-auto w-full p-5 lg:p-10 bg-white dark:bg-gray-800 border-2 mb-1 shadow rounded">
                <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8">
                  <h1 className="mr-12 text-xl lg:text-2xl text-gray-800 dark:text-gray-100 font-bold lg:w-1/2 ">
                    {room.room}
                  </h1>
                  {/* <div className="flex flex-col md:flex-row items-start md:items-center">
                                        <div className="mt-4 lg:mt-0 mr-0 xl:mr-8 text-sm bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium py-2 w-48 flex justify-center">Start Date: 22 Jun, 2020</div>
                                        <div className="mt-4 lg:mt-0 mr-0 lg:mr-4 xl:mr-8 text-sm bg-red-100 text-red-500 rounded font-medium py-2 w-48 flex justify-center">End Date: 03 Dec, 2020</div>
                                      </div> */}
                </div>
                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                  <div className="w-full lg:w-1/2 pr-0 lg:pr-48">
                    {/* <div className="flex items-center">
                                            <div className="w-12 h-12 rounded">
                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_28.png" alt="logo" />
                                            </div>
                                            <div className="ml-2">
                                            <h5 className="text-gray-800 dark:text-gray-100 font-medium text-base">Fitbit Incorporation</h5>
                                            <p className="text-gray-600 dark:text-gray-400 text-xs font-normal">San Diego, California</p>
                                            </div>
                                            </div>
                                          <p className="mt-5 text-sm text-gray-600 dark:text-gray-400 font-normal">The web has witnessed mammoth advances; however a website’s success still depends on just one thing: how users interact with it.</p> */}
                    {/* ////////////////////// */}
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
                      <div className="carousel-inner relative w-full overflow-hidden">
                        {/* {room?.map((room)=>( */}

                        <div className="carousel-item active relative float-left w-full">
                          <img
                            src={room.images[0]}
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
                            src={room.images[0]}
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
                            src={room.images[0]}
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
                    {/* ////////////////////////// */}
                  </div>
                  <div className="lg:pl-8 w-full lg:w-1/2 flex flex-col lg:flex-row items-start lg:items-center">
                    <div className="mr-12 flex lg:block items-center lg:mr-6 xl:mr-12 mt-5 lg:mt-0">
                      <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl mb-2 leading-6 mb-1 lg:text-center">
                        Features Of the Room
                      </h2>
                      <p className="ml-2 lg:ml-0 text-gray-800 dark:text-gray-100 text-xl leading-5 text">
                        {room.description}
                      </p>
                    </div>
                    {/* <div className="mr-12 flex lg:block lg:mr-6 xl:mr-12 mt-5 lg:mt-0">
                                            <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl leading-6 mb-1 lg:text-center">03</h2>
                                            <p className="ml-2 lg:ml-0 text-gray-800 dark:text-gray-100 text-xl leading-5 text-center">Teams Assigned</p>
                                          </div> */}
                    {/* <div className="mt-5 flex lg:block lg:mt-0">
                                            <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl leading-6 mb-1 lg:text-center">14</h2>
                                            <p className="ml-2 lg:ml-0 text-gray-800 dark:text-gray-100 text-xl leading-5 text-center">Tasks Pending</p>
                                          </div> */}
                  </div>
                </div>
                <div className="relative">
                  <hr className="mt-8 mb-8 lg:mb-10 h-1 rounded bg-gray-200" />
                  {/* <hr className="absolute top-0 h-1 w-2/3 rounded bg-indigo-400" /> */}
                </div>
                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                  <div className="flex flex-col lg:flex-row w-full lg:w-2/3 items-start lg:items-center mb-8 lg:mb-0">
                    <div className="mr-24 flex lg:block  items-center mb-4 lg:mb-0">
                      <h3 className="text-indigo-700 dark:text-indigo-600 leading-6 text-lg">
                        Per Day
                      </h3>
                      <h2 className="mr-2 lg:mr-0 text-gray-600 dark:text-gray-400 text-xl lg:text-2xl font-bold">
                        ₹{room.price}
                      </h2>
                    </div>

                    <button
                      className="bg-blue-100 p-2 rounded-xl"
                      onClick={() => {
                        navigate("/booking", { state: { roomDetails: room } });
                      }}
                    >
                      Book Now
                    </button>
                    {/* <div className="mr-24 flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                                            <h3 className="text-indigo-700 dark:text-indigo-600 leading-6 text-lg">Expenses</h3>
                                            <h2 className="mr-2 lg:mr-0 text-gray-600 dark:text-gray-400 text-xl lg:text-2xl font-bold">$189,955</h2>
                                          </div> */}
                    {/* <div className="flex lg:block flex-row-reverse items-center">
                                            <h3 className="text-indigo-700 dark:text-indigo-600 leading-6 text-lg">Net Cashflow</h3>
                                            <h2 className="mr-2 lg:mr-0 text-gray-600 dark:text-gray-400 text-xl lg:text-2xl font-bold">$888,546</h2>
                                          </div> */}
                  </div>
                  {/* <div className="flex items-center w-full lg:w-1/3 justify-start lg:justify-end">
                                        <div className="border-2 border-white dark:border-gray-700 shadow rounded-full w-10 h-10">
                                            <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card8.jpg" alt="avatar" />
                                            </div>
                                            <div className="-ml-4 border-2 border-white dark:border-gray-700 shadow rounded-full w-10 h-10">
                                        <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card9.jpg" alt="avatar" />
                                        </div>
                                        <div className="-ml-4 border-2 border-white dark:border-gray-700 shadow rounded-full w-10 h-10">
                                            <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card10.jpg" alt="avatar" />
                                            </div>
                                            <div className="-ml-4 border-2 border-white dark:border-gray-700 shadow rounded-full w-10 h-10">
                                            <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card11.jpg" alt="avatar" />
                                            </div>
                                            <div className="-ml-4 border-2 border-white dark:border-gray-700 shadow rounded-full w-10 h-10">
                                            <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card12.jpg" alt="avatar" />
                                            </div>
                                    </div> */}
                </div>
              </div>
            ))}
            {/* Card code block end */}
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
