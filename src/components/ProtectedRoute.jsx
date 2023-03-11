import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../redux/userSlice";
import {showLoading,hideLoading} from "../redux/alertsSlice"
import { getUser } from "../Api/userApi/UserRequest";


function ProtectedRoute(props) {
// const { user } = useSelector((state) => state.user);
// const {user} = useSelector((state) => state.user.user);
const user=localStorage.getItem('userToken')

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getuser = async () => {
    try {
      dispatch(showLoading())
      const response = await getUser()
      dispatch(hideLoading())
      if (response.data.success) {
        dispatch(setUser(response.data.data));  
      } else {
        localStorage.clear()
        navigate("/login");
      }
    } catch (error) {
      dispatch(hideLoading())
      localStorage.clear()

      navigate("/login");
    }
  };

    useEffect(() => {
      if (!user) {
        getuser();
      }
    }, [user]);

  if (localStorage.getItem("userToken")) {
    return props.children;
  } else {
    return <Navigate to= '/'/>;
  }
}

export default ProtectedRoute;






// /* eslint-disable react/destructuring-assignment */
// /* eslint-disable quotes */
// import React, { useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../redux/userSlice";
// import { getUserDetails } from "../api/User/authRequest";

// function ProtectedRoute(props) {
//   const user = useSelector((state) => state.user);
//   const userId = localStorage.getItem("userId");
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!user && userId) {
//       const getData = async () => {
//         const response = await getUserDetails(userId);
//         dispatch(setUser(response));
//       };
//       getData();
//     }
//   }, []);
//   if (localStorage.getItem("token")) {
//     return props.children;
//   }
//   return <Navigate to="/login" />;
// }

// export default ProtectedRoute;
