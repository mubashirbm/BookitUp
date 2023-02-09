import Search from 'antd/es/transfer/search'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



function Booking({Hotel}) {
    const navigate=useNavigate()
    console.log(Hotel,"city")
    const data={Hotel}
    const [location,setLocation]=useState("")
   
    console.log(location,"location")

    const handleLocation =(e)=>{
        setLocation(e.target.value)
        // console.log(e.target.value, 'looooooooooooooooooooooooooi')

    }
  return (
    <div id='deals' className="max-w-[1140px] m-auto w-full p-4">
        <form action="" className='lg:flex lg:justify-between w-full items-center'>
            <div className="flex flex-col my-2 py-2">
                <label>Destination</label>
                    
                    <select name="" id="" onChange={handleLocation} className='lg:w-[300px] md:w-full border rounded-md p-2'>
             {data.Hotel?.map((hotel)=>
                    <option value={hotel.location}>{hotel.location}</option>
                    
                    )} 
                </select>
               
            </div>
            {/* <div className="flex w-full">
                <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                    <label>CheckIn</label>
                    <input type="date" className='border rounded-md p-2' />
                </div>
                <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                    <label>CheckOut</label>
                    <input type="date" className='border rounded-md p-2' />
                </div>
            </div> */}
            <div className=" my-2 p-2">
                <span className='border bg-gray-700 text-white cursor-pointer  px-4 py-1'onClick={()=>{
                    navigate('/viewHotel',{state:{city:{location}}})
                }} >Search</span>
                
            </div>
        </form>
    </div>
  )
}

export default Booking