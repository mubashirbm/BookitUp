import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import { useSelector } from "react-redux";
import Login from '../pages/Login';
import Register from '../pages/Register';
import PublicRoute from '../components/PublicRoute';
import ProtectedRoute from '../components/ProtectedRoute';
import Homepage from '../pages/Homepage';
import ViewHotels from '../pages/viewHotels';
import HotelInfo from '../pages/HotelInfo';

export default function User() {
  // const { loading } = useSelector((state) => state.alerts);
  return (
    <>
    {/* <BrowserRouter> */}

    
    

        <Routes>
        <Route exact path='/' element= {
          
            <Home />
          
        } />
        <Route exact path='/hotelInfo' element= {
          
            <HotelInfo />
          
        } />
        <Route exact path='/viewHotel' element= {
          
            <ViewHotels />
          
        } />
        <Route exact path='/hm' element= {
          
            <Homepage />
          
        } />
        <Route exact path='/login' element= {
          <ProtectedRoute>

            <Login />
          </ProtectedRoute>
          
      } />
        <Route exact path='/register' element= {
          <ProtectedRoute>

            <Register />
          </ProtectedRoute>
         
      } />
    </Routes>
    {/* </BrowserRouter> */}

    </>
    
  )
}
