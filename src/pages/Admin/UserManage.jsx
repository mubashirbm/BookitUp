import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BlockUser,getUser } from "../../Api/adminApi/getRequest";
import { hideLoading, showLoading } from "../../redux/alertsSlice";
import ListUsers from "../../components/admin/ListUsers";

import ReactPaginate from 'react-paginate';

export default function UserManage() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch();

  const getUsers = async () => {
    dispatch(showLoading())
    try {
      const { data } = await getUser();
      dispatch(hideLoading())
      setUsers(data);
      setTotalPages(Math.ceil(data.length / 10));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const usersPerPage = 10;
  const offset = currentPage * usersPerPage;

  return (
    <>
      <div className="">
        <div className="container mx-auto bg-[#FFFFFF] max-md:pl-16 ">
          <div className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
            <h1 className="text-white text-center font-semibold text-xl">
              User Management
            </h1>
            <table className="w-full mt-5">
              <thead className="bg-gray-50 border-b-2 border-stone-700 ">
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    {" "}
                    No
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Name
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Email
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {users
                  .slice(offset, offset + usersPerPage)
                  .map((item, index) => {
                    return <ListUsers Item={item} index={index} />;
                  })}
              </tbody>
            </table>
            <div className="">
            <table className="w-full mt-5">{/* ... */}</table>
            <ReactPaginate
           
              pageCount={totalPages}
              onPageChange={handlePageClick}
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
    </>
  );
}
