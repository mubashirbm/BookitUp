import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { rooms } from "../../Api/adminApi/getRequest";
import { deletingRoom } from "../../Api/adminApi/postRequest";
import ListRoom from "../../components/ListRoom";
import ReactPaginate from "react-paginate";

function ViewRoom() {
  const [room, setRoom] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const roomsPerPage = 5;
  const pagesVisited = pageNumber * roomsPerPage;

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

  const pageCount = Math.ceil(room.length / roomsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="">
      <div className="container mx-auto bg-[#FFFFFF] max-md:pl-16 ">
        <div className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
          <h1 className=" text-white text-center text-lg font-semibold ">View Rooms</h1>
          <table className="w-full mt-5">
            <thead className="bg-gray-50 border-b-2 border-stone-700 ">
              <tr className="b-white border-b-2 ">
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  HotelName
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="bg-gray-800 ">
              {room
                .slice(pagesVisited, pagesVisited + roomsPerPage)
                .map((room) => (
                  <ListRoom room={room} key={room.id} />
                ))}
            </tbody>
          </table>
          <div className="bg-white flex ">
            <table className="w-full mt-5">{/* ... */}</table>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"previous_page"}
            nextLinkClassName={"next_page"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewRoom;
