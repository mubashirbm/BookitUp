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
import Hero from '../components/Hero'
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
      {/* <div class="absolute left-72 bg-blue-100 bottom-0"> */}
      <Hero Hotel={Hotel}/>
        <Search Hotel={Hotel} />
      {/* </div> */}

      {/* <Banner /> */}
    </>
  );
}

export default Home;
