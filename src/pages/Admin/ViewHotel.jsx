import React from "react";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { hotels } from "../../Api/adminApi/getRequest";
import { deletingHotel } from "../../Api/adminApi/postRequest";
import ListHotel from "../../components/ListHotel";
import ReactPaginate from "react-paginate";

function ViewHotel() {
  const navigate = useNavigate();
  const [Hotel, setHotel] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(Hotel.length / perPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const getAllHotel = async () => {
    try {
      console.log("first");
      const start = currentPage * perPage;
      const data = await hotels(start, perPage);
      setHotel(data);
      // const data = await hotels();

      setHotel(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllHotel();
  }, []);

  return (
    <div className="">
      {/* <!-- component --> */}
      <div className="container mx-auto  bg-[#FFFFFF] max-md:pl-16 ">
        <div className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
          {/* <div class="w-full overflow-x-auto"> */}
          <h1 className=" text-white text-center text-lg font-semibold ">
            View Hotels
          </h1>
          <button
            className="mt-4 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => {
              // editHotel(hotel._id)
              navigate("/admin/addHotel");
            }}
          >
            Add New Hotel
          </button>
          <table className="w-full mt-5">
            <thead className="bg-gray-50 border-b-2 border-stone-700 ">
              <tr className="b-white border-b-2 ">
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Location
                </th>
                {/* <th class="px-4 py-3">Status</th> */}
                <th className="p-3 text-sm font-semibold tracking-wide text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="bg-gray-800 ">
              <tr class="text-white"></tr>
              {/* {Hotel?.map((hotel) => (
                <ListHotel hotel={hotel} />
                ))} */}
              {Hotel.slice(
                currentPage * perPage,
                (currentPage + 1) * perPage
              ).map((hotel) => (
                <ListHotel hotel={hotel} />
              ))}
            </tbody>
          </table>

          {/* </div> */}
          <div className="bg-white">
            {/* ... */}
            <table className="w-full mt-5">{/* ... */}</table>
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ViewHotel;
