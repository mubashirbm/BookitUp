import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../redux/userSlice";
import {showLoading,hideLoading} from "../redux/alertsSlice"


function ProtectedRoute(props) {
const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      dispatch(showLoading())
      const response = await axios.post(
        "/api/user/get-user-info-by-id",
        { token: localStorage.getItem("token") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
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
    if (user) {
      getUser();
    }
  }, [user]);

  if (localStorage.getItem("token")) {
    return <Navigate to= '/'/>;
  } else {
    return props.children;
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
