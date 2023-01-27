import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { BlockUser } from "../../Api/adminApi/getRequest";





export default function UserPage() {


  const [users,setUsers]=useState([])


  const getUsers=async()=>{
    try {
      const {data}=await axios.get('http://localhost:5000/admin/getAllUser')
      setUsers(data)
      console.log(data,"jjjjjjjjjjjjjjjjj")
    } catch (error) {
      
    }
  }
  const blockAction=async(userId)=>{
   
   await BlockUser(false,userId)
   
  }
  const unblockAction=async(userId)=>{
    
    await BlockUser(true,userId)
    
  }


useEffect(()=>{
getUsers()
},[])



  return (
   



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
            <tr className="b-white border-b-2 ">
              <td className="p-3 pt-7  text-md text-white">{index+1}</td>
              <td className="p-3 pt-7 text-md text-white">{Item.name}</td>
              <td className="p-3 pt-7 text-md text-white">{Item.email}</td>
              
            {Item ?.isActive?(

                <button
                type="button"
                onClick={()=>{
                  blockAction(Item._id)
                }}
                
                className="mt-4 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Block
                </button>
                  ):(
                <button
                  type="button"
                  onClick={()=>{
                    unblockAction(Item._id)
                  }}
                
                  className="mt-4 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Unblock
                </button>
         )
         }
                
              
            
            </tr>)
         })}
          
        </tbody>
      </table>
    </div>
  </div>
  </div>

  );
}
