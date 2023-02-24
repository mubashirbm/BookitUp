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
import Navbar from '../components/navbar';
import Booking from '../pages/Booking';
import Payment from '../pages/Payment';
import Invoice from '../pages/Invoice';
import Otp from '../pages/Otp';
import Table from '../pages/Table';
import Mybooking from '../pages/Mybooking';

export default function User() {
  // const { loading } = useSelector((state) => state.alerts);
  return (
    <>
    {/* <BrowserRouter> */}

    
    
{/* <Navbar/> */}
        <Routes>
        <Route exact path='/' element= {
          
            <Home />
          
        } />
        <Route exact path='/table' element= {
          
            <Table />
          
        } />
        <Route exact path='/hotelInfo' element= {
          
            <HotelInfo />
          
        } />
        <Route exact path='/viewHotel' element= {
          
            <ViewHotels />
          
        } />
        <Route exact path='/invoice' element= {
          // <ProtectedRoute>
            
            <Invoice />
          // {/* </ProtectedRoute> */}
          
        } />
        <Route exact path='/mybooking' element= {
          
            
            <Mybooking />
          
          
        } />
        <Route exact path='/otp' element= {
          // <ProtectedRoute>
            <Otp />
          // {/* </ProtectedRoute> */}
          
        } />
        <Route exact path='/login' element= {
          // <ProtectedRoute>
            <Login />
          // {/* </ProtectedRoute> */}
          
      } />
        <Route exact path='/register' element= {
          // <ProtectedRoute>

            <Register />
          // {/* </ProtectedRoute> */}
         
      } />
        <Route exact path='/booking' element= {
          // <ProtectedRoute>

            <Booking />
          // </ProtectedRoute>
         
      } />
        <Route exact path='/payment' element= {
          // <ProtectedRoute>

            <Payment />
          // {/* </ProtectedRoute> */}
         
      } />
    </Routes>
    {/* </BrowserRouter> */}

    </>
    
  )
}
