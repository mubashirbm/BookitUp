import React from 'react'
import { Navigate } from 'react-router-dom';

function  PublicRoute(props) {
    if (localStorage.getItem("token")) {
        return props.children;
      } else {
        
        return  <Navigate to="/ " />;
      }
}

export default PublicRoute









// /* eslint-disable react/destructuring-assignment */
// /* eslint-disable quotes */
// import React from "react";
// import { Navigate } from "react-router-dom";

// function PublicRoute(props) {
//   if (localStorage.getItem("token")) {
//     return <Navigate to="/" />;
//   }
//   return props.children;
// }

// export default PublicRoute;
