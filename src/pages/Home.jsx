import React from "react";
import axios from "axios";
import { useEffect } from "react";
// import Layout from "../components/Layout";
import Navbar from "../components/navbar";
import { useState } from "react";
import Banner from "../components/Banner";
import Search from "../components/search";
// import hotels from '../Api/adminApi/getRequest'
import { hotels } from "../Api/adminApi/getRequest";
import { useSelector } from "react-redux";
// import getUser from '../Api/userApi/getRequest'
function Home() {
  const [name, setName] = useState("");
  const [Hotel, setHotel] = useState([]);
  console.log(Hotel, "Hotels");
  console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
  // const getData = async () => {
  //   try {
  //     const { data } = await axios.post(
  //       "/api/get-user-info-by-id",
  //       // const user= getUser()
  //       {},
  //       {
  //         headers: {
  //           Authorization: "Bearer " + localStorage.getItem("token"),
  //         },
  //       }
  //     );
  //     console.log(data.data, "get data data");
  //     const name = data.data.name;
  //     console.log(name, "nnnnnnnnnnnnnaaaaaaaaaam");
  //     setName(name);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getAllHotel = async () => {
    try {
      console.log("first");
      // const {data} = (await axios.get("http://localhost:5000/admin/getAllHotel"))
      const data = await hotels();

      setHotel(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getData();
    getAllHotel();
  }, []);
  useEffect(() => {
    // getHotel()

  }, []);
  return (
    <>
      <Navbar name={name} />
      <Banner />
      <div class="absolute left-72 bg-blue-100 bottom-0">
        <Search Hotel={Hotel} />
      </div>
      {/* <div class="flex px-20 py-20 gap-5">
        {Hotel?.map((hotel) => (
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="">
              <img class="rounded-t-lg" src={hotel.imageUrls} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {hotel.hotel}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {hotel.description}
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div> */}

      {/* <Banner /> */}
    </>
  );
}

export default Home;
