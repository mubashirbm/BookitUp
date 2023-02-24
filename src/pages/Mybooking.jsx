import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Mybooking() {


  const location =useLocation()
// console.log(_id,"user")
  // const Room = location.state.roomDetails;
  return (
    <>
      <Navbar />
      {/* <div className=" w-full   "> */}
      <div className="w-full ">
        <div className="container mx-auto flex items-start justify-center ">
        <div className="bg-blue-200 px-20 mx-auto items-start justify-center py-10 w-full">
          <h1 className="font-semibold text-2xl py-10">
            My Bookings
          </h1>
        </div>
        </div>
          
        <section className="container mx-auto px-6 flex items-start justify-center py-10 ">
          <div className="mr-12 text-xl w-full lg:text-2xl text-gray-800 bg-gray-100 dark:text-gray-900 font-bold ">
            {/* {!hotel ? ( */}
             
            {/* // ) : ( */}
              <div className="w-full">
                <div className=" px-20 w-full ">
                  {/* {hotel?.map((hotel) => ( */}
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
                        <img
                          class="object-cover  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                          // src={hotel.images[0]}
                          src="data:image/jpeg;base64,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"
                          alt=""
                        />
                        <div class="flex flex-col justify-between  p-4 leading-normal">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-balck">
                            Hotel Name:Hotel {<br/>}
                            Room Id:4254245
                          </h5>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Total Number of members:6
                            {<br/>}
                            Booked Price: 5442
                          </p>
                          <button className="bg-green-300">Status</button>
                        </div>
                      </div>
                   
                    </div>
                  {/* // ))} */}
                </div>
              </div>
            {/* )} */}
          </div>
        </section>
      </div>
    </>
  );
}
