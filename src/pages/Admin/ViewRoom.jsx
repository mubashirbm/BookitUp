import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { rooms } from "../../Api/adminApi/getRequest";
import { deletingRoom } from "../../Api/adminApi/postRequest";
import ListRoom from "../../components/ListRoom";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/alertsSlice";

function ViewRoom() {
  const [room, setRoom] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const roomsPerPage = 10;
  const pagesVisited = pageNumber * roomsPerPage;
  const dispatch=useDispatch()

  const getAllRoom = async () => {
    try {
      console.log("first");
dispatch(showLoading())
      const data = await rooms();
dispatch(hideLoading())
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
                  No
                </th>
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
                .map((room,index) => (
                  <ListRoom room={room} key={room.id} index={index} />
                ))}
            </tbody>
          </table>
          <div className="  ">
            <table className="w-full mt-5">{/* ... */}</table>
          <ReactPaginate
            // previousLabel={"Previous"}
            // nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"flex text-white justify-center"}
            activeClassName={"active"}
            pageClassName={"page-item"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            breakClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakLinkClassName={"page-link"}
            disabledClassName={"disabled"}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            previousLabel={"«"}
            nextLabel={"»"}
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewRoom;
