import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AddHotel from '../components/admin/AddHotel'
import Home from '../pages/Admin/AdminHome'
import Login from '../pages/Admin/Login'
import Register from '../pages/Register'




export default function Admin() {
  return (
   <>
   <Routes>
   <Route exact path='/' element= {<Home />} />
   <Route exact path='/addHotel' element= {<AddHotel />} />
   <Route exact path='/register' element= {<Register />} />
   <Route exact path='/login' element= {<Login />} />
   {/* <Route exact path='/' element= {<Home />} />
   <Route exact path='/' element= {<Home />} />
   <Route exact path='/' element= {<Home />} /> */}
   </Routes>
   </>
  )
}
