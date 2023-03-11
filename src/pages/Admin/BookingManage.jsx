import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllBookings } from '../../Api/adminApi/getRequest'
import ListBooking from '../../components/admin/ListBooking'
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../../redux/alertsSlice'

export default function BookingManage() {
    const [booking,setBooking]=useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const dispatch=useDispatch()
    console.log(booking,"booking")

const allBookings= async()=>{
  dispatch(showLoading())
const data=await getAllBookings()
dispatch(hideLoading())
console.log(data,'ALL BOOKINGS')
setBooking(data)
} 

    useEffect(()=>{
allBookings()
    },[])
    const handlePageClick = (data) => {
      setCurrentPage(data.selected);
      setTotalPages(Math.ceil(data.length / 10));
    };
  return (
    <>
<div className="">
      <div className="container mx-auto bg-[#FFFFFF] max-md:pl-16 ">
    <div className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
  <h1 className="text-white text-center font-semibold text-xl">Booking Management</h1>
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
              RoomId
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              
            </th>
            {/* <th className="p-3 text-sm font-semibold tracking-wide text-left">
              
            </th> */}
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
         {booking?.map((booking,index)=>{
             return(
                 <ListBooking Item={booking} index={index}/>
            )
        })}
          
        </tbody>
      </table>
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



<div class="container mx-auto">
          
        </div>

       
            </>
  )
}
