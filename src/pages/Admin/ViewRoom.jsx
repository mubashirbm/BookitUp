import React from "react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { rooms } from "../../Api/adminApi/getRequest";
import { deletingRoom } from "../../Api/adminApi/postRequest";
import ListRoom from "../../components/ListRoom";

function ViewRoom() {
  const [room, setRoom] = useState([]);
  
  const getAllRoom = async () => {
    try {
      console.log("first");

      const data = await rooms();

      setRoom(data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getAllRoom();
  }, []);

  return (
    <div className="">
      {/* <!-- component --> */}
      <div className="container mx-auto bg-[#FFFFFF] max-md:pl-16 ">
        <div className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
          {/* <div class="w-full overflow-x-auto"> */}
          <h1 className=" text-white text-center text-lg font-semibold ">View Rooms</h1>
          <table className="w-full mt-5">
            <thead className="bg-gray-50 border-b-2 border-stone-700 ">
              <tr className="b-white border-b-2 ">
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  HotelId
                </th>
                {/* <th class="px-4 py-3">Status</th> */}
                <th className="p-3 text-sm font-semibold tracking-wide text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="bg-gray-800 ">
              <tr class="text-white"></tr>
              {room?.map((room) => (
                <ListRoom room={room} />
              ))}
            </tbody>
          </table>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ViewRoom;
