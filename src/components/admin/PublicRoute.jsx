import React from 'react'
import { Navigate } from 'react-router-dom';

function  PublicRoute(props) {
    if (localStorage.getItem("adminToken")) {
        return <Navigate to="/admin" />;
      } else {
        
        return props.children;
      }
}

export default PublicRoute