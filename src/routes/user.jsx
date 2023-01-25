import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
// import { useSelector } from "react-redux";
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function user() {
  // const { loading } = useSelector((state) => state.alerts);
  return (
    <>
    <Routes>
        <Route exact path='/' element= {<Home />} />
        <Route exact path='/login' element= {<Login />} />
        <Route exact path='/register' element= {<Register />} />
    </Routes>
    </>
    
  )
}
