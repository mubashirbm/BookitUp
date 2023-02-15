

import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/navbar'

export default function Booking() {
    const [room,setRoom]=useState("")
    const location=useLocation()
    const Room=location.state.room
    // setRoom(Room)
    console.log(room)
  return (
      <>
      < Navbar/>
      <div className='w-full  bg-gray-200 dark:bg-gray-100 '>
      <section className="container mx-auto px-6 flex items-start justify-center">
Booking
 
        </section>
      </div>
    
    </>
  )
}

