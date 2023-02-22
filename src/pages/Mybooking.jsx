import React from "react";
import Navbar from "../components/navbar";

export default function Mybooking() {
  return (
    <>
      <Navbar />
      <div className=" w-full bg-gray-900 ">
        <section className="container mx-auto px-6 flex items-start justify-center py-10 bg-gray-600 ">
          <div className="mr-12 text-xl w-full lg:text-2xl text-gray-800 bg-gray-700 dark:text-gray-900 font-bold lg:w-1/2">
            {/* <div
              id="carouselExampleCaptions"
              class="carousel slide relative "
               data-bs-ride="carousel"
             >
              <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
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
              <div class="carousel-inner relative w-full overflow-hidden ">
                <div class="carousel-item active relative float-left w-full ">
                  {hotel.images && (
                    <img
                      src={hotel.images[2]}
                      class="block w-screen"
                      alt="..."
                    />
                  )}
                </div>
                <div class="carousel-item relative float-left w-full ">
                  {hotel.images && (
                    <img
                      src={hotel.images[1]}
                      class="block w-screen"
                      alt="..."
                    />
                  )}
                </div>
                <div class="carousel-item relative float-left w-full ">
                  {hotel.images && (
                    <img
                      src={hotel.images[0]}
                      class="block w-screen"
                      alt="..."
                    />
                  )}
                </div>
              </div>
              <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div> */}

            <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
              <h2 className="text-3xl font-semibold leading-none text-blue-100">
                {/* {hotel.hotel} */}
              </h2>
              <p className="mt-4 mb-8 text-sm text-blue-100">
                {/* {hotel.description} */}
              </p>
            </div>
          </div>
        </section>
      </div>

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
                    {/* {hotel && */}
                      {/* hotel.images.map((item) => ( */}
                        <div className="carousel-item active float-left w-full">
                          <img
                            // src={item.images}
                            className="block w-full"
                            alt="Wild Landscape"
                          />
                        </div>
                      {/* ))} */}
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
          </div>
        </div>
      </div>
    </>
  );
}
