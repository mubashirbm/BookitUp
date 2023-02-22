import React from 'react'

export default function BookingManage() {
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
                  Email
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
             {/* {users?.map((Item,index)=>{
              return(
                <ListBooking Item={Item} index={index}/>
                )
             })}
               */}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    
    
    
    <div class="container mx-auto">
              
            </div>
    
           
                </>
  )
}
