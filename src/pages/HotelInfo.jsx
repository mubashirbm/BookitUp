
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import { getHotelData } from "../Api/userApi/UserRequest";
import "tw-elements";

import Modal from "../components/Modal";
import Gridcards from "../components/Gridcards";

export default function HotelInfo() {
  const [hotel, setHotel] = useState("");
  console.log(hotel, "hhhhhhhhhhhhh");
  const location = useLocation();
  const data = location?.state?.hotelId;
  const Id = data.hotel._id;
  // console.log(data.hotel.images[0],"lllllllllllllll")

  const getHotel = async (Id) => {
    try {
      console.log(Id, "same Id");
      const data = await getHotelData(Id);
      console.log(data, "ppppppppppp");
      setHotel(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHotel(Id);
  }, []);
  return (
    <>
      <Navbar />
      <div className=" w-full  ">
        {/* <!-- component --> */}
        {hotel && (
        <section className="container mx-auto px-6 flex items-start justify-center py-10">
          <div className="w-full    py-10">
          <h1 className="text-black text-center text-4xl">Hotel Details</h1>
            <div className="container mx-auto px-6 flex items-start justify-center">
              <div className="w-full">
                      <h1 className="mr-12 text-xl lg:text-2xl text-black dark:text-
                      black font-bold lg:w-1/2 ">
                        {hotel.hotel}
                      </h1>
                  <div className="mx-auto w-full p-5 lg:p-10   mb-1 shadow rounded">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8">
              
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center">
                      <div className="w-full lg:w-1/2 pr-0 lg:pr-48">
                       
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
                        {/* ////////////////////////// */}
                      </div>
                      <div className="lg:pl-8 w-full lg:w-1/2 flex flex-col lg:flex-row items-start lg:items-center">
                        <div className="mr-12 flex lg:block items-center lg:mr-6 xl:mr-12 mt-5 lg:mt-0">
                          <h2 className="text-black  font-bold text-xl lg:text-2xl mb-2 leading-6  lg:text-center">
                            Description
                          </h2>
                          <p className="ml-2 lg:ml-0 text-black text-xl leading-5 text">
                            {hotel.description}
                          </p>
                        </div>
                     
                      </div>
                    </div>
                   
                    <div className="flex flex-col lg:flex-row items-start lg:items-center">
                      
                    
                    </div>
                  </div>
               
                {/* Card code block end */}
              </div>
            </div>
          </div>
        </section>
             )}
            </div>

      {/* {<Modal hotel={hotel} />} */}

      {/* ////////////// */}

      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalCenteredScrollable"
        tabindex="-1"
        aria-labelledby="exampleModalCenteredScrollable"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <div>
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide relative"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>

                  <div className="carousel-inner relative w-full overflow-hidden">
                    {hotel &&
                      hotel.images.map((item) => (
                        <div className="carousel-item active float-left w-full">
                          <img
                            // src={item.images}
                            className="block w-full"
                            alt="Wild Landscape"
                          />
                        </div>
                      ))}
                  </div>
                  <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
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
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon inline-block bg-no-repeat"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            {/* <div
        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        
        
      </div> */}
          </div>
        </div>
      </div>
      {/* <section className="dark:bg-gray-800 dark:text-gray-100"> */}

      {/* ..... */}

      {/* //////// */}
      {/* </section> */}
      {hotel && <Gridcards hotel={hotel} />}
    </>
  );
}




