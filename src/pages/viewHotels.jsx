import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getByCity } from "../Api/userApi/UserRequest";
import Navbar from "../components/navbar";
import { hideLoading, showLoading } from "../redux/alertsSlice";

export default function ViewHotel() {
  console.log("...............................");
  const Dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState([]);
  console.log(hotel, "Hotels");

  const data = location?.state?.city;
  const city = data.location;

  const getHotelCity = async (city) => {
    try {
      Dispatch(showLoading());

      const { data } = await getByCity(city);
      setHotel(data);
      
    } catch (err) {}
    Dispatch(hideLoading());
  };

  useEffect(() => {
    getHotelCity(city);
  }, []);
  return (
    <>

      <Navbar />
      <div className="w-full  bg-gray-900">
        <div className="bg-blue-200 px-20 mx-auto items-start justify-center py-10 w-full">
          <h1 className="font-semibold text-2xl py-10">
            Available Popular Hotels in {city}
          </h1>
        </div>
      <section className="container mx-auto px-6 flex items-start justify-center py-10 bg-gray-900 ">
            <div className="mr-12 text-xl w-full lg:text-2xl text-gray-800 bg-gray-700 dark:text-gray-900 font-bold lg:w-1/2">
        
            {!hotel ? (
              <div className="bg-gray-900 text-white h-screen px-20 w-full">
                <h1 className="font-semibold text-2xl py-10">
                  Sorry... No Hotels Available In this Location
                </h1>
              </div>

):(

              <div className="w-full">
          <div className=" px-20 w-full ">
            {hotel?.map((hotel) => (
              <div
              className="bg-black cursor-pointer w-full"
              onClick={() => {
                navigate("/hotelInfo", { state: { hotelId: { hotel } } });
              }}
              >
                <div
                href="#"
                class="flex py-4   flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:min-w-full m-5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    class="object-cover  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={hotel.images[0]}
                    alt=""
                    />
                  <div class="flex flex-col justify-between  p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
            )
          }
          </div>
          </section>
      </div>
    </>
  );
}
