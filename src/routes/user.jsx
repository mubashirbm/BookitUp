import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import { useSelector } from "react-redux";
import Login from '../pages/Login';
import Register from '../pages/Register';
import PublicRoute from '../components/PublicRoute';
import ProtectedRoute from '../components/ProtectedRoute';

export default function User() {
  // const { loading } = useSelector((state) => state.alerts);
  return (
    <>
    {/* <BrowserRouter> */}

    
    

        <Routes>
        <Route exact path='/' element= {
          
            <Home />
          
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
