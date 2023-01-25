import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { Button } from "antd";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import AdminHome from "./pages/Admin/AdminHome"
import { useSelector } from "react-redux";
// import ProtectedRoute from "./components/ProtectedRoute";
// import PublicRoute from "./components/PublicRoute";
import Userslist from "./pages/Admin/Userslist";
import Profile from "./pages/Profile";
import AddHotel from "./components/admin/AddHotel";
import User from './routes/user.jsx'
import Admin from './routes/Admin.jsx'

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    < >
    <BrowserRouter>
     <Routes>
       <Route path="/*" element={<User/>}/>
       <Route path="/admin/*" element={<Admin/>}/>
       
     </Routes>
     </BrowserRouter>    
   </>

    
  );
}

export default App;
