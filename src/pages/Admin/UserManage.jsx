import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BlockUser,getUser } from "../../Api/adminApi/getRequest";
import { hideLoading, showLoading } from "../../redux/alertsSlice";
import ListUsers from "../../components/admin/ListUsers";
import $ from "jquery";
// import "datatables.net";
// import "datatables.net-dt/css/jquery.dataTables.css";
// import Helmet from "helmet";
// import $ from 'jquery';

// import {getUser} from '../../Api/adminApi/getRequest'






export default function UserManage() {


  const [users,setUsers]=useState([])
  const dispatch = useDispatch


  const getUsers=async()=>{
    try {

      //  dispatch(showLoading())
      
      const {data}=await getUser()
      setUsers(data)
      console.log(data,"jjjjjjjjjjjjjjjjj")
    } catch (error) {
      
    }
  }
  // const blockAction=async(userId)=>{
  //  await BlockUser(false,userId)
  // //  dispatch(hideLoading())
  // }
  // const unblockAction=async(userId)=>{
    
  //   await BlockUser(true,userId)
    
  // }


// useEffect(()=>{
// getUsers()
// },[])

useEffect(() => {
  getUsers()
  $(document).ready(function () {
    $("#dataTable").DataTable();
  });
}, []);

  return (
   


<>
<div className="">
      <div className="container mx-auto bg-[#FFFFFF] max-md:pl-16 ">
    <div className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
  <h1 className="text-white text-center font-semibold text-xl">User Management</h1>
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
         {users?.map((Item,index)=>{
          return(
            <ListUsers Item={Item} index={index}/>
            )
         })}
          
        </tbody>
      </table>
    </div>
  </div>
  </div>



<div class="container mx-auto">
            {/* <div class="flex flex-col">
                <div class="w-full">
                    <div class="p-8 border-b border-gray-200 shadow">
                        <table class="divide-y divide-gray-300" id="dataTable">
                            <thead class="bg-black">
                              
                                <tr>
                                    <th class="px-6 py-2 text-xs text-white">
                                        ID
                                    </th>
                                    <th class="px-6 py-2 text-xs text-white">
                                        Name
                                    </th>
                                    <th class="px-6 py-2 text-xs text-white">
                                        Email
                                    </th>
                                    
                                    <th class="px-6 py-2 text-xs text-white">
                                       Status
                                    </th>
                                    
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-300">
                            {users?.map((Item,index)=>{
          return(
            <ListUsers Item={Item} index={index}/>
            )
         })}
                                
                                
                                

                            </tbody>
                        </table>
                    </div>
                </div>
            </div> */}
        </div>

      {/* <Helmet> */}
        {/* <script>
            $(document).ready(function () {
                $('#dataTable').DataTable()

            });
        </script> */}
        {/* </Helmet> */}
       
            </>
  );
}
