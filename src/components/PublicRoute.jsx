import React from 'react'
import { Navigate } from 'react-router-dom';

function  PublicRoute(props) {
    if (localStorage.getItem("userToken")) {
        return props.children;
      } else {
        
        return  <Navigate to="/ " />;
      }
}

export default PublicRoute


