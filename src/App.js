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

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <BrowserRouter>
      {loading && (
        <div className="spinner-parent">
          <div className="spinner-border" role="status"></div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={
            // <PublicRoute>
              <Register />
            // </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            // <ProtectedRoute>
            <Home />
              
            // </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            // <ProtectedRoute>
              <AdminHome />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/admin/userslist"
          element={
            // <ProtectedRoute>
              <Userslist />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            // <ProtectedRoute>
              <Profile />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/admin/AddHotel"
          element={
            // <ProtectedRoute>
            
              <AddHotel />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
